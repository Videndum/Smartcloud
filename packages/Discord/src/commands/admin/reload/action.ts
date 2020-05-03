/**
 * @extends Discord
 */
module.exports = {
    name: "action",
    version: "1",
    description: "Command to administrate the discord bot",
    alias: ["actions", "a"],
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
        // if (!root.classes.user.checkUserRank(message.author.id)) {
        //     embeds.admin.accessFailed(message, root);
        //     reject({err:"accessfailed", data: "User Rank was not sufficient"});
        // }
        // else {
        //   if (!args[0]) embeds.admin.help(message, root);
        //   switch (args[0]){
        //     case "reload":
        //       if (!args[1]) embeds.admin.noreload(message, root);
        //       switch (args[1]){
        //         case "command" || "commands":
        //           const cmd = root.commands[args[2]];
        //           console.log("reloading command ", cmd)
        //         break;
        //         case "action" || "actions":
        //           const action = root.actions[args[2]];
        //           console.log("reloading command ", action)
        //         break;
        //         case "event" || "events":
        //           // const event = root.eventlist[args[2]];
        //           // console.log("reloading command ", event)
        //         break;
        //       }
        //       break;
          // }
        // }
        resolve();
    })
};
//process.uptime() --> uptime
