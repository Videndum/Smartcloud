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
  private localLogger:any
  protected appender: any
  protected sentryConfigured: boolean = false
  protected loglevel: number = 2 
  // public readonly localize = require('i18next').i18next.init({lng: 'en',debug: true});
  public readonly request = require('request-promise');
  public readonly moment = require("moment");
  public readonly fs = require('fs-extra');
  public readonly sentry = require('@sentry/node')
  public readonly loglevels = ["unknown", "debug", "info", "warn", "error", "fatal"]
  private package = require('../package.json')

  constructor() {
    if (process.env.LOGLEVEL) this.loglevel = +process.env.LOGLEVEL
    this.fs.ensureDir(`logs`).catch((err: any) => { console.error(err) })
    this.localLogger = require('simple-node-logger').createRollingFileLogger(this.opts);
    this.appender = this.localLogger.getAppenders()[0];
    this.initialise()
  }

  /**
  * Change the logging level.
  * @param {number | string} level - Logging level to use.
  */  
  setloglevel(level: number | string) {
    if (typeof (level) == 'string') {
      if (this.loglevels.indexOf(level) != -1) {
        this.loglevel = this.loglevels.indexOf(level)
      } else { 
        this.loglevel = 2;
      }
    } else {
        this.loglevel = level
    }
  }

  /**
  * log Data
  * @param  {string} data This is the information to be logged
  * @param  {number | string} type Optional types. Accepts both Numbers & String values. 1=debug, 2=info, 3=warn, 4=error, 5=fatal
  * @example
  * try {
  *  core.user.getUserID(core.license.license_holder_email)
  *  } catch(response){
  *    core.log(response, 1)
  *  }
  * @return logs data to console, sentry and log file as appropriate
  */
  log = (data: string, type?: number | string) => {
    let namedType: string = ""
    if (type && typeof (type) == 'string') {
      if (this.loglevels.indexOf(type) != -1) {
        namedType = `[${type.toUpperCase()}]`
        type = this.loglevels.indexOf(type)
      } else { 
        namedType = "[UNKNOWN]"; type = 0;
      }
    } else if (typeof(type) == 'number' && type < this.loglevels.length) {
        namedType = `[${this.loglevels[type].toUpperCase()}]`
    } else { 
      namedType = "[UNKNOWN]"; type = 0;
    }
    if (namedType.length < 10) {
      for (let i = namedType.length; i < 10; i++) {
        namedType += ' ';
      }
    }
    if (type >= this.loglevel || process.env.DEBUG == "true" || type == 0) {
      if (type >= 4 && this.sentryConfigured) {
        try {
          this.sentry.withScope((scope: any) => {
            if (type == 4) scope.setLevel(this.sentry.Severity.Error);
            if (type == 5) scope.setLevel(this.sentry.Severity.Fatal);
            this.sentry.captureMessage(data);
          });
        } catch(_){this.log(`Sentry Error: ${_}`, 4) }
      }
      console.log(`${namedType}     ` + data)
      switch (type) {
        case 1:
          this.localLogger.debug(data);
          break;
        case 2:
          this.localLogger.info(data);
          break;
        case 3:
          this.localLogger.warn(data);
          break;
        case 4:
          this.localLogger.error(data)
          break;
        case 5:
          this.localLogger.fatal(data)
          break;
        default:
          this.localLogger.info(data);
          break;
      }
    }
  }

  async initialise() {
    this.log('Smartcloud service started', 2);
    this.log(' ', 2);
    this.log(' ', 2);
    this.log(' ', 2);
    this.log(' ', 2);
    this.log(' ', 2);
    this.log(' ', 2);
    this.log(' ', 2);
    this.log(' ', 2);
    this.log('      .:: ::                                  .::           .::    .::                       .::', 2);
    this.log('    .::    .::                                .::        .::   .:: .::                       .::', 2);
    this.log('     .::      .::: .:: .::    .::    .: .:::.:.: .:     .::        .::   .::    .::  .::     .::', 2);
    this.log('       .::     .::  .:  .:: .::  .::  .::     .::       .::        .:: .::  .:: .::  .:: .:: .::', 2);
    this.log('          .::  .::  .:  .::.::   .::  .::     .::       .::        .::.::    .::.::  .::.:   .::', 2);
    this.log('    .::    .:: .::  .:  .::.::   .::  .::     .::        .::   .:: .:: .::  .:: .::  .::.:   .::', 2);
    this.log('      .:: ::  .:::  .:  .::  .:: .:::.:::      .::         .::::  .:::   .::      .::.:: .:: .::', 2);
    this.log('                                                                                                               ', 2);
    if (process.env.DEV) {await this.developerMode()}
    this.log('                                                                                                               ', 2);
    this.log('                               Smartcloudjs framework Launched', 2);
    this.log('                                Developed by Videndum Studios', 2);
    this.log('                                   hello@videndum.studio', 2);
    this.log('                                      videndum.studio', 2);
    this.log(' ', 2);
    this.log(' ', 2);
    this.log('Log file: ' + this.appender.__protected().currentFile, 2);
    this.log("Log Level: " + this.loglevels[this.loglevel], 2)
    if (process.env.DEBUG == "true") this.log('Debug is active, you will get a lot more information than usual', 1)
    if (this.package.version.split(".")[2].split("-")[1]) {
      this.log(`Running version development version ${this.package.version.split(".")[2].split("-")[1]}. Please be careful when running an unstable version`, 3)
      if (process.env.SENTRY_DSN) { this.configureSentry(process.env.SENTRY_DSN) } else { this.log('Sentry not configured. Please use core.configureSentry() from smartcloudJS to setup within your module, refer to our documentation for additional information', 3) }
    }
    if (process.env.SENTRY_DSN) { this.configureSentry(process.env.SENTRY_DSN) } else { this.log('Sentry not configured. Please use smartcloudJS documentation to setup', 3) }
  }


  configureSentry(dsn: string, options?: { license_email: string | undefined, debug: string | undefined, release: number | undefined, environment: string | undefined, attachStacktrace: boolean, extras: {} } ) {
    this.log('Sentry initialized to track errors and bugs.', 2)
    if (!options) options = {
      'license_email': undefined,
      'debug': process.env.DEBUG,
      'release': this.package.version,
      'environment': process.env.NODE_ENV,
      'attachStacktrace': true,
      'extras': {}
    }
    try {
      this.sentry.init({
        dsn: dsn,
        debug: options.debug,
        release: options.release,
        environment: options.environment,
        attachStacktrace: options.attachStacktrace
      });
      this.sentry.configureScope((scope: any) => {
        if (options && options.license_email) scope.setUser({ "email": options.license_email });
        scope.setTag("page_locale", "en-GB");
      });
      this.sentryConfigured
    } catch (_) {
      this.log("Sentry Error: " + _)
    }
  }

  private developerMode() {
    this.log('  ____                 _                         __  __           _      ', 2)
    this.log(' |  _ \  _____   _____| | ___  _ __   ___ _ __  |  \/  | ___   __| | ___ ', 2)
    this.log(' | | | |/ _ \ \ / / _ \ |/ _ \| `_ \ / _ \ `__| | |\/| |/ _ \ / _` |/ _ \ ', 2)
    this.log(' | |_| |  __/\ V /  __/ | (_) | |_) |  __/ |    | |  | | (_) | (_| |  __/', 2)
    this.log(' |____/ \___| \_/ \___|_|\___/| .__/ \___|_|    |_|  |_|\___/ \__,_|\___|', 2)
    this.log('                              |_|                                        ', 2)
  }

  // activate() { }
  // private checklicense() { }
  // private activatelicense() { }
  // private writelicense() { }
  
}

process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
process.on('uncaughtException', error => console.error('Uncaught Promise Rejection', error));

export const core = new Core
export const log = (data: string, type?: number | string) => core.log(data, type)

export default {
  core,
  log
}