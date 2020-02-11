import { root } from "../bot"
export interface actionInterface {
  death?:any,
  message?:any
}
export interface actionInterface {
  death?:any,
  message?:any
}

export class Actions {
  async startJava(message:any, cmd:any, args:any) {
    return new Promise(async (resolve, reject) => {
      await cmd.execute(root, message, args)
      .catch ((err: any) => {
        reject({err:"commanderror", data: err})
      })
      resolve()
    })
  }

  startActions(cmd:any, args:any, params:actionInterface) {
    return new Promise((resolve, reject) => {
      let options:any = []
      options["args"] = (args.args || args)
      if (params.death == undefined) params.death = [];
      if (params.death[cmd.name] == undefined) params.death[cmd.name] = 0
      else if (params.death[cmd.name] <= 5) params.death[cmd.name] = params.death[cmd.name] + 1
      else if (params.death[cmd.name] >= 5) return reject({err:"commanddeath", data:"You seem to be stuck in an loop. I got bored so I murdered that process before it caused a problem"});
      cmd.execute.forEach(async (action: any) => {
        let actionName = (action.action || action)
        const act = root.actions.get(actionName)
        if (!act){
          return reject({err:"actionunknown", action: action, data:`Action '` + (action.action || action) + `' was called but did not exist`})
        }
        root.events.emit("actionstarted", action)
        if (action.global){
          console.log(action[0])
          if (!action.global.vars) return
          options["vars"] = []
          for (var arg in action.global.vars) {
            await this.joinArgs (cmd, arg, action.global.vars, options, params)
          }
        }
        if (action.discord){
          if (!action.discord.active) return
          if (!action.discord.vars && action.global) return
          options["vars"] = []
          for (var arg in action.discord.vars) {
            await this.joinArgs (cmd, arg, action.discord.vars, options, params)
          }
        }
        if (act.argFormat) {
          for (var arg in act.argFormat) {
            let format:any
            try { format = (action.global.vars[arg]) }catch{ try { format = (action.global.vars[arg])}catch{} }
            if (format) {
              console.log(arg, act.argFormat[arg])
              if (typeof format !== act.argFormat[arg]) {
                reject({err:"actionerror", action: act, data: `Action formating sent error: ${format} (${typeof format}) != ${act.argFormat[arg]}`})
              }
            }
          }
        }
        if (act.java == true) {
          await this.startJava(params.message, act, options).then(() => {
            root.events.emit("actionfinsihed", action)
            resolve()
          }).catch((err: any) => {
            reject({err:(err.err || "actionerror"), action: (err.action || action), data: (err.data || "Java Action exited with error: " + err)})
          })
        } else {
          this.startActions(act, options, {death: params.death, message: params.message}).then(() => {
            root.events.emit("actionfinished", action)
          }).catch((err:any) => {
            return reject({err:(err.err || "actionerror"), action: (err.action || action), data: (err.data || "Json Action exited with error: " + err)})
          })
        }
      })
    })
  }

  async joinArgs (cmd:any, arg:any, vars:any, options:any, params:any){
    let x = `${vars[arg]}`
    let ands = x.split("&&")
    for (var and in ands) {
      if (!options.vars[arg]) options.vars[arg] = []
      let a = ands[and]
      await this.exchangeArgs (a, and, ands, options, arg, cmd, params)
    }
  }


  async exchangeArgs (a:any, and:any, ands:any, options:any, arg:any, cmd:any, params:any){
    let ors = a.split("||")
    for (var or in ors) {
      if (and.length > 1 && !options.vars[arg][and]) options.vars[arg][and] = []
      let org = ors[or]
      let ver = `${org.slice(1,org.length-1)}`
      if (org.indexOf("[") == 0) {
        // save and peram
        if (ands.length > 1 && ors.length == 1) {
          if (options.vars[arg]) {
            options.vars[arg][and] = cmd.localargs[ver]
          } else {
            options.vars[arg] = cmd.localargs[ver]
          }
          // save or params
        } else if (ors.length > 1) {
          if (ands.length > 1) {
            if (options.vars[arg][and] != undefined) break
            options.vars[arg][and] = cmd.localargs[ver]
          } else {
            if (options.vars[arg][and] != undefined) break
            options.vars[arg][and] = cmd.localargs[ver]
          }
          // save rest
        } else {
          if (ands.length > 1) {
            options.vars[arg] = [cmd.localargs[ver]]
          } else {
            options.vars[arg] = cmd.localargs[ver]
          }
        }
        root.log(`${org} == local || replacing with ${ver} (now ${options.vars[arg]})`, 1)

      } else if (org.indexOf("*") == 0) {
        // save and peram
        if (ands.length > 1 && ors.length == 1) {
          if (options.vars[arg]) {
            options.vars[arg][and] = await this.getArg(params.message, options.args, ver)
          } else {
            options.vars[arg] = await this.getArg(params.message, options.args, ver)
          }
          // save or params
        } else if (ors.length > 1) {
          if (ands.length > 1) {
            if (options.vars[arg][and] != undefined) break
            options.vars[arg][and] = await this.getArg(params.message, options.args, ver)
          } else {
            if (options.vars[arg][and] != undefined) break
            options.vars[arg][and] = await this.getArg(params.message, options.args, ver)
          }
          // save rest
        } else {
          if (ands.length > 1) {
            options.vars[arg] = [await this.getArg(params.message, options.args, ver)]
          } else {
            options.vars[arg] = await this.getArg(params.message, options.args, ver)
          }
        }
        root.log(`${org} == arg || replacing with ${ver} (now ${options.vars[arg]})`, 1)
      } else if (org.indexOf("<") == 0) {
        // save and peram
        if (ands.length > 1 && ors.length == 1) {
          if (options.vars[arg]) {
            options.vars[arg][and] = root.serverArgs.get(ver)
          } else {
            options.vars[arg] = root.serverArgs.get(ver)
          }
          // save or params
        } else if (ors.length > 1) {
          if (ands.length > 1) {
            if (options.vars[arg][and] != undefined) break
            options.vars[arg][and] = root.serverArgs.get(ver)
          } else {
            if (options.vars[arg][and] != undefined) break
            options.vars[arg][and] = root.serverArgs.get(ver)
          }
          // save rest
        } else {
          if (ands.length > 1) {
            options.vars[arg] = [root.serverArgs.get(ver)]
          } else {
            options.vars[arg] = root.serverArgs.get(ver)
          }
        }
        root.log(`${org} == server var || replacing with ${ver} (now ${options.vars[arg]})`, 1)
      } else if (org.indexOf("{") == 0) {
        // save and peram
        if (ands.length > 1 && ors.length == 1) {
          if (options.vars[arg]) {
            options.vars[arg][and] = root.globalArgs.get(ver)
          } else {
            options.vars[arg] = root.globalArgs.get(ver)
          }
          // save or params
        } else if (ors.length > 1) {
          if (ands.length > 1) {
            if (options.vars[arg][and] != undefined) break
            options.vars[arg][and] = root.globalArgs.get(ver)
          } else {
            if (options.vars[arg][and] != undefined) break
            options.vars[arg][and] = root.globalArgs.get(ver)
          }
          // save rest
        } else {
          if (ands.length > 1) {
            options.vars[arg] = [root.globalArgs.get(ver)]
          } else {
            options.vars[arg] = root.globalArgs.get(ver)
          }
        }
        root.log(`${org} == global var || replacing with ${ver} (now ${options.vars[arg]})`, 1)
      } else {
        root.log(`${org} is not a defined var, not replacing`, 1)
      }
    }
  }

  getArg(message:any, args:any, ver:any) {
    if (ver.indexOf("a") == 0 && args) {
      if (args[ver.slice(1)]) return args[ver.slice(1)]
    } else if (ver.indexOf("m") == 0 && message.mentions) {
      let members = message.mentions.users.array()
      if (members[ver.slice(1)]) return members[ver.slice(1)].id
    } else if (ver.indexOf("c") == 0 && message.mentions) {
      let channels = message.mentions.channels.array()
      if (channels[ver.slice(1)]) return channels[ver.slice(1)].id
    } else if (ver.indexOf("r") == 0 && message.mentions) {
      let roles = message.mentions.roles.array()
      if (roles[ver.slice(1)]) return roles[ver.slice(1)].id
    } else {
      return undefined
    }
  }
}
