/**
 * @extends Discord
 */
export class User {
  checkBotOwner(client:any, user:any) {
    if (user === client.core.config.extentions.discord.UniqueConfigs.botOwnerID) {
      return true
    } else {
      return false
    }
  }

 checkUserRank(user:any) {
    if (user === "199300105432465419") {
      return true
    } else {
      return false
    }
  }
}
