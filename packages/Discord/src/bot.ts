/**
 * @module Discord
 */
import EventEmitter from 'events'
//@ts-ignore
const event = new EventEmitter()
export const events = event
let core:any
try {core = require(`@smartcloudai/core`).core} catch (_) {console.log(_)}
import Discord = require('discord.js');
export const root:any = {
  config: require(`${process.cwd()}/helpers/config.json`).extensions.discord,
  commands: new Discord.Collection(),
  discord: Discord,
  classes: require('./classes/all'),
  actions: new Discord.Collection(),
  prompts: new Map(),
  globalArgs: new Map(),
  serverArgs: new Map(),
  log: (data: string | undefined, level: number | undefined) => {try {core.log(data,level)} catch { console.log(data)}},
  core: core,
  events: events
}
/**
 * Load discord functions
 * @param  core SCAA Core Actions
 * @private
 */
function loadEvents() {
  try {
    root.events.on("commandCompleted", () => {
        root.core.log('Command Completed', 2);
    })
    root.events.on("botLoaded", () => {
      root.log(`Shard ${root.client.shard.id} is ready to serve in ${root.client.channels.size} channels on ${root.client.guilds.size} servers, for a total of ${root.client.users.size} users.`, 2);
      root.log("Ready at " + root.client.readyAt, 2);
    })
    root.events.on("CommandUnknown", (message:any) => {
      root.log(`Command Unknown ${message}`, 1)
   })
 } catch (_) {}
}


/**
 * Initialize the discord module
 * @param  core SCAA Core Actions
 * @private
 */
function initialize(){
  root["client"] = new Discord.Client(),
  root["core"] = core
  root["cooldowns"] = new Discord.Collection();
  root["log"] = (data: string | undefined, level: number | undefined) => {try {core.log(data,level,"DISCORD")} catch { console.log(data)}}
  root.client.login(root.config.UniqueConfigs.token);
  root.client.on("error", (e: any) => root.log(e,4));
  root.client.on("warn", (e: any) => root.log(e,3));
  root.client.on("debug", (e: any) => root.log(e,1));
  loadEvents();
  root.classes.modules.load()
}
initialize()
