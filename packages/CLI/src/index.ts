#!/usr/bin/env node
const vorpal = require('vorpal')();
const jsdoc2md = require('jsdoc-to-markdown')
import fs from 'fs-extra';
import simplegit from 'simple-git/promise';
const git = simplegit();
const cmdify = require('cmdify');
const inquirer = require('inquirer');
const fuzzy = require('fuzzy');
import boxen from 'boxen';
const developerPass = "Testing"
const developer = "Testing"
const directory = process.cwd()
const page = () => {console.clear(); console.log(logo);}
const logo = boxen("  .:: ::                                  .::           .::    .::                       .::\n.::    .::                                .::        .::   .:: .::                       .:: TM\n .::      .::: .:: .::    .::    .: .:::.:.: .:     .::        .::   .::    .::  .::     .::\n   .::     .::  .:  .:: .::  .::  .::     .::       .::        .:: .::  .:: .::  .:: .:: .::\n      .::  .::  .:  .::.::   .::  .::     .::       .::        .::.::    .::.::  .::.:   .::\n.::    .:: .::  .:  .::.::   .::  .::     .::        .::   .:: .:: .::  .:: .::  .::.:   .::\n  .:: ::  .:::  .:  .::  .:: .:::.:::      .::         .::::  .:::   .::      .::.:: .:: .::", {padding: 2})
inquirer.registerPrompt('checkbox-plus', require('inquirer-checkbox-plus-prompt'));
inquirer.registerPrompt('fuzzypath', require('inquirer-fuzzy-path'))
inquirer.registerPrompt('suggest', require('inquirer-prompt-suggest'));

var modes = [
  {name: 'Server Application - Recommended for users who want full functionality', value: 'server', short: 'server', disabled: false},
  {name: 'Wordpress Plugin - Recommended for users who want to use community servers for functionality', value: 'wordpress', short: 'wp', disabled: true},
  {name: 'Standalone Modules - Recommended for users who intend to build own applications using parts of smartcloud', value: 'standalone', short: 'standalone', disabled: true},
];
var modules = [
  {name: 'Discord Extension - The only JSON Discord framework', value: 'discord', short: 'discord', disabled: false},
  {name: 'Twitch Extension - Build bots for your twitch without the hassle', value: 'twitch', short: 'twitch', disabled: true},
  {name: 'Youtube Extension - Stop being restricted by bad youtube bots', value: 'youtube', short: 'youtube', disabled: true},
  {name: 'Database Extension - The default database extension', value: 'database', short: 'database', disabled: true},
  {name: 'Licensing Extension - Want to license something? Let us help you do that with this open source solution', value: 'wordpress', short: 'wp', disabled: true},
];
var logging = [
  { key: 'd', name: 'Debugging', value: 'debug', short: 'debug', disabled: false },
  { key: 'i', name: 'Information', value: 'info', short: 'info', disabled: false },
  { key: 'w', name: 'Warnings', value: 'warnings', short: 'warn', disabled: false },
  { key: 'e', name: 'Errors', value: 'errors', short: 'err', disabled: false },
  { key: 'f', name: 'Fatal', value: 'fatal', short: 'fatal', disabled: false },
];
var questions = [
  { type: 'confirm', name: 'osConfirm', message: `We have detected that your os is ${process.platform}, is this correct?`},
  { type: 'list', name: 'mode', message: 'What mode do you want SCAA to run? (Choose one)', choices: modes, default: 'server' },
  { type: 'fuzzypath', name: 'location', message: 'Where would you like us to install SCAA?', itemType: 'directory'},
  { type: 'confirm', name: 'account', message: `Do you currently have a Smartcloud Artificial Assistant account and License?`},
  { type: 'confirm', name: 'signup', message: `Would you like to signup for a license to gain access to official support and tools?`},
  { type: 'input', name: 'email', message: 'What is your email?'},
  { type: 'input', name: 'Name', message: 'What is your name?'},
  { type: 'input', name: 'dob', message: 'What is your Date of Birth?'},
  { type: 'input', name: 'username', message: 'What is would you like your account name to be?'},
  { type: 'confirm', name: 'noSupport', message: `Are you sure you want to continue without an account for support?`},
  { type: 'expand', name: 'logging', message: 'What level of logging do you want to enable with?', choices: logging, default: 'info' },
  { type: 'confirm', name: 'sentry', message: `Do you want to enable smartcloud error tracking to help improve services?`},
  { type: 'suggest', name: 'port', message: 'What port would you like to run smartcloud on?', suggestions: ['8080', '80', '3333', '3000', '4000', '4286']},
  { type: 'confirm', name: 'database', message: `Have you got a database setup?`},
  { type: 'input', name: 'dbhost', message: 'What is the database host?'},
  { type: 'input', name: 'dbname', message: 'What is the database called?'},
  { type: 'suggest', name: 'dbport', message: 'What is the database port?', suggestions: ['8080', '80', '3333', '3000', '4000', '4286']},
  { type: 'input', name: 'dbuser', message: 'What is the database username?'},
  { type: 'password', name: 'dbpass', message: "What is the database password?", mask: '*'},
  {type: 'checkbox-plus', name: 'modules', message: 'Which of the officially hosted modules do you want smartcloud to install? (Use "spacebar" to select)', pageSize: 10, highlight: true, searchable: true, default: ['discord'], source: function(answersSoFar: any, input: string) { input = input || ''; return new Promise(function(resolve) { var fuzzyResult = fuzzy.filter(input, modules, { extract: function(item: { [x: string]: any; }) { return item['name']; } }); var data = fuzzyResult.map(function(element:any) { return element.original; }); resolve(data)})}}
];
var discord:any = {
  prefixes: [
    {name: "?", value: "?", disabled: false},
    {name: "!", value: "!", disabled: false},
    {name: "@", value: "@", disabled: false},
    {name: "~", value: "~", disabled: false},
    {name: "Tag the bot", value: "tag", disabled: false},
    {name: "Regex Option", value: "regex", disabled: false}
  ],
  installQuestions: [
    { type: 'confirm', name: 'defaults', message: `Would you like to install default actions, events and commands?`},
    { type: 'checkbox-plus', name: 'modules', message: `What would you like your prefix to be? (Use "spacebar" to select)`, pageSize: 10, highlight: true, searchable: true, default: ['!'], source: function(answersSoFar: any, input: string) { input = input || ''; return new Promise(function(resolve) { var fuzzyResult = fuzzy.filter(input, discord.prefixes, { extract: function(item: { [x: string]: any; }) { return item['name']; } }); var data = fuzzyResult.map(function(element:any) { return element.original; }); resolve(data)})}},
  ]
}

/**
*
* Installation
*
*/
vorpal
  .command('installation [apts...]')
  .description("Runs the automatic smartcloud installer")
  .alias("install", "i")
  .option('-s, --standalone', 'Standalone installation for smartcloud modules')
  .option('--dev', 'Install as development env')
  .option('--staging', 'Install as staging env')
  .action(async function(args:any) {
    // this.log(args)
    const config:any = []
    const self = this;
    if (!args.apts) return await question(self, config)
    return
  })

var bottomBar = null
var completed = false
var loader = ['/ Installing', '| Installing', '\\ Installing', '- Installing'];
var x = 4;
var ui = null
var spawn = require('child_process').spawn;

async function question (self:any, config:any) {
  let i = 0;
  do {
    await inquire(questions[i], config)
    i++
  } while (questions[i-1].name !== "account");
  await account(config)
  i = 10
  do {
    await inquire(questions[i], config)
    i++
  } while (questions[i-1].name !== "database");
  if (!config.database){
    i = 19
  }
  do {
    await inquire(questions[i], config)
    i++
  } while (questions[i]);
  ui = new inquirer.ui.BottomBar({ bottomBar: loader[x % 4] });
  var cmd = spawn(cmdify('npm'), ['install'], { stdio: 'pipe' })
  cmd.stdout.pipe(ui.log)
  cmd.on('close', () => {
    return completed = true
  });
  await test(loader, i, ui)
  clearTimeout(bottomBar);
  // self.log(config)
  ui.updateBottomBar(boxen('NPM Install completed (via SCAA)!', {padding: 1}) +"\n");
  i = 0
  do {
    await inquire(discord.installQuestions[i], config)
    i++
  } while (discord.installQuestions[i]);

  return
}

function test (loader: any[], x: number, ui: { updateBottomBar: (arg0: any) => void; }) {
  return new Promise((resolve) => {
    bottomBar = setInterval(() => {
      if (completed === false) {
        ui.updateBottomBar(loader[x++ % 4]);
      } else resolve()
    }, 300);
  })
}

function inquire (question:any, config:any) {
  return inquirer.prompt(question).then((answers:any) => {
    return config[question.name] = answers[question.name]
  });
}

async function account (config:any) {
  let start = 4
  if (config.account == false) {
    // Ask if they want to setup an account
    await inquirer.prompt(questions[start]).then((answers:any) => {
      return config[questions[start].name] = answers[questions[start].name]
    });
  }
  if (config.signup == false && config.account == false) {
    // Check user is sure they want to continue without an account
    return await inquirer.prompt(questions[start+5]).then(async(answers:any) => {
      config[questions[start+5].name] = answers[questions[start+5].name]
      if (answers[questions[start+5].name] == false) {
        return await account(config)
      }
      return
    });
  }
  // Get the users email
  await inquirer.prompt(questions[start+1]).then((answers:any) => {
    return config[questions[start+1].name] = answers[questions[start+1].name]
  });
  if (config.signup == true) {
    // Get the user account setup
    await inquirer.prompt(questions[start+2]).then((answers:any) => {
      return config[questions[start+2].name] = answers[questions[start+2].name]
    });
    await inquirer.prompt(questions[start+3]).then((answers:any) => {
      return config[questions[start+3].name] = answers[questions[start+3].name]
    });
    await inquirer.prompt(questions[start+4]).then((answers:any) => {
      return config[questions[start+4].name] = answers[questions[start+4].name]
    });
  }
  return
}

/**
 *
 * Development mode
 *
 */


let results:any
let bumpargs=""
vorpal
  .mode('dev')
  .delimiter('dev:')
  .validate(function () {
    if (developer === developerPass) {
      return true;
    } else {
      return 'Ah ah ah, you didn\'t say the magic word';
    }
  })
  .init(function(_args:any, callback: () => void){
    vorpal.log('Welcome to Development mode.\nIf you have a developers license, you can now directly do smartcloud development commands. To exit, type `exit`.');
    callback();
  })
  .action(async function(input:any) {
    const self = this;
    const args = input.split(/ +/g)
    const command = args.shift();
    if (command == "docs") {
      return await buildDocs()
      .catch((err:any)=>vorpal.log(err))
    }
    return
  })

function buildDocs () {
  return new Promise((resolve, reject) => {
    fs.readdir(`./package/`, (err:any, packages:any) => {
      if (err) return reject(err)
      packages.forEach((pack:any) => {
        vorpal.log(`Building docs package: ${pack}`);
        try {
          let packageType = require(`${directory}/package/${pack}/package.json`).smartcloud.packageType
          fs.ensureFile(`${directory}/wiki/${packageType}s/${pack}/README.md`);
          jsdoc2md.render({ files: `${directory}/package/${pack}/lib/**/*.js` }).then((output:any) => fs.writeFileSync(`${directory}/wiki/${packageType}s/${pack}/api.md`, output)).catch((err:any)=> {vorpal.log(err)});
          fs.copy(`${directory}/wiki/${packageType}s/${pack}/README.md`, `${directory}/package/${pack}/README.md`).catch((err:any) => {vorpal.log(`Couldn't copy readme for ${pack}: `+err)});
          fs.copy(`${directory}/package/${pack}/CHANGELOG.md`, `${directory}/wiki/${packageType}s/${pack}/CHANGELOG.md`).catch((err:any) => {vorpal.log(`Couldn't get Changelog for ${pack}: `+err)});
          fs.copy(`${directory}/wiki/${packageType}s/${pack}/guides`, `${directory}/package/${pack}/guides`).catch((err:any) => {vorpal.log(`Couldn't get docs folder for ${pack}: `+err)});
        } catch(err){
          vorpal.log(`Failed to build docs package ${pack} with error: ` + err);
        }
      })
    })
    return resolve()
  })
}



page()
vorpal
  .delimiter('Smartcloud$')
  .show()
  .parse(process.argv)
