module.exports = {
    /**
  * Defualt message for global Command
  * @param  message Discord Message
  * @param  root    SCAA Discord Root Actions
  * @return         Sends Embed
  * @private
  */
  help (root:any, message:any) {
    const embed = new root.discord.MessageEmbed()
    .setTitle(`**_Command help_**`)
    .setDescription("The `!admin` command requires a sub command")
    .addField("!admin help", "This command will bring up this information guide.")
    .addField("!admin reload", "The reload command is used to reload bot functions in the case of change. Note that if you used either our web portal, desktop applications, mobile app or inbuilt functions such as `!admin build command` you do not need to use reload")
    .setColor(13632027)
    .setFooter("SCAA Command Help | smartcloud.gg | Discord Module", "http://assets.smartcloud.gg/logos/1x/icon_shadow.png");
    message.reply(embed);
  },
  /**
  * Failed Access message for Global Command
  * @param  message Discord Message
  * @param  root    SCAA Discord Root Actions
  * @return         Sends Embed
  * @private
  */
  accessFailed (root:any, message:any) {
    const embed = new root.discord.MessageEmbed()
    .setTitle(`**_Access Denied_**`)
    .setDescription("The `!admin` command is for bot staff only. Users should consult our support team if you need to run this command")
    .addField("Support Team Information", "You can contact our support team using the following discord server \n https://discord.gg/P5DwgzN \n\n or by using our help command \n```!help supportchat```")
    .setColor(13632027)
    .setFooter("SCAA Command Help | smartcloud.gg | Discord Module", "http://assets.smartcloud.gg/logos/1x/icon_shadow.png");
    message.reply(embed);
  },
  reload: {
    /**
    * Reload Help (Command || Action || Event)
    * @param  message Discord Message
    * @param  root    SCAA Discord Root Actions
    * @return         Sends Embed
    * @private
    */
    help: (root:any, message:any) => {
      const embed = new root.discord.MessageEmbed()
          .setTitle(`**_Command help_**`)
          .setDescription("The `!admin reload` command requires a sub command")
          .setColor(13632027)
          .setFooter("SCAA Command Help | smartcloud.gg | Discord Module", "http://assets.smartcloud.gg/logos/1x/icon_shadow.png");
      message.reply(embed);
    },
    command: {
      help: (root:any, message:any) => {
        const embed = new root.discord.MessageEmbed()
            .setTitle(`**_Command help_**`)
            .setDescription("The `!admin reload command` requires a command to reload")
            .setColor(13632027)
            .setFooter("SCAA Command Help | smartcloud.gg | Discord Module", "http://assets.smartcloud.gg/logos/1x/icon_shadow.png");
        message.reply(embed);
      }
    }
  },
}
