import { i18 } from './Localize'
import { logStyle } from './Chalk'
import * as fs from 'fs'
import * as Sentry from '@sentry/node'

class Log {
  date = 2
  opts = {
    logDirectory: 'logs',
    fileNamePattern: `console-${this.date}.log`,
    dateFormat: 'YYYY.MMM.DD'
  }
  private package = require('../../package.json')
  public sentryConfigured: boolean = false
  public loglevel: number = 2
  public readonly sentry = Sentry
  public readonly loglevels = [
    'unknown',
    'debug',
    'info',
    'warn',
    'error',
    'fatal'
  ]

  constructor () {
    if (process.env.LOGLEVEL) this.loglevel = +process.env.LOGLEVEL
    fs.access(this.opts.logDirectory, fs.constants.F_OK, (err: any) => {
      if (!err) {
        return
      } else {
        this.log(i18.t(`errors.fileDirectory.caught`) + err, 4)
        fs.mkdir(
          this.opts.logDirectory,
          { recursive: false },
          async (err: any) => {
            if (err) this.log(i18.t(`errors.fileDirectory.thrown`) + err, 5)
            this.log(i18.t(`errors.fileDirectory.solved`), 2)
          }
        )
        return
      }
    })
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
   * @param  {number | string} type Optional types. Accepts both Numbers & String values. 1=debug, 2=info, 3=warn, 4=error, 5=fatal
   * @example
   * try {
   *  core.user.getUserID(core.license.license_holder_email)
   *  } catch(response){
   *    core.log(response, 1)
   *  }
   * @return logs data to console, sentry and log file as appropriate
   */
  log (data: string, type?: number | string) {
    let namedType: string = ''
    if (type && typeof type == 'string') {
      if (this.loglevels.indexOf(type) != -1) {
        //@ts-ignore
        namedType = logStyle[type](
          `[${i18.t(`logging.${type}`).toUpperCase()}]`
        )
        type = this.loglevels.indexOf(type)
      } else {
        namedType = logStyle['unknown'](
          `[${i18.t(`logging.unknown`).toUpperCase()}]`
        )
        type = 0
      }
    } else if (typeof type == 'number' && type < this.loglevels.length) {
      //@ts-ignore
      namedType = logStyle[this.loglevels[type]](
        `[${i18.t(`logging.${this.loglevels[type]}`).toUpperCase()}]`
      )
    } else {
      namedType = logStyle['unknown'](
        `[${i18.t(`logging.unknown`).toUpperCase()}]`
      )
      type = 0
    }
    if (namedType.length < 10) {
      for (let i = namedType.length; i < 10; i++) {
        namedType += ' '
      }
    }
    if (type >= this.loglevel || process.env.DEBUG == 'true' || type == 0) {
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
      if (type >= 4) {
        if (this.sentryConfigured) {
          try {
            this.sentry.withScope((scope: any) => {
              if (type == 4) scope.setLevel(this.sentry.Severity.Error)
              if (type == 5) scope.setLevel(this.sentry.Severity.Fatal)
              this.sentry.captureMessage(data)
            })
          } catch (_) {
            this.log(i18.t(`logging.sentry.default`) + _, 4)
          }
        }
        if (type == 5) process.exitCode = 5
      }
    }
  }

  initialise () {
    this.log(
      i18.t('logging.level') +
        i18.t(`logging.${this.loglevels[logger.loglevel]}`),
      2
    )
    if (process.env.DEBUG == 'true') this.log(i18.t('core.debug'), 1)
    if (this.package.version.split('.')[2].split('-')[1]) {
      if (process.env.SENTRY_DSN) {
        logger.configureSentry(process.env.SENTRY_DSN)
      } else {
        this.log(i18.t('logging.sentry.config', { context: 'dev' }), 3)
      }
    }
    if (process.env.SENTRY_DSN) {
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

export const logger = new Log()
logger.initialise()
export const log = (data: string, type?: number | string) =>
  logger.log(data, type)
