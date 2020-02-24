/**
 * @extends Discord
 */
module.exports = {
    name: "global",
    version: "1",
    description: "Global command used by Smart Cloud Administrators",
    alias: ["g"],
    permissions: "admin",
    typing: {
        active: true,
        mode: "channel"
    },
    usage: "<action>",
    guildOnly: false,
    cooldown: 5,
    args: true,
    minargs: 1,
    helpInformation: "Smart Cloud Administrators can do many things within this command. \n Simply simply do `global help` to get the full help",
    execute: (root:any, message:any, args:any) => new Promise<string>((resolve, reject) => {
        const embeds = root.prompts.get("global").get("embeds")
        root.log(`${message.author.username} is calling the GLOBAL Command`, 3);
        root.log(`${message.author.username} Global Access: ${root.classes.user.checkUserRank(message.author.id)}`, 3);
        if (!root.classes.user.checkUserRank(message.author.id)) {
          embeds.global.accessFailed(message, root);
          reject({err:"accessfailed", data: "User Perms was not sufficient"});
        }
        else {
          embeds.global.help(message, root);
          resolve();
        }
    }),
};
