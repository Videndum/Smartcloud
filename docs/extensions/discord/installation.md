# Installation

This module can be run as either part of Smart Cloud Artificial Assistant, or as standalone framework for discord bots. Using our auto installer, it comes completely operational with default commands, events and actions. 

From within the `@smartcloud/cli` user can choose to install, create and upload their own modules with actions, events and commands to our repository much like npm does, allowing for continuous growth of the applications abilities without the hassle which is often involved when building customised applications.

## Using our auto installer

### Auto Install for SCAA operation

Running our auto installer is super easy and guides you through all the steps. 

Simply install our command line interface using:

```bash
npm i -g @smartcloud/cli
```

Once installed, run the command

```bash
smartcloud install
```

### Auto Install for standalone operation

Simply install our command line interface using:

```bash
npm i -g @smartcloud/cli
```

Once installed, run the command

```bash
smartcloud install discord --standalone
```

## Install using NPM

### NPM for standalone operation

Simply install our package using:

```bash
npm i --save @smartcloud/discord
```

Create a node.js file and call the initialisation function

```javascript
// import discord framework
const discord = require('@smartcloud/discord');

// Initialize discord
discord.initialize()
```

