/**
* @extends Discord
*/

class Global {
  /**
   * Defualt message for global Command
   * @param  message Discord Message
   * @param  root    SCAA Discord Root Actions
   * @return         Sends Embed
   * @private
   */
  help (message:any, root:any) {
    const embed = new root.discord.RichEmbed()
        .setTitle(`**_Command help_**`)
        .setDescription("The `!global` command requires a sub command")
        .addField("!global help", "This command will bring up this information guide.")
        .addField("!global announce", "The global announce command is for Global Staff attempting to announce something to all systems online, and in the TGT Media Ltd server. \n ```!global announce {brand} {type} {message} ```**Brand**```The brand you intend to use from following: \n - tgtmedia \n - smartcloud \n - gdgaming```**Type**```Type is the type of announcement you are sending. Please choose one of the following: \n\n - announce \n Used when announcing to everyone \n\n - broadcast \n Broadcasting to users with notifications turned on \n\n - issue \n Used to notify users of a issue with bots```")
        .addField("!global database", "A command used to ping the database. Please use help command for more information \n```!global database help```")
        .addField("!global reload", "The global reload is used for reloading global commands within the active bots. It should be used as follows \n```!global reload {command}```")
        .addField("!global debug", "The global debug is used for enabling/disabling global debug within the active bots. It should be used as follows \n```!global debug {state}```")
        .setColor(13632027)
        .setFooter("SCAA Command Help | smartcloud.gg | Discord Module", "http://assets.smartcloud.gg/logos/1x/icon_shadow.png");
    message.reply(embed);
  }
  /**
   * Failed Access message for Global Command
   * @param  message Discord Message
   * @param  root    SCAA Discord Root Actions
   * @return         Sends Embed
   * @private
   */
  accessFailed (message:any, root:any) {
    const embed = new root.discord.RichEmbed()
        .setTitle(`**_Access Denied_**`)
        .setDescription("The `!global` command is for bot global staff only. Server staff should consult our support team if you need to run this command")
        .addField("Support Team Information", "You can contact our support team using the following discord server \n https://discord.gg/P5DwgzN \n\n or by using our help command \n```!help supportchat```")
        .setColor(13632027)
        .setFooter("SCAA Command Help | smartcloud.gg | Discord Module", "http://assets.smartcloud.gg/logos/1x/icon_shadow.png");
    message.reply(embed);
  }
}
export const global = new Global()

class Admin {
  /**
  * Defualt message for global Command
  * @param  message Discord Message
  * @param  root    SCAA Discord Root Actions
  * @return         Sends Embed
  * @private
  */
  help (message:any, root:any) {
      const embed = new root.discord.RichEmbed()
          .setTitle(`**_Command help_**`)
          .setDescription("The `!admin` command requires a sub command")
          .addField("!admin help", "This command will bring up this information guide.")
          .addField("!admin reload", "The reload command is used to reload bot functions in the case of change. Note that if you used either our web portal, desktop applications, mobile app or inbuilt functions such as `!admin build command` you do not need to use reload")
          .setColor(13632027)
          .setFooter("SCAA Command Help | smartcloud.gg | Discord Module", "http://assets.smartcloud.gg/logos/1x/icon_shadow.png");
      message.reply(embed);
  }
  /**
  * No Reload Option (Command || Action || Event)
  * @param  message Discord Message
  * @param  root    SCAA Discord Root Actions
  * @return         Sends Embed
  * @private
  */
  noreload (message:any, root:any) {
    const embed = new root.discord.RichEmbed()
        .setTitle(`**_Command help_**`)
        .setDescription("The `!admin reload` command requires a sub command")
        .setColor(13632027)
        .setFooter("SCAA Command Help | smartcloud.gg | Discord Module", "http://assets.smartcloud.gg/logos/1x/icon_shadow.png");
    message.reply(embed);
  }
  /**
  * Failed Access message for Global Command
  * @param  message Discord Message
  * @param  root    SCAA Discord Root Actions
  * @return         Sends Embed
  * @private
  */
  accessFailed (message:any, root:any) {
    const embed = new root.discord.RichEmbed()
        .setTitle(`**_Access Denied_**`)
        .setDescription("The `!admin` command is for bot staff only. Users should consult our support team if you need to run this command")
        .addField("Support Team Information", "You can contact our support team using the following discord server \n https://discord.gg/P5DwgzN \n\n or by using our help command \n```!help supportchat```")
        .setColor(13632027)
        .setFooter("SCAA Command Help | smartcloud.gg | Discord Module", "http://assets.smartcloud.gg/logos/1x/icon_shadow.png");
    message.reply(embed);
  }
}
export const admin = new Admin()
