/**
 * @extends Discord
 */
module.exports = {
    name: "actions",
    version: "1",
    description: "Global command to list all actions on bot.",
    alias: ["action", "a"],
    permissions: "admin",
    typing: {
        active: true,
        mode: "channel"
    },
    usage: "<action>",
    guildOnly: false,
    cooldown: 5,
    args: true,
    minargs: 0,
    helpInformation: "Simply simply do `actions` to get the full list of actions",
    execute: (root:any, message:any, args:any) => new Promise<string>((resolve, reject) => {
        const embed = new root.discord.MessageEmbed()
            .setTitle(`**_action list_**`)
            .setDescription("You can use `!actions {action}` to view detailed information about each action. \n\n For non action related support please use `!help`")
            .setColor(13632027)
            .setFooter("SCAA Command Help | smartcloud.gg | Discord Module", "http://assets.smartcloud.gg/logos/1x/icon_shadow.png");
        if (!args[0]) {
            let actionOutput:any = [];
            root.actions.forEach((data: any, action:any) => {
              if (actionOutput.indexOf(action) > -1) {
                  root.log(`${action} already in !commands`, 1);
              }
              else {
                  root.log(`${action} added to !commands`, 1);
                  actionOutput = actionOutput.concat(action);
                  actionOutput = actionOutput.concat(data.alias);
                  embed.addField(`${action}`, data.description);
              }
            })
            message.reply(embed);
            resolve();
        }
        else {
            const action = root.actions.get(args[0]);
            let data = "";
            let name = "";
            if (action) {
                if (action.alias)
                    name = `${action.name} (Alias: ${action.alias})`;
                else (action.alias)
                    name = `${action.name}`;
                if (action.version)
                    data += `Version: ${action.version} \n`;
                if (action.module)
                    data += `Module: ${action.module} \n`;
                if (action.description)
                    data += `Description: ${action.description} \n`;
                if (action.permissions)
                    data += `Required Permissions: ${action.permissions} \n`;
                if (action.usage)
                    data += 'Example usage: `' + action.usage +'` \n';
                if (action.cooldown)
                    data += `Cooldown time: ${action.cooldown} second(s) \n`;
                if (action.guildOnly)
                    data += `Blocked in DM: ${action.guildOnly} \n`;
                if (action.args)
                    data += `Requires Args: ${action.args} (${action.minargs}) \n`;
                if (action.helpInformation)
                    data += `\n Guide: ${action.helpInformation} \n`;
                embed.addField(`${name}`, data);
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
