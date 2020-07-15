---
description: 'Explains packages, and extensions.'
---

# Packages & Extensions

## What are extensions?

Extensions are modules which are built by the community to provide additional functionality to SCAA applications. To limit damage to other extensions, each extension must be built to specific conventions and rules.

We believe in making it super easy for users to build extensions for SCAA and even encourage it using our inbuilt module sharing system, which allows each module to be imported, exported, created, and shared for all our users. 

We have an online marketplace full of all our modules ready to be explored at https://extensions.smartcloud.gg/

### Creating extensions



### Modify Existing Applications

To make is super simple for our developer friends, we made it extremely easy for existing applications to be converted into extensions. You have two options on how to initialise your extensions, through `require(yourCode)`or through file execution. 

If you want to use `require` as for your extension, you will simply need to make sure that the entry point of your extension **does** **not launch** the application. Instead have a function which redirects smartcloud to our launcher file. 

```typescript
//init.ts

export function smartcloud () {
    const data = {
      file: `${__dirname}/smartcloud.js`
    }
    return data;
}
```

```typescript
//smartcloud.ts

import { Api, Init } from "./init"

process.on('message', function (emit) {
   switch(emit.topic) {

     case "restart":
      break;

     case "shutdown":
      break;

     case "api":
      new Api(emit.data.message)
      break;
   }
})

function initialize() {
  core.pm.sendDataToProcessId(0, { type : 'process:msg', data : {app: process.env.name.split(" ~ ")[1], id: process.env.pm_id}, topic: "extensionLoaded" }, function(err: any) { if (err) console.log(err); });
  new Init()
}

initialize()
```





