import { root } from "../bot"
export class Configuration {

  prefixs = []
  regexs = []

  getPrefixes() {
    return this.prefixs = root.config.UniqueConfigs.prefixs
  }

  getRegex() {
    return this.regexs = root.config.UniqueConfigs.regex
  }
}
