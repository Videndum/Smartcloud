# Discord

![](../../.gitbook/assets/discord.png)

{% hint style="danger" %}
_**This software is not release ready. Please do not try to install and instead contact the developers on info@tgtmedia.org for correct installation help and guidance**_
{% endhint %}

{% hint style="success" %}
## I already use Discord Bot Maker, and want to switch!

As discord bot maker was built using a similar method of JSON structuring, we decided to build a direct conversion tool for users who already use DBM. Once you have installed SCAA, simply head over to our tutorial on how to convert!
{% endhint %}

This "framework" \(term used lightly\) is developed to make creating discord bots extremely easy for end users and developers. Built on the Typescript coding platform, it features tools for ts, js and json creation of commands and events.

Even though this could be used as an framework for back-end developers, we have built it with the intention of front end editing and production. Everything you can create and make from the back-end can also be created using the SCAA web portal, WordPress plugin or API.

Please see the SCAA Core project for information regarding initial setup and installation of Smart Cloud Artificial Assistant if you intend to use all the features of this software.

### JSON driven, what the \*?

Yeah we know, that term is slightly confusing for most users. We are claiming this title under the understanding that Discord Bot Maker is an application and not a framework as it is limited on the ability to extend and has reduced functionality. 

We have built this framework to be as simple to use while maintaining functionality for the end users. We have introduced unprecedented customisation into a system with extremely minimal effort to actually use. To prove how simple our system actually is, we have developed a command using JSON to build new JSON commands!

Obviously there is more to this than meets the eye, there is still a lot of Javascript involved, so we have build a handy selection of guides to get you started!

{% page-ref page="guides/" %}

### Why use over other Discord.js Frameworks?

We don't expect everyone to just drop frameworks which already exist, that would seriously scare our team as we really ain't anywhere near ready for that level of responsibility. What we do want to do is make an impact, be seen as a serious tool for discord bots. 

> But JSON isn't capable of the customisation which others can using JavaScript....

This was one of the most scary things for us to hear from the community during the development of this framework, people doubting that customisation would be sufficient for complex discord bots. We really wanted to prove these doubters wrong. 

So we created custom handlers with such depth, you can access any option using JSON without even having to think about the JavaScript behind it. Imagine the following command: 

```bash
{
  "name": "demo",
  "alias": [],
  "version": "0.0.2",
  "description": "demo command",
  "helpInformation": "",
  "permissions": "none",
  "usage": "<action>",

  "args": true,
  "minargs": 0,
  "localargs": {
    "name": "smartcloud#0001",
    "local": 1
  },
  "guildOnly": true,
  "execute": [
      {"action": "demo", "options": {"vars": {"names": "*m0*&&*c1*||*m1*", "mentions": "*m1*", "returned": "+[savevar.3.var]+", "local": "[name]", "server": "<server>", "global": "{global}"}}, "typing": {"active": true, "mode": "channel"} },
      "pong"
  ]
}
```

The `execute` of this command is an `array[]` which is cycled through.

| regex | Option | Action |
| :--- | :--- | :--- |
| `option&&option`   |  | Create array of options |
| `option||option`   |  | Return `option1` or `option2` |
| `*option*`   | ↓↓↓ | Find argument |
|  | a`<number>`  | Find arg |
|  | m`<number>`  | Find Mentioned user |
|  | c`<number>`  | Find Mentioned Channel |
|  | r`<number>`  | Find Mentioned role |
|  |  |  |
| `[option]`  | `option` | Find local variable  |
| `<option>`  | `option` | Find server variable  |
| `{option}`  | `option` | Find global variable  |
|  |  |  |
| `+action.inst.var+`  | ↓↓↓ | Find returned value |
|  | `action` | Find the named action |
|  | `inst` | Find action instance |
|  | `var` | Which returned variable |

{% hint style="info" %}
`&&` is always passed before `||`

This therefore means an option of `"*m0*&&*c1*||*m1*&&<option>"` would always return:

`[ MentionedUser0 , (Channel1 or MentionedUser1) , ServerOption ]`
{% endhint %}

## Module Installation

This module can be run as either part of Smartcloud Artificial Assistant, or as standalone framework for discord bots. Using our auto installer, it comes completely operational with default commands, events and actions.

From within the `@smartcloud/cli` user can choose to install, create and upload their own modules with actions, events and commands to our repository much like npm does, allowing for continuous grouth of the applications abilities without the hassle which is often involved when building customised applications.

#### Using our auto installer for SCAA operation

Running our auto installer is super easy and guides you through all the steps.

Simply install our command line interface using:

```bash
npm i -g @smartcloud/cli
```

Once installed, run the command

```bash
smartcloud install
```

You can read more about our installation options here:

{% page-ref page="installation.md" %}

## Framework information

| Key |  |
| :--- | :--- |
| ✓ | Tested & Deployed |
| x | Not supported |
| P | In Planning Phase |
| D | In Development Phase |
| T | In Testing Phase |
| R | Rejected Proposal |
| †&lt;x&gt; | Please see note x below |

### **General**

General details about the frameworks, such as versions.

|  | **0.0.0** |
| :--- | :--- |
| Discord.js | ^11.5.1 |
| Node.js | ^12.9.1 |
| Typings | ✓ †1 |
| Dependencies | 1 †2 |
| Documentation | ✓ |
| VS Code Extension | R |

†1 Written in typescript  
†2 Without optional dependencies, functionality may be reduced

### **Command Parsing**

Command parsing is how frameworks parse messages into commands.

|  | Definition | **0.0.0** |
| :--- | :--- | :--- |
| Command aliases | Call the command something else | ✓ |
| Mention as prefix | Mention the bot to trigger commands | ✓ |
| Multiple prefixes | Have multiple prefixes trigger the bot | ✓ |
| Per-guild prefix customisation | Use different prefixes for each guild | D |
| Regular expression trigger | Use regular expression triggers to start a command | ✓ |
| Stores original input | Store the original input somewhere accessible | ✓ |

### **Command Handling**

Command handling refers to the behaviour of command execution and restrictions. It also includes the monitoring of and the inhibition of messages and commands. Subcommands are commands that are individual commands with the same base name.

|  | Definition | **0.0.0** |
| :--- | :--- | :--- |
| Cooldowns | Block the command for x length of time | ✓ |
| Monitoring messages | Monitor messages for commands | ✓ |
| Blocking messages | Block & delete messages based on filters | D |
| Channel restrictions | Block commands based on channel type | ✓ |
| Permissions restrictions | Block commands based on permissions | D |
| Command Creation | Create files from file editing | ✓ |
| Command edits | Edit commands from file editing | ✓ |
| Command Creation | Create files from frontend interface | P |
| Command edits | Edit commands from frontend interface | P |
| Subcommands | Have commands use same base name | D |
| Run from code | Run the command from code | ✓ |
| Run from JSON | Run the command from JSON file | ✓ |
| Typing mode | Turn on / off bot typing mode | P |
| Help information | Show help information when required | ✓ |

### **Argument Parsing**

Arguments are the data acquired and parsed from user input. This section compares how frameworks can match and parse input.

|  | Definition | **0.0.0** |
| :--- | :--- | :--- |
| Ordered arguments | Arguments called in specific order | ✓ |
| Unordered arguments | Arguments not called in specific order | D |
| Optional arguments | Arguments optional | ✓ |
| User and member matching | Find user and members | P |
| Role matching | Find roles | P |
| Channel matching | Find channels | P |

### **Prompting**

Prompting is the ability to collect messages from the user without invoking a command directly.

|  | Definition | **0.0.0** |
| :--- | :--- | :--- |
| From argument parsing | Prompt from arg parse issue | P |
| Prompt from code | Prompt from code | P |
| Prompt time limit | Prompt using timers | P |
| Prompt retry limit | Prompt using attempt counts | P |
| Prompt cancellation | Prompt when action is cancelled | P |
| Infinite prompts | Prompt continuously | P |
| Custom text prompt system | Prompt with user defined text | P |
| Custom prompt messages | Custom create prompt messages | P |
| Stores prompts and replies | Store prompt responses accessibly | P |
| Reaction prompt system | Listens for reactions | P |

### **Module System**

The module system of a framework is how the framework structures its modules. This includes how new modules \(e.g. commands\) are created and loaded.

|  | Definition | **0.0.0** |
| :--- | :--- | :--- |
| Find modules | Find modules from multiple locations | ✓ |
| Require Modules | Require found modules | ✓ |
| TypeScript module support | Use .ts files and modules | ✓ |
| Recursive loading | Load modules recursively | ✓ |
| Loading and unloading | Load modules & Unload on demand | ✓ |
| Reloading modules | Reload modules on demand | ✓ |
| Module categories | Categories for modules in help | ✓ |
| Custom module types | Define Module types \(e.g. fun\) | ✓ |
| Plugins support | Support requiring plugins | P |

### **Events System**

Events that are useful for a framework

|  | Definition | **0.0.0** |
| :--- | :--- | :--- |
| Modular event listeners | Create event listeners from modules | ✓ |
| On invalid commands | Broadcast event on invalid commands | ✓ |
| On command blocked | Broadcast event on blocked commands | ✓ |
| On command start | Broadcast event on command started | ✓ |
| On command end | Broadcast event on command finished | ✓ |
| On command error | Broadcast event on command error | ✓ |
| On database changes | Broadcast event when database updates | P |
| On module changes | Broadcast event when detects module changes | P |
| Custom events | Broadcast user defined events | ✓ |

### **Database System**

Database support is listed here, alongside settings that can be changed for Discord.

|  | Definition | **0.0.0** |
| :--- | :--- | :--- |
| FireStore |  | P †1 |
| Leveldb |  |  |
| MongoDB |  | P †1 |
| MSSQL |  | P †1 |
| MySQL |  | P †1 |
| NeDB |  |  |
| Neo4J |  |  |
| PostgreSQL |  | P †1 |
| RethinkDB |  |  |
| Sequelize |  | D †1 |
| SQLite |  | P †1 |
| Custom providers |  | P |
| Disabled commands | Disable commands through database | P |
| Blacklist | Blacklist users through database | P |
| Prefixes | Change prefix through database | D |
| Localisation | Change language through database | x |
| Custom settings | Store custom settings in database | P |

†1 This is handled by requiring either separate module \(read guide\) or `@smartcloud/core`

### **Integrations**

Database support is listed here, alongside settings that can be changed for Discord.

|  | Definition | **0.0.0** |
| :--- | :--- | :--- |
| Facebook | Login users | P †1 |
| Google | Login users | P †1 |
| Twitter | Login Users | P †1 |
| Other Login Providers | Login Users | P †1 |
| Twitch | Login Users & Run Actions | P †2 |
| Youtube | Login Users & Run Actions | P †2 |

†1 This is handled by requiring either separate module \(read guide\) or `@smartcloud/core`

