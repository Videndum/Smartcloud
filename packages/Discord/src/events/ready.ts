/**
 * @extends Discord
 */
module.exports = (root:any) => {
  root.log(`Shard ${root.client.shard.id} is ready to serve in ${root.client.channels.size} channels on ${root.client.guilds.size} servers, for a total of ${root.client.users.size} users.`, 2);
  root.log("Ready at " + root.client.readyAt, 2);
  const shardID = root.client.shard.id + 1
  try {root.client.user.setPresence({game: {name: `smartcloud.gg | shard: ${shardID}/${root.client.shard.count} | ?help`, type: 0}, status: "Online"})}catch{root.client.user.setPresence({game: {name: `smartcloud.gg | shard: ${shardID}/${root.client.shard.count} | ?help`, type: 0}, status: "Online"})}
  root.client.user.setUsername((root.config.UniqueConfigs.botNickname || "Smartcloud"));
  try {root.client.user.setAvatar('https://assets.videndum.studio/smartcloud/logos/1x/IconSquare.png').catch((_: any) => {root.log(_,3)})}catch (_){root.log(_,3)}
}
