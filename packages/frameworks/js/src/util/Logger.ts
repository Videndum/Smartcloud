import { i18 } from './Localize'
import { logStyle } from './Chalk'
import * as fs from 'fs'
import * as Sentry from '@sentry/node'
import { Logging } from '@google-cloud/logging'

class Log {
  date = 2
  opts = {
    logDirectory: 'logs',
    fileNamePattern: `console-${this.date}.log`,
    dateFormat: 'YYYY.MMM.DD'
  }
  private package = require('../../package.json')
  public sentryConfigured: boolean = false
  public loglevel: number = 1
  public readonly sentry = Sentry
  public readonly loglevels = [
    'default', // (0) The log entry has no assigned severity level.
    'debug', // (100) Debug or trace information.
    'info', // (200) Routine information, such as ongoing status or performance.
    'notice', // (300) Normal but significant events, such as start up, shut down, or a configuration change.
    'warn', // (400) Warning events might cause problems.
    'error', // (500) Error events are likely to cause problems.
    'critical', // (600) Critical events cause more severe problems or outages.
    'alert', // (700) A person must take an action immediately.
    'emergency' // (800) One or more systems are unusable.
  ]
  private cloudlog: any
  private cloudLog: Logging = new Logging()
  private cloudLogging: boolean = true

  constructor (logName: string) {
    if (process.env.LOGLEVEL) this.loglevel = +process.env.LOGLEVEL

    fs.access(this.opts.logDirectory, fs.constants.F_OK, (err: any) => {
      if (!err) {
        return
      } else {
        this.log(i18.t(`errors.fileDirectory.caught`) + err, 6)
        fs.mkdir(
          this.opts.logDirectory,
          { recursive: false },
          async (err: any) => {
            if (err) this.log(i18.t(`errors.fileDirectory.thrown`) + err, 6)
            this.log(i18.t(`errors.fileDirectory.solved`), 3)
          }
        )
        return
      }
    })
    try {
      this.cloudLog = new Logging({ projectId: process.env.CLOUDPROJECT })
      this.cloudlog = this.cloudLog.log(logName)
    } catch (err) {
      console.log('Cloud Logging Disabled')
      console.log('Cloud Logging error: ' + err)
      this.cloudLogging = false
    }
  }

  /**
   * Change the logging level.
   * @param {number | string} level - Logging level to use.
   */
  setloglevel (level: number | string) {
    if (typeof level == 'string') {
      if (this.loglevels.indexOf(level) != -1) {
        this.loglevel = this.loglevels.indexOf(level)
      } else {
        this.loglevel = 2
      }
    } else {
      this.loglevel = level
    }
  }

  /**
   * log Data
   * @param  {string} data This is the information to be logged
   * @param  {number | string} type Optional types. Accepts both Numbers & String values. 1=debug, 2=info, 3=notice, 4=warn, 5=error, 6=critical, 7=alert, 8=emergency
   * @example
   * try {
   *  core.user.getUserID(core.license.license_holder_email)
   *  } catch(response){
   *    core.log(response, 1)
   *  }
   * @return logs data to console, sentry and log file as appropriate
   */
  async log (data: string, type?: number | string) {
    let namedType: string = ''

    // Meta for Cloud Logging
    let metadata = {
      resource: {
        type: 'global'
      },
      severity: 'INFO'
    }

    // Defines log type
    if (type && typeof type == 'string') {
      if (this.loglevels.indexOf(type) != -1) {
        namedType = i18.t(`logging.${type}`).toUpperCase()
        type = this.loglevels.indexOf(type)
      } else {
        namedType = i18.t(`logging.default`).toUpperCase()
        type = 0
      }
    } else if (typeof type == 'number' && type < this.loglevels.length) {
      namedType = i18.t(`logging.${this.loglevels[type]}`).toUpperCase()
      type = type
    } else {
      namedType = i18.t(`logging.default`).toUpperCase()
      type = 0
    }
    if (namedType.length < 15) {
      for (let i = namedType.length; i < 15; i++) {
        namedType += ' '
      }
    }
    //@ts-ignore
    namedType = logStyle[`${this.loglevels[type]}`](namedType)

    // log to cloud logger
    let entry = this.cloudlog.entry(metadata, data)
    if (this.cloudLogging)
      try {
        await this.cloudlog.log(entry)
        if (process.env.DEBUG == 'true' || type == 1)
          console.log(`cloudLog Logged: ${data}`)
      } catch (err) {
        if (process.env.DEBUG == 'true' || type == 1) {
          console.log(`cloudLog failed to send data: ${data}`)
          if (err) console.log(`Thrown error: ${err}`)
        }
      }

    // Log to local logger
    if (type >= this.loglevel || process.env.DEBUG == 'true' || type == 1) {
      console.log(`${namedType}     ` + data)
      try {
        fs.appendFile(
          `${this.opts.logDirectory}/${this.opts.fileNamePattern}`,
          `${namedType}     ` + data + '\r\n',
          err => {
            if (err) this.log(err.message, 5)
          }
        )
      } catch {}
      // if (type >= 4) {
      //   if (this.sentryConfigured) {
      //     try {
      //       this.sentry.withScope((scope: any) => {
      //         if (type == 4) scope.setLevel(this.sentry.Severity.Error)
      //         if (type == 5) scope.setLevel(this.sentry.Severity.Fatal)
      //         this.sentry.captureMessage(data)
      //       })
      //     } catch (_) {
      //       this.log(i18.t(`logging.sentry.default`) + _, 4)
      //     }
      //   }
      //   if (type == 5) process.exitCode = 5
      // }
    }
  }

  /**
   * Change the logging level.
   * @param {number | string} level - Logging level to use.
   */

  initialise () {
    this.log(
      i18.t('logging.level') +
        i18.t(`logging.${this.loglevels[logger.loglevel]}`),
      3
    )
    if (process.env.DEBUG == 'true') this.log(i18.t('core.debug'), 1)
    if (this.package.version.split('.')[2].split('-')[1]) {
      if (process.env.SENTRY_DSN) {
        logger.configureSentry(process.env.SENTRY_DSN)
      } else {
        this.log(i18.t('logging.sentry.config', { context: 'dev' }), 3)
      }
    } else if (process.env.SENTRY_DSN) {
      logger.configureSentry(process.env.SENTRY_DSN)
    } else {
      this.log(i18.t('logging.sentry.config'), 3)
    }
  }

  configureSentry (
    dsn: string,
    options?: {
      license_email?: string
      debug?: boolean
      release?: string
      environment?: string
      attachStacktrace?: boolean
      extras?: {}
    }
  ) {
    log(`${i18.t('logging.sentry.initialised')}`, 2)
    if (!options) options = {}
    if (!options.license_email) options.license_email = ''
    if (!options.debug)
      options.debug = (process.env.DEBUG as unknown) as boolean | false
    if (!options.release) options.release = this.package.version as string
    if (!options.environment)
      options.environment = process.env.NODE_ENV as string | 'production'
    if (!options.attachStacktrace) options.attachStacktrace = true
    try {
      this.sentry.init({
        dsn: dsn,
        debug: options.debug,
        release: options.release,
        environment: options.environment,
        attachStacktrace: options.attachStacktrace
      })
      this.sentry.configureScope((scope: any) => {
        if (options && options.license_email)
          scope.setUser({ email: options.license_email })
        scope.setTag('page_locale', 'en-GB')
      })
      this.sentryConfigured
    } catch (_) {
      this.log(i18.t('logging.sentry.default') + _)
    }
  }
}

export const logger = new Log('my-log')
logger.initialise()
export const log = (data: string, type?: number | string) =>
  logger.log(data, type)
