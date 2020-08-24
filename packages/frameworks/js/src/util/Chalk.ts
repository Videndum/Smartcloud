export const chalk = require('chalk')
export const brandStyle = {
  videndumPurple: chalk.hex('4B428E')
}
export const logStyle = {
  unknown: chalk.inverse,
  debug: chalk.grey,
  info: chalk.green,
  warn: chalk.yellow,
  error: chalk.orange,
  fatal: chalk.red
}
export default chalk
