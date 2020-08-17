import * as Discord from 'discord.js';
import * as smartcloudjs from '@videndum/smartcloudjs'
import * as bodyParser from "body-parser";
import { Routes } from "./routes/api";
import express from "express";
const { StaticPool } = require("node-worker-threads-pool");

smartcloudjs.log('this is a test', 'info')
// const config = require(`${process.cwd()}/helpers/config.json`).extensions.discord
const manager = new Discord.ShardingManager(`${__dirname}/bot.js`, { token: config.UniqueConfigs.token });

class Init {
    public api: express.Application;
    public routePrv: Routes = new Routes();
    constructor () {
        
    }
    // discord () {
    //     manager.on('shardCreate', (shard:any) => {
    //         smartcloudjs.log(`Launching shard ${shard.id}`, 2)
    //     });
    //     manager.spawn().catch((e: any) => {smartcloudjs.log(e, 4)});
    // }
    // API () {
    //     core["apiPool"] = new StaticPool({
    //         size: 20,
    //         task: `${__dirname}/worker.js`,
    //     });
    //     this.api = express();
    //     this.apiconfig();
    //     this.routePrv.routes(this.api, core);
    // }
    // private apiconfig(): void{
    //     try {
    //       this.api.use(smartcloudjs.core.sentry.Handlers.requestHandler());
    //       this.api.use(smartcloudjs.core.sentry.Handlers.errorHandler());
    //     } catch {}
    //     this.api.use(bodyParser.json());
    //     this.api.use(bodyParser.urlencoded({ extended: true }));
    //   }
}

// export function Api (message:any) {
//   console.log(message.action)
//   const api = require(`${__dirname}/routes/api`);
//   let actions = api.actions;
//   try {
//     for (var action in actions) {
//       if (action.toLowerCase() == message.action.toLowerCase()) {
//         return actions[action].function(message)
//       }
//     }
//     return {status: 502, message: "Smart Cloud Application - You haven't called a valid function, please include this in your request!"}
//   } catch {
//     return {status: 501, message: "Smart Cloud Application - You haven't called a valid function, please include this in your request!"}
//   }
// }
