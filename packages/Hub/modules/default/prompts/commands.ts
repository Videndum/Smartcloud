export function doesntExist (message:any) {
  message.reply(`That command does not exist, please try again.`);
}
export function cooldown (message:any, timeLeft:any, cmd:any) {
  message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${cmd.name}\` command.`);
}
export function dms (message:any) {
  message.reply('I can\'t execute that command inside DMs!');
}
export function args (message:any, cmd:any) {
  let reply = `You didn't provide enough arguments, ${message.author}!`;
  if (cmd.usage) {
    reply += `\nThe proper usage would be: ${cmd.name} ${cmd.usage}`;
  }
  message.channel.send(reply);
}
