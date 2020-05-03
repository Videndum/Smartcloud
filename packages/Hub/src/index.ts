export const core = require("@smartcloudai/core").core;
import { Worker } from 'worker_threads';
function log (data: string, level: number | undefined) {core.log(data,level)}
// const applications: any[] = []
import { build } from './classes/extensions'
import { api } from './api'
/**
* Initialise Application
* @private
*/
async function initialize() {
  core.pm.connect(function(err: any) {
    if (err) { console.error(err); process.exit(2);}
  });
  console.clear()
  log("Starting Application", 1)
  /**
  * Sentry initialization to track errors
  */
  if (core.config.tracking == true) {
   core.log('Sentry initialize to track errors and bugs. You can turn off in your settings',2)
    try {
      core.sentry.init({
        dsn: core.config.sentry,
        debug: process.env.DEBUG,
        release: core.package.version,
        environment: process.env.NODE_ENV,
        serverName: process.env.PM2_MACHINE_NAME,
        attachStacktrace: true
      });
      core.sentry.configureScope((scope:any) => {
        scope.setUser({"email": core.config.license_email});
        scope.setTag("page_locale", "en-GB");
      });
    } catch(_){
      core.log("Sentry Error: " +_)
    }
  }
  log('Smart cloud service started',2);
  log(' ',2);
  log(' ',2);
  log(' ',2);
  log(' ',2);
  log(' ',2);
  log(' ',2);
  log(' ',2);
  log(' ',2);
  log('      .:: ::                                  .::           .::    .::                       .::',2);
  log('    .::    .::                                .::        .::   .:: .::                       .::',2);
  log('     .::      .::: .:: .::    .::    .: .:::.:.: .:     .::        .::   .::    .::  .::     .::',2);
  log('       .::     .::  .:  .:: .::  .::  .::     .::       .::        .:: .::  .:: .::  .:: .:: .::',2);
  log('          .::  .::  .:  .::.::   .::  .::     .::       .::        .::.::    .::.::  .::.:   .::',2);
  log('    .::    .:: .::  .:  .::.::   .::  .::     .::        .::   .:: .:: .::  .:: .::  .::.:   .::',2);
  log('      .:: ::  .:::  .:  .::  .:: .:::.:::      .::         .::::  .:::   .::      .::.:: .:: .::',2);
  log('                                                                                                ',2);
  log('                                                                                                ',2);
  log('                               Smart Cloud Core Module Launched',2);
  log('                                 Developed by TGT Media Ltd',2);
  log('                                     info@tgtmedia.org',2);
  log('                                        tgtmedia.org',2);
  log(' ',2);
  log(' ',2);
  if (core.package.version.split(".")[2].split("-")[1]) log(`Running version development version ${core.package.version.split(".")[2].split("-")[1]}. Please be careful when running an unstable version`, 3)
  log('Log file: ' + core.appender.__protected().currentFile, 2); //Log which file is current log file
  log("Log Level: " + core.loglevels[core.config.logLevel], 2)
  if (process.env.DEBUG == "true") log('Debug is active, you will get a lot more information than usual', 1)
  await runService(`${__dirname}/classes/activate.js`, 'world')
  await build()
  api()
}

/**
* Events
* @private
*/
// const loaders = {
//   core: false,
//   extensions: {
//     loaded: 0,
//     expect: 0,
//     success: false
//   },
//   api: false
// }

function runService(service:string, workerData: any) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(service, { workerData });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code: number) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    })
  })
}

process.on('unhandledRejection', error => console.error('Uncaught Promise Rejection', error));
process.on('uncaughtException', error => console.error('Uncaught Promise Rejection', error));
initialize();
