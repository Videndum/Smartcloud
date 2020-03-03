import { root } from "../bot"
import * as fs from 'fs-extra';
//@ts-ignore
const modulesDirectory = `${process.cwd()}/modules/`;
const globalDirectory = __dirname;

/**
 * Load Module Commands
 * @param  core SCAA Core Actions
 * @private
 */
export class Modules {
  load() {
      fs.readdir(`${modulesDirectory}/`, (err, groups) => {
          if (err) {return root.log(err, 4)}
          root.log(`Module groups are: ${groups}`, 1)
          groups.forEach((group:any) => {
            if (group.endsWith(".js") || group.endsWith(".js.map") || group.endsWith(".json") || group.endsWith(".ts")) return;
              // Where directory is the module directory.
              this.promptsLoadSubModules(group)
              this.actionLoadSubModules(group)
              this.eventLoadSubModules(group)
              this.commandLoadSubModules(group)
          })
      })
  }

  actionLoadSubModules(group:any) {
      try {
        fs.readdir(`${modulesDirectory}/${group}/actions/discord`, (err, files) => {
            if (err) {return root.log(err, 4)}
            root.log(`${group} Actions folders are: ${files}`, 1)
            files.forEach((file:any) => {
              if (file.endsWith(".js.map") || file.endsWith(".ts")) return;
                // Where directory is the module directory.
                this.initializeAction(`${modulesDirectory}/${group}/actions/discord`, file, group)
            })
        })
      } catch (err) {root.log(err, 4)}
  }

  initializeAction(filePath: any, file: any, group?:any) {
    const action = require(`${filePath}/${file}`);
    action["path"] = `${filePath}/${file}`;
    fs.ensureFile(`${filePath}/${file}`)
    .then(() => {
      root.log(`Attempting to load version ${action.version} of ${group} module action "${action.name}" (${filePath}/${file}) `, 2);
      if(file.endsWith(".js")){
        action["java"] = true
      } else {
        action["java"] = false
      }
      return root.actions.set(action.name, action)
    }).catch((err) => {
      root.log(`FAILED to load version ${action.version} of ${group} module action "${action.name}" (${filePath}/${file}) ` + err, 4);
    })
  }

  eventLoadSubModules(group:any) {
      try {
        fs.readdir(`${modulesDirectory}/${group}/events/`, (err, folders) => {
            if (err) {return root.log(err, 4)}
            root.log(`${group} Events folders are: ${folders}`, 1)
            folders.forEach(file => {
                this.InitializeEvent(group, file)
            })
        })
      } catch (err) {root.log(err, 4)}
      this.globalEvents()
  }

  InitializeEvent(group: any, file: any) {
      if (!file.endsWith(".js")) return;
      const event = require(`${modulesDirectory}/${group}/events/${file}`);
      event["path"] = `${modulesDirectory}/${group}/events/${file}`
      const eventName = file.split(".")[0];
      root.client.on(eventName, event.bind(null, root));
      try {root.events.on(eventName, event.bind(null, root))} catch (_){};
      root.log(`Attempting to load Event "${eventName}" of ${group} module (.modules/${group}/events/${file})`, 2);
  }

  promptsLoadSubModules(group:any) {
      try {
        fs.readdir(`${modulesDirectory}/${group}/prompts/`, (err, folders) => {
            if (err) {return root.log(err, 4)}
            root.log(`${group} Events folders are: ${folders}`, 1)
            folders.forEach(file => {
                this.Initializeprompts(group, file)
            })
        })
      } catch (err) {root.log(err, 4)}
      this.globalPrompts()
  }

  Initializeprompts(group: any, file: any) {
      if (!file.endsWith(".js")) return;
      const prompt = require(`${modulesDirectory}/${group}/prompts/${file}`);
      prompt["path"] = `${modulesDirectory}/${group}/prompts/${file}`
      const promptName = file.split(".")[0];
      if (root.prompts.get(group)) {
        const prompts = root.prompts.get(group)
        prompts.set(promptName, prompt)
      } else {
        const prompts = new Map();
        prompts.set(promptName, prompt)
        root.prompts.set(group, prompts)
      }
      root.log(`Attempting to load prompt "${promptName}" of ${group} module (.modules/${group}/prompts/${file})`, 2);
  }

  globalPrompts() {
    fs.readdir(`${globalDirectory}/../prompts/`, (err: any, files: string[]) => {
      if (err) {return root.log(err, 4)}
      files.forEach((file: string) => {
        if (!file.endsWith(".js")) return;
        const prompt = require(`${globalDirectory}/../prompts/${file}`);
        prompt["path"] = `${globalDirectory}/../prompts/${file}`
        const promptName = file.split(".")[0];
        if (root.prompts.get("Global")) {
          const prompts = root.prompts.get("Global")
          prompts.set(promptName, prompt)
        } else {
          const prompts = new Map();
          prompts.set(promptName, prompt)
          root.prompts.set("Global", prompts)
        }
        root.log(`Attempting to load prompt "${promptName}" of global module`, 2);
      })
    })
  }

  globalEvents() {
    fs.readdir(`${globalDirectory}/../events`, (err: any, files: string[]) => {
      if (err) {return root.log(err, 4)}
      files.forEach((file: string) => {
        if (!file.endsWith(".js")) return;
        const event = require(`${globalDirectory}/../events/${file}`);
        event["path"] = `${globalDirectory}/../events/${file}`
        const eventName = file.split(".")[0];
        root.client.on(eventName, event.bind(null, root));
        try {root.events.on(eventName, event.bind(null, root))} catch (_){};
        root.log(`Attempting to load global Event "${eventName}"`, 2);
      })
    })
  }


  commandLoadSubModules(group:any) {
    try {
      fs.readdir(`${modulesDirectory}/${group}/commands/`, (err, files) => {
          if (err) {return root.log(err, 4)}
          root.log(`Module Command folders are: ${files}`, 1)
          files.forEach(file => {
            if (file.endsWith(".js.map") || file.endsWith(".ts")) return;
              // Where directory is the module directory.
              this.initializeCommand(`${modulesDirectory}/${group}/commands`, file, group)
          })
      })
    } catch (err) {root.log(err, 4)}
    this.globalCommands()
  }

  globalCommands () {
    try {
      fs.readdir(`${globalDirectory}/../commands/`, (err, files) => {
          if (err) {return root.log(err, 4)}
          root.log(`Module Command folders are: ${files}`, 1)
          files.forEach(file => {
            if (file.endsWith(".js.map") || file.endsWith(".ts")) return;
              // Where directory is the module directory.
              this.initializeCommand(`${globalDirectory}/../commands`, file, "Global")
          })
      })
    } catch (err) {root.log(err, 4)}
  }

  async initializeCommand(filePath: any, file: any, group?:any) {
    if (!group) group = "unknown"
    if (file.indexOf("_") == 0) return;
    if (file.endsWith(".js") || file.endsWith(".json")) {
      this.singleCommand(filePath, file, group)
    } else {
      const command: any[] = []
      command["module"] = group
      command["type"] = "container"
      command["levels"] = 1
      command["prompts"] = root.prompts.get(group).get(file)
      await this.multicommand(filePath, file, command, command, group).then((command)=>{
      })
      root.commands.set(file, command)
    }
  }

  async multicommand (filePath: any, cmds: any, command:any, masterCommand:any, group?:any) {
    return new Promise((resolve) => {
      fs.readdir(`${filePath}/${cmds}`, async (err, subcmds) => {
        if (err) {return root.log(err, 4)}
        command["subCommands"] = new root.discord.Collection();
        subcmds.forEach(async (cmd) => {
          if (cmd.endsWith(".js") || cmd.endsWith(".json")) {
            const subCommand = require(`${filePath}/${cmds}/${cmd}`);
            const commandName = subCommand.name;
            const commandVersion = subCommand.version;
            subCommand["path"] = `${filePath}/${cmds}`
            fs.ensureFile(`${filePath}/${cmds}/${cmd}`)
            .then(() => {
              root.log(`Attempting to load version ${commandVersion} of ${group} module command "${command.name} -> ${commandName}" (${filePath}/${cmds}/${cmd}) `, 2);
              if(cmd.endsWith(".js")){
                subCommand["java"] = true
              } else {
                subCommand["java"] = false
              }
              subCommand["type"] = "command"
              subCommand["prompts"] = command.prompts[subCommand.name]
              command.subCommands.set(commandName, subCommand)
            }).catch((err) => {
              root.log(`FAILED to load version ${commandVersion} of ${group} module command "${commandName} with the following error: ${err}" (${filePath}/${cmds}/${cmd}) `, 4);
            })
          }
          else {
            if (cmd.indexOf(".") !== -1 || cmd.indexOf("_") == 0) return;
            const newCommand: any[] = []
            newCommand["name"] = cmd
            newCommand["type"] = "container"
            newCommand["prompts"] = command.prompts[cmd]
            masterCommand.levels++
            const newCommandName = cmd
            await this.multicommand(`${filePath}/${cmds}`, cmd, newCommand, masterCommand, group).then((command)=>{
              // console.log(command)
            })
            command.subCommands.set(newCommandName, newCommand)
          }
        })
        resolve(command)
      })
    })
  }

  singleCommand (filePath: any, file: any, group?:any) {
    const command = require(`${filePath}/${file}`);
    command["path"] = `${filePath}/${file}`
    const commandName = command.name;
    const commandVersion = command.version;
    fs.ensureFile(`${filePath}/${file}`)
    .then(() => {
      command["module"] = group
      command["type"] = "command"
      root.log(`Attempting to load version ${commandVersion} of ${group} module command "${commandName}" (${filePath}/${file}) `, 2);
      if(file.endsWith(".js")){
        command["java"] = true
      } else {
        command["java"] = false
      }
      root.commands.set(commandName, command)
    }).catch((err) => {
      root.log(`FAILED to load version ${commandVersion} of ${group} module command "${commandName} with the following error: ${err}" (${filePath}/${file}) `, 4);
    })
  }

  reloadCommand (oldCommand:any) {
    delete require.cache[require.resolve(oldCommand.path)]
    const command = require(oldCommand.path);
    command["path"] = oldCommand.path
    const commandName = command.name;
    const commandVersion = command.version;
    fs.ensureFile(oldCommand.path)
    .then(() => {
      command["module"] = oldCommand.module
      root.log(`Attempting to load version ${commandVersion} of ${oldCommand.module} module command "${commandName}" (${oldCommand.path}) `, 2);
      command["java"] = oldCommand.java
      root.commands[`${commandName}`] = command
    }).catch((err) => {
      root.log(`FAILED to load version ${commandVersion} of ${oldCommand.module} module command "${commandName} with the following error: ${err}" (${oldCommand.path}) `, 4);
    })
  }
}
