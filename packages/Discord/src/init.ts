import * as Discord from 'discord.js';
let core:any
try {core = require(`@smartcloudai/core`).core} catch (_) {console.log(_)}
const log = (data: string | undefined, level: number | undefined) => {try {core.log(data,level)} catch { console.log(data)}}

const config = require(`${process.cwd()}/helpers/config.json`).extensions.discord
const manager = new Discord.ShardingManager(`${__dirname}/bot.js`, { token: config.UniqueConfigs.token });

export class Init {
  constructor(){
    manager.on('shardCreate', (shard:any) => {
      log(`Launching shard ${shard.id}`, 2)
    });
    manager.spawn().catch((e: any) => {core.log(e, 4)});
  }
}

export function Api (message:any) {
  console.log(message.action)
  const api = require(`${__dirname}/routes/api`);
  let actions = api.actions;
  try {
    for (var action in actions) {
      if (action.toLowerCase() == message.action.toLowerCase()) {
        return actions[action].function(message)
      }
    }
    return {status: 502, message: "Smart Cloud Application - You haven't called a valid function, please include this in your request!"}
  } catch {
    return {status: 501, message: "Smart Cloud Application - You haven't called a valid function, please include this in your request!"}
  }
}

export function smartcloud (base: any) {
  core.registerModule(`${__dirname}/smartcloud.js`, "discord", {api: __filename, core: base})
  return __filename
}
