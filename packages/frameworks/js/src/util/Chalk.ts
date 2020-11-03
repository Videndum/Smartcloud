export const chalk = require('chalk')
export const brandStyle = {
  videndumPurple: chalk.hex('4B428E')
}
export const logStyle = {
  default: chalk.inverse, // (0) The log entry has no assigned severity level.
  debug: chalk.grey, // (100) Debug or trace information.
  info: chalk.green, // (200) Routine information, such as ongoing status or performance.
  notice: chalk.green, // (300) Normal but significant events, such as start up, shut down, or a configuration change.
  warn: chalk.yellow, // (400) Warning events might cause problems.
  error: chalk.orange, // (500) Error events are likely to cause problems.
  critical: chalk.orange, // (600) Critical events cause more severe problems or outages.
  alert: chalk.red, // (700) A person must take an action immediately.
  emergency: chalk.red // (800) One or more systems are unusable.
}
export default chalk
