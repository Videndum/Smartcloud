import { i18 } from './util/Localize'
import { log } from './util/Logger'
import { brandStyle } from './util/Chalk'
class Init {
  private package = require('../package.json')

  constructor () {
    log(' ', 2)
    log(' ', 2)
    log(
      brandStyle.videndumPurple(
        '  .:: ::                                  .::           .::    .::                       .::'
      ),
      2
    )
    log(
      brandStyle.videndumPurple(
        '.::    .::                                .::        .::   .:: .::                       .::'
      ),
      2
    )
    log(
      brandStyle.videndumPurple(
        ' .::      .::: .:: .::    .::    .: .:::.:.: .:     .::        .::   .::    .::  .::     .::'
      ),
      2
    )
    log(
      brandStyle.videndumPurple(
        '   .::     .::  .:  .:: .::  .::  .::     .::       .::        .:: .::  .:: .::  .:: .:: .::'
      ),
      2
    )
    log(
      brandStyle.videndumPurple(
        '      .::  .::  .:  .::.::   .::  .::     .::       .::        .::.::    .::.::  .::.:   .::'
      ),
      2
    )
    log(
      brandStyle.videndumPurple(
        '.::    .:: .::  .:  .::.::   .::  .::     .::        .::   .:: .:: .::  .:: .::  .::.:   .::'
      ),
      2
    )
    log(
      brandStyle.videndumPurple(
        '  .:: ::  .:::  .:  .::  .:: .:::.:::      .::         .::::  .:::   .::      .::.:: .:: .::'
      ),
      2
    )
    log(
      '                                                                                                           ',
      2
    )
    if (this.package.version.split('.')[2].split('-')[1])
      log(
        i18.t('core.version', {
          replace: {
            version: this.package.version.split('.')[2].split('-')[1]
          },
          context: 'dev'
        }),
        3
      )
    log(brandStyle.videndumPurple(i18.t('core.init')), 2)
    log(
      brandStyle.videndumPurple(i18.t('core.developer') + 'Videndum Studios'),
      2
    )
    log(brandStyle.videndumPurple('hello@videndum.studio'), 2)
    log(brandStyle.videndumPurple('videndum.studio'), 2)
  }
}

// process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
// process.on('uncaughtException', error => console.error('Uncaught Promise Rejection', error));

export const init = new Init()
