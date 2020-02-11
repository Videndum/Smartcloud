"use strict";
module.exports = {
    name: "sendMessage",
    version: "1",
    description: "Sends a message to the location defined.",
    usage: '{"action": "sendMessage", "global": {"vars": {"location": "+[getChannel.0.channelID]+", "message": "ping"}}}',
    args: true,
    minargs: 0,
    argFormat: {
        message: "string",
        channel: "number",
    },
    helpInformation: "Simply simply do `commands` to get the full list of commands",
    execute: (root, message, args) => new Promise((resolve, reject) => {
        console.log(args);
        reject("action not built");
    })
};
