process.on('unhandledRejection', error =>
  console.error('Uncaught Promise Rejection', error)
)
process.on('uncaughtException', error =>
  console.error('Uncaught Promise Rejection', error)
)
export * from './Core'
export * from './discord'
