import * as bodyParser from "body-parser";
import { Routes } from "./routes/api";
import express from "express";
const core = require("@smartcloudai/core").core;
const { StaticPool } = require("node-worker-threads-pool");

let Sentry:any
try { Sentry = require('@Sentry/node')}catch(_){}

class Api {
  core:any
  public api: express.Application;
  public routePrv: Routes = new Routes();
  constructor() {
    core["apiPool"] = new StaticPool({
      size: 20,
      task: `${__dirname}/worker.js`,
    });
    this.api = express();
    this.config();
    this.routePrv.routes(this.api,core);
  }
  private config(): void{
    try {
      this.api.use(Sentry.Handlers.requestHandler());
      this.api.use(Sentry.Handlers.errorHandler());
    } catch {}
    this.api.use(bodyParser.json());
    this.api.use(bodyParser.urlencoded({ extended: true }));
  }
}

export function api() {
  const api = new Api().api;
  api.listen(core.config.port, () => {
    core.log('Smart Cloud Server - listening on port ' + core.config.port, 2, "API");
  })
}
