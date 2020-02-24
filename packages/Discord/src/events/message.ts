/**
 * @extends Discord
 */
module.exports = (root:any, message:any) => {
  let commandFound
  if (message.author.bot) return;
  if (message.guild !== null) {
    root.log(`Message "${message.content}" from ${message.author.username} in ${message.guild} (${message.guild.id})`, 1)
  } else {
    root.log(`Message "${message.content}" from ${message.author.username} in PM`, 1)
  }
  root.classes.configs.getPrefixes().forEach((prefix:any) => {
    if (message.content.indexOf(prefix) !== 0) return;
    runCommands(message, root, prefix)
    commandFound = true
  })
  if (commandFound == true) return
  if (message.isMentioned(root.client.user)) {
    runCommands(message, root, `${root.client.user} `)
    commandFound = true
  }
  if (commandFound == true) return
  root.classes.configs.getRegex().forEach((regex:any) => {
    var regexConst = new RegExp(regex, "i");
    if (regexConst.test(message.content)) {
      //@ts-ignore
      if(regexConst.exec(message.content).index == 0) runCommands(message, root, regex, true);
    }
  })
}


async function runCommands(message:any, root:any, prefix?:any, regex?:boolean) {
  let command: string
  let args: string[]
  if (regex === undefined) {
    args = message.content.slice(prefix.length).trim().split(/ +/g);
    //@ts-ignore
    command = args.shift().toLowerCase();
  } else {
    args = message.content.split(/ +/g);
    command = args[1]
    args = args.slice(2)
  }
  let cmd = await getCommand(root, args, command);
  if(!cmd) {
    root.events.emit("commandunknown", message)
    if (message.guild !== null) {
      root.log(`Command '${prefix}${command}' was called by ${message.author.username} in ${message.guild} (${message.guild.id}) but did not exist`, 3);
    } else {
      root.log(`Command '${prefix}${command}' was called by ${message.author.username} but did not exist`, 3);
    }
    return
  }
  if (!root.cooldowns.has(cmd.name)) {
  	root.cooldowns.set(cmd.name, new root.discord.Collection());
  }
  const now = Date.now();
  const timestamps = root.cooldowns.get(cmd.name);
  const cooldownAmount = (cmd.cooldown || 3) * 1000;
  if (timestamps.has(message.author.id)) {
	const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
  	if (now < expirationTime) {
  		const timeLeft = (expirationTime - now) / 1000;
  		return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${cmd.name}\` command.`);
  	}
  }
  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
  if (cmd.guildOnly && message.channel.type !== 'text') {
  	return message.reply('I can\'t execute that command inside DMs!');
  }
  if (cmd.args && cmd.minargs > args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;
		if (cmd.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${cmd.name} ${cmd.usage}\``;
		}
		return message.channel.send(reply);
	}
  root.events.emit("commandstarted", command)
  const javacmd = cmd.java;
  if (javacmd == true) {
    cmd.execute(root, message, args).then(() => {
      root.events.emit("commandfinished", command)
    }).catch((err:any) => {
      root.log(`Command "${message}" exited with error: ` + (err.data || err), 3)
      root.events.emit((err.err || "commanderror"), (err.action || command), "Json Action exited with error: " + (err.data || err))
    })
  } else {
    root.classes.actions.startActions(cmd, args, {message: message}).then(() => {
      root.events.emit("commandfinished", command)
    }).catch((err:any) => {
      root.log(`Command "${message}" exited with error: ` + (err.data || err), 3)
      root.events.emit((err.err || "commanderror"), (err.action || command), "Json Action exited with error: " + (err.data || err))
    })
  }
}

async function getCommand (root:any, args:any, command:any){
  let cmd = root.commands.get(command) || root.commands.find((cmd:any) => cmd.alias && cmd.alias.includes(command));
  if (cmd.type == "container") {
    return await getSubCommand(cmd, args, 0)
  }
  return cmd
}

async function getSubCommand (cmd:any, args:any, argsNo:number) {
  let newCommand = cmd.subCommands.get(args[argsNo]) || cmd.subCommands.find((cmd:any) => cmd.alias && cmd.alias.includes(args[argsNo]))
  if (newCommand.type == "container") {
    argsNo++
    return await getSubCommand(newCommand, args, argsNo)
  }
  return newCommand
}
