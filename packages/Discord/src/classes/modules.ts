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
    if (file.indexOf("_") !== -1) return;
    if (file.endsWith(".js") || file.endsWith(".json")) {
      this.singleCommand(filePath, file, group)
    } else {
      const command: any[] = [];
      command["module"] = group
      await this.multicommand(filePath, file, command, group).then((command)=>{
        console.log("the command is ", command)
      })
    }
  }

  async multicommand (filePath: any, cmds: any, command:any, group?:any) {
    return new Promise((resolve) => {
      fs.readdir(`${filePath}/${cmds}`, async (err, subcmds) => {
        if (err) {return root.log(err, 4)}
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
              if (command.subcommands) {
                command.subcommands[`${commandName}`] = subCommand
              } else {
                command[`${commandName}`] = subCommand
              }
            }).catch((err) => {
              root.log(`FAILED to load version ${commandVersion} of ${group} module command "${commandName} with the following error: ${err}" (${filePath}/${cmds}/${cmd}) `, 4);
            })
          }
          else {
            if (cmd.indexOf(".") !== -1) return;
            let newCommand:any
            if (command.subcommands) {
              command.subcommands[`${cmds}`] = []
              newCommand = command.subcommands[`${cmds}`]
            } else {
              command[`${cmds}`] = []
              newCommand = command[`${cmds}`]
            }
            newCommand["name"] = cmds
            newCommand["path"] = `${filePath}/${cmds}`
            if (!newCommand.subcommands) newCommand["subcommands"] = [];
            await this.multicommand(`${filePath}/${cmds}`, cmd, newCommand, group).then((subcommand)=>{
              console.log("the subcommands is ", subcommand)
              // command[`${cmds}`]["subcommands"] = subcommand
            })
          }
        })
        console.log(command)
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
