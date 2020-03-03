"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function doesntExist(message) {
    message.reply(`That command does not exist, please try again.`);
}
exports.doesntExist = doesntExist;
function cooldown(message, timeLeft, cmd) {
    message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${cmd.name}\` command.`);
}
exports.cooldown = cooldown;
function dms(message) {
    message.reply('I can\'t execute that command inside DMs!');
}
exports.dms = dms;
function args(message, cmd) {
    let reply = `You didn't provide enough arguments, ${message.author}!`;
    if (cmd.usage) {
        reply += `\nThe proper usage would be: ${cmd.name} ${cmd.usage}`;
    }
    message.channel.send(reply);
}
exports.args = args;
