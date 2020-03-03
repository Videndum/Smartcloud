/**
 * @extends Discord
 */
module.exports = {
    name: "command",
    version: "1",
    description: "Command to administrate the discord bot",
    alias: ["commands", "c"],
    permissions: "admin",
    typing: {
        active: true,
        mode: "channel"
    },
    usage: "<action>",
    cooldown: 5,
    guildOnly: false,
    args: true,
    minargs: 0,
    helpInformation: "",
    execute: (root:any, message:any, args:any) => new Promise<string>((resolve, reject) => {
        root.log(`${message.author.username} Global Access: ${root.classes.user.checkUserRank(message.author.id)}`, 3);
        if (!root.classes.user.checkUserRank(message.author.id)) {
            root.prompts.get("Global").get("admin").accessFailed(root, message);
            reject({err:"accessfailed", data: "User Rank was not sufficient"});
        }
        else {
          console.log(args)
          if (!args[2]) root.prompts.get("Global").get("admin").reload.command.help(root, message);
          resolve();
        }
    }),
};
//process.uptime() --> uptime
