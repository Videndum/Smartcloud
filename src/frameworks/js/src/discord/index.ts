import discordJS from 'discord.js'
import { Events, Root } from '..'
interface clientOptions extends discordJS.ClientOptions {
  token: string
}

export interface DiscordConstructor {
  root?: Root
  type: 'command' | 'shard' | 'manager'
  token: string
  djs?: clientOptions | true
}

export interface DiscordEvents extends Events {}

export class Discord {
  root: Root
  djs = discordJS
  djsClient: discordJS.Client | undefined

  constructor(options: DiscordConstructor) {
    if (!options.root)
      throw new Error(
        'Root is undefined. Please ensure to access after initialising Root first.'
      )
    this.root = options.root
    if (options.djs) {
      this.djsClient = new discordJS.Client()
      this.djsClient.login(options.token)
      this.djsClient.on('error', e =>
        this.root.log('500', e.message, { errors: e })
      )
      this.djsClient.on('warn', e => this.root.log('400', e))
      this.djsClient.on('debug', e => this.root.log('100', e))
    }
  }
  async destroy() {
    if (this.djsClient) this.djsClient.destroy()
    return
  }
}
