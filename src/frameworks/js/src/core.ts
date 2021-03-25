import {
  ConstructData,
  i18,
  Localizer,
  Logger,
  loggingData,
  loggingOptions
} from '@videndum/utilities'
import { EventEmitter } from 'events'
import { Discord, DiscordConstructor, DiscordEvents } from './'

type AllEvents = LogEvents & DiscordEvents

interface LogEvents extends Events {
  '0': (message: loggingData) => void
  '100': (message: loggingData) => void
  '200': (message: loggingData) => void
  '300': (message: loggingData) => void
  '400': (message: loggingData) => void
  '500': (message: loggingData) => void
  '600': (message: loggingData) => void
  '700': (message: loggingData) => void
  '800': (message: loggingData) => void
}

export interface Events {
  ready: (message: loggingData) => void
}

export interface RootConstructor {
  logger: ConstructData
  discord?: DiscordConstructor
}

export declare interface Root {
  on<U extends keyof AllEvents>(event: U, listener: AllEvents[U]): this

  emit<U extends keyof AllEvents>(
    event: U,
    ...args: Parameters<AllEvents[U]>
  ): boolean
}

export class Root extends EventEmitter {
  public version = process.env.NPM_PACKAGE_VERSION
  public i18n: Localizer = i18
  public logger: Logger

  constructor(data: RootConstructor) {
    super()
    this.logger = new Logger(data.logger)
    this.initialise().then(() => {
      if (data.discord) this.initDiscord(data.discord)
    })
  }

  private async initialise() {
    this.log('200', ' ')
    this.log('200', ' ')
    this.log(
      '200',
      '  .:: ::                                  .::           .::    .::                       .::'
    )
    this.log(
      '200',
      '.::    .::                                .::        .::   .:: .::                       .::'
    )
    this.log(
      '200',
      ' .::      .::: .:: .::    .::    .: .:::.:.: .:     .::        .::   .::    .::  .::     .::'
    )
    this.log(
      '200',
      '   .::     .::  .:  .:: .::  .::  .::     .::       .::        .:: .::  .:: .::  .:: .:: .::'
    )
    this.log(
      '200',
      '      .::  .::  .:  .::.::   .::  .::     .::       .::        .::.::    .::.::  .::.:   .::'
    )
    this.log(
      '200',
      '.::    .:: .::  .:  .::.::   .::  .::     .::        .::   .:: .:: .::  .:: .::  .::.:   .::'
    )
    this.log(
      '200',
      '  .:: ::  .:::  .:  .::  .:: .:::.:::      .::         .::::  .:::   .::      .::.:: .:: .::'
    )
    this.log(
      '200',
      '                                                                                                           '
    )
    if (this.version && this.version.split('.')[2].split('-')[1])
      this.log('400', 'core.version', {
        translate: true,
        T: {
          replace: {
            version: this.version
          },
          context: 'dev'
        }
      })

    this.log('200', 'core.init', { translate: true })
    this.log('200', `${this.i18n.t('core.developer')} Videndum Studios`)
    this.log('200', 'hello@videndum.studio')
    this.log('200', 'videndum.studio')
    return
  }

  initDiscord(discord: DiscordConstructor) {
    this.log('100', `Launching discord module`)
    return new Discord({ ...discord, root: this })
  }

  log = (
    name: loggingOptions['name'],
    message: loggingOptions['message'],
    options?: loggingOptions['options']
  ) => {
    const data = new loggingData(name, message, options)
    this.emit(name, data)
    this.logger.log(data)
  }
}
