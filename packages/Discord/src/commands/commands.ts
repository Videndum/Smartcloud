/**
 * @extends Discord
 */
module.exports = {
    name: "commands",
    version: "1",
    description: "Global command to list all commands on bot.",
    alias: ["command", "c"],
    permissions: "admin",
    typing: {
        active: true,
        mode: "channel"
    },
    usage: "<command>",
    guildOnly: false,
    cooldown: 5,
    args: true,
    minargs: 0,
    helpInformation: "Simply simply do `commands` to get the full list of commands",
    execute: (root:any, message:any, args:any) => new Promise<string>((resolve, reject) => {
        const embed = new root.discord.RichEmbed()
            .setTitle(`**_Command list_**`)
            .setDescription("You can use `!commands {command}` to view detailed information about each command. \n\n For non command related support please use `!help`")
            .setColor(13632027)
            .setFooter("SCAA Command Help | smartcloud.gg | Discord Module", "http://assets.smartcloud.gg/logos/1x/icon_shadow.png");
        if (!args[0]) {
            let commandOutput:any = [];
            root.commands.forEach((data: any, cmd:any) => {
              if (commandOutput.indexOf(cmd) > -1) {
                  root.log(`${cmd} already in !commands`, 1);
              }
              else {
                  root.log(`${cmd} added to !commands`, 1);
                  commandOutput = commandOutput.concat(cmd);
                  commandOutput = commandOutput.concat(data.alias);
                  embed.addField(`!${cmd}`, data.description);
              }
            })
            message.reply(embed);
            resolve();
        }
        else {
            const cmd = root.commands.get(args[0]);
            let data = "";
            let name = "";
            if (cmd) {
                if (cmd.alias)
                    name = `${cmd.name} (Alias: ${cmd.alias})`;
                if (cmd.version)
                    data += `Version: ${cmd.version} \n`;
                if (cmd.module)
                    data += `Module: ${cmd.module} \n`;
                if (cmd.description)
                    data += `Description: ${cmd.description} \n`;
                if (cmd.permissions)
                    data += `Required Permissions: ${cmd.permissions} \n`;
                if (cmd.usage)
                    data += `Example usage: !${args[0]} ${cmd.usage} \n`;
                if (cmd.cooldown)
                    data += `Cooldown time: ${cmd.cooldown} second(s) \n`;
                if (cmd.guildOnly)
                    data += `Blocked in DM: ${cmd.guildOnly} \n`;
                if (cmd.args)
                    data += `Requires Args: ${cmd.args} (${cmd.minargs}) \n`;
                if (cmd.helpInformation)
                    data += `\n Guide: ${cmd.helpInformation} \n`;
                embed.addField(`!${name}`, data);
                resolve();
            }
            else {
                reject({data: "Command not found"});
            }
            message.reply(embed);
        }
    }),
};
//process.uptime() --> uptime
