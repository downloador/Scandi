/*
* index.js *

Complete remake over Scandi.
Written by @downloador

*/

(async function () {
    const Discord = require("discord.js")

    Client = new Discord.Client()
    Client.Settings = require("./settings.json")
    Client.Commands = require("./modules/setCommands")()
    Client.InChannel = require("./modules/setInChannels")()

    require("./modules/ExtendedMessages");
    var commandHandler = require("./modules/commandHandler")

    Client.on("message", Message => {
        if (Message.content.startsWith(Client.Settings.prefix)) {
            var command = Message.content.split(" ")[0].replace(Client.Settings.prefix,"")
    
            if (Client.Commands.has(command)) {
                commandHandler.useCommand(Message.author,command, Message)
            }
        }
    })

    Client.login(Client.Settings.token === "TOKENHERE" ? process.env.TOKEN : Client.Settings.token);
    
    setTimeout(function(){process.exit()},15*1000*60*60)
})()
