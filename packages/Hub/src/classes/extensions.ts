import { core } from '../index'
const extensionDirectory = `${process.cwd()}/packages`

// const config = JSON.parse(base.config)
/**
* @class
* @classdesc  Defines Module / Extension actions
* @property   {function}     loadExtensions     - Load all modules / Extensions
* @extends Core
*/

export function build() {
  return new Promise(async (resolve) => {
    let c = core.config.extensions
    for (var key in c){
      if (c[key].active == true) {
        core.log(`Building Module: ${c[key].plugin}`, 1)
        try {
          try {
            const opts =
            {
              file: require(`${c[key].plugin}`).smartcloud(core),
            }
            console.log(opts.file)
            core.extensions[key] = opts
          } catch (_){
            core.log(`Failed to require module, attempting to get "Init" class from ${c[key].main}`, 1)
            core.log(_, 1)
            const opts =
            {
              file: require(`${extensionDirectory}/${c[key].directory}/${c[key].main}`).smartcloud(core),
            }
            core.extensions[key] = opts
          }
        } catch(_){
          core.log(`Failed to build ${c[key].plugin}`, 3)
          core.log(_, 1)
        }
      } else {
        core.log(`Module ${key} is deactivated. To use this module please activate it.`, 3)
      }
    }
    resolve(core.extensions)
  })
}
