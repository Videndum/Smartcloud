export * from './util'
export * from './discord'

process.on('unhandledRejection', error =>
  console.error('Uncaught Promise Rejection', error)
)
process.on('uncaughtException', error =>
  console.error('Uncaught Promise Rejection', error)
)

import { Init } from './Core'
new Init()
