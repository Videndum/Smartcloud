import { TaskTimer } from 'tasktimer';

let Sentry:any
try { Sentry = require('@sentry/node')}catch(_){}

/**
* @class
* @classdesc Defines Base
* @hideconstructor
*/
class Core {
  /**
  * Startup the Logging System
  * @private
  */

  opts = {
    errorEventName: 'error',
    logDirectory: './logs',
    fileNamePattern: 'console-<DATE>.log',
    dateFormat: 'YYYY.MMM.DD'
  }
  public readonly pm = require('pm2');
  // public readonly localize = require('i18next').i18next.init({lng: 'en',debug: true});
  public readonly request = require('request-promise');
  public readonly moment = require("moment");
  public readonly timer = new TaskTimer(10000);
  public readonly package = require(`${process.cwd()}/package.json`)
  public readonly config = require(`${process.cwd()}/helpers/config.json`)
  private readonly localLogger = require('simple-node-logger').createRollingFileLogger(this.opts);
  public readonly appender = this.localLogger.getAppenders()[0];
  public readonly fs = require('fs-extra');
  public readonly sentry = Sentry
  public extensions:any = {
    built: 0,
    initialized: 0,
  }
  public loglevels = ["Unknown", "Debug", "Info", "Warn", "Error", "Fatal"]

  public async registerModule (init: string, name: string, options: {api: [] | string, core?: any}) {
    const self = this
    if (options.core) name = (name + (options.core.extensions.initialized + 1) || name)
    await core.pm.start({
      name      : `Smartcloud ~ ${name}`,
      script    : init,
      max_memory_restart : '10M',
      args: name,
    }, function(err: any, app:any) {
      self.pm.disconnect();
      if (err) throw err
    });
    if (process.env.pm_id === "0") {
      options.core.extensions.initialized++
    }
  }


  /**
  * log Data
  * @param  {string} data This is the information to be logged
  * @param  {string} type - Optional types. Accepts both Numbers & String values
  * @example
  * try {
    *  core.user.getUserID(core.license.license_holder_email)
    *  } catch(response){
      *    core.log(response,1)
      *  }
      * @return       logs data to console, sentry and log file as appropriate
      */
  log = (data:string, type?: number, extension?: string) => {
    this.fs.ensureDir(`./logs`).catch((err: any) => {console.info(err)})
    extension = (process.env.name || extension || "UNKNOWN")
    extension = extension.toUpperCase()
    if (extension.length < 30) {
      for (let i = extension.length; i < 30; i++) {
         extension += ' ';
     }
    }
    let namedType:string = ""
    if (type == undefined) {namedType = "[UNKNOWN]"; type = 0;}
    if (type > 0) {
      namedType = `[${this.loglevels[type].toUpperCase()}]`
    }
    if (namedType.length < 10) {
      for (let i = namedType.length; i < 10; i++) {
         namedType += ' ';
     }
    }
    if (type >= this.config.logLevel || process.env.DEBUG == "true" || type == 0) {
      if (type >= 4) {
        try {
          Sentry.withScope((scope:any) => {
            if (type == 4) scope.setLevel(Sentry.Severity.Error);
            if (type == 5) scope.setLevel(Sentry.Severity.Fatal);
            Sentry.captureMessage("Error: " + data);
          });
        } catch{}
      }
      if (process.env.name) {console.log(`${namedType}     ` + data)} else {console.log(`${namedType}     ${extension}` + data)}
      switch(type) {
        case 1:
          this.localLogger.debug(` ${extension}     ${data}`);
          break;
        case 2:
          this.localLogger.info(` ${extension}     ${data}`);
          break;
        case 3:
          this.localLogger.warn(` ${extension}     ${data}`);
          break;
        case 4:
          this.localLogger.error(` ${extension}     ${data}`)
          break;
        case 5:
          this.localLogger.fatal(` ${extension}     ${data}`)
          break;
        default:
          this.localLogger.info(` ${extension}     ${data}`);
          break;
      }
    }
  }

}

export const core = new Core
