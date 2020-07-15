---
description: Create Actions for use within commands
---

# Create Actions

Creating actions is one of the most important parts of creating new modules. These actions are the functionality behind user customisation commands and events. 

To build an action you need to understand the following prerequisites. 

1. Actions are always promises
2. Actions should resolve\(true\) when complete
3. Actions should reject\("\[your error\]"\) when failed
4. Actions should not override any of the core functionality or bot functions
5. Actions should not loop

To create an action, you should go to your module directory, created in the previous step. 

{% page-ref page="./" %}

Once in your module directory, you want to create a directory for `actions` which will be the location all your custom build actions will be stored in. 

An action can be either Typescript \(.ts\) or Javascript \(.js\), we are going to work in typescript, however you should work in whatever is most suited to you. 

### Create your action

For the purposes of this tutorial, we are going to create an action called `ping` which will be called in our command `ping` in the next step.

Here is the final completed action

```typescript
module.exports = {
  name: "ping",
  version: "0.0.1",
  description: "Respond with a ping",
  execute: (root:any, message:any, args?:any): Promise<boolean> => {
    return new Promise((resolve, reject) => {


      // Do something in this command
      if (!args[0]) {
        message.channel.send("ping");

        // Resolve this action/command successfull
        resolve()

      } else {
        message.channel.send("I can't ping that from here")

        // tell the discord that this failed
        reject("An arg was defined")
      }
    });
  }
}
```

Now Lets explain how we got to this completed action. 

The first part to explain is the `module.exports` . This how discord module expects the action to start, if this action isn't defined then the action will not be read by our discord module. 

The first section of the action exports are information about the action, this is used for action help guides and shows on our panel when creating commands. 

```typescript
module.exports = {
  name: "ping",
  version: "0.0.1",
  description: "Respond with a ping",
```

Once we have defined `module.exports`  and the action information, we need to tell it to promise a Boolean. We use the Boolean to make it simple for the discord module to know when a command has completed successfully. 

Now we need to define a new promise. This can be done with `new Promise()` so your code should now look like this. 

```typescript
module.exports = {
  name: "ping",
  version: "0.0.1",
  description: "Respond with a ping",
  execute: (root:any, message:any, args?:any): Promise<boolean> => {
    return new Promise((resolve, reject) => {

    });
  }
}
```

Lets now add some functionality to the action

We are going to first check if arguments have been provided, and simply respond "pong" if they haven't. To do this, we are going to check if the args array has any content. 

```typescript
if (!args[0]) {
    // the command doesn't have args
} else {
    // the command does
}
```

Lets define what should be sent back to the user. 

```typescript
if (!args[0]) {
    message.channel.send("ping");
} else {
    message.channel.send("I can't ping that from here")
}
```

Finally lets resolve the promise

```typescript
  if (!args[0]) {
    message.channel.send("ping");
  
    // Resolve this action/command successfull
    resolve()
  
  } else {
    message.channel.send("I can't ping that from here")
  
    // tell the discord that this failed
    reject("An arg was defined")
  }
```

This file is now ready to be saved. Your bot will automatically detect that the new file has been added, and begin the restart sequence. 

