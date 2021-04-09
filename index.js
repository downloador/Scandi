const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client()

client.commands = new Discord.Collection();
client.typeToExecute = new Discord.Collection();

require("./ExtendedMessage");

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const typeToExecuteFiles = fs.readdirSync('./typetoexecute').filter(file => file.endsWith('.js'));

for (const file of typeToExecuteFiles) {
	const typeToExecute = require(`./typetoexecute/${file}`);
	client.typeToExecute.set(typeToExecute.name, typeToExecute);
}

var cooldownList = {}

var config = {
    prefix: "-",
}

var permissionsLevel = {
    "398139325633789953": 8,
    "331013656118689794": 9 //.down#4200
}

function addCooldown(id,command) {
    if (cooldownList[id] === undefined) {
        cooldownList[id] = {}
    }
    cooldownList[id][command] = Date.now()+(client.commands.get(command).cooldown)*1000
}

function createVars(u1,command) {
    var vars = {}
    vars.command = command
    vars.msg = u1
    vars.author = u1.author
    vars.client = client
    vars.Discord = Discord
    vars.config = config
    vars.permissionsLevel = permissionsLevel
    vars.cooldownList = cooldownList

    vars.canExecuteCommand = function(that,vars) {
        var command = that.name
        var commandObj = client.commands.get(command)
        var UserLevel = permissionsLevel[vars.author.id]
        var Level = commandObj.level
        if (UserLevel >= Level) {
            var canuse = false
            if (vars.permissionsLevel[vars.author.id] >= 8) {
                // owner override
                canuse = true
            }
            if (cooldownList[vars.author.id] === undefined) {
                canuse = true
            } else {
                const currentDate = Date.now()
                if (cooldownList[vars.author.id][command] === undefined) {
                    canuse = true
                } else if (cooldownList[vars.author.id][command] != undefined) {
                    if (cooldownList[vars.author.id][command] < currentDate) {
                        // Cooldown has expired
                        canuse = true
                    } else {
                        console.log(cooldownList,vars.author.id,command)
                        var u1 = cooldownList[vars.author.id][command]
                        var u2 = u1/1000-currentDate/1000
                        u2 = u2.toString()
                        u2 = u2.split(".")
                        u2 = u2[0]+"."+u2[1].substring(0,1)+" sekunder."
                        vars.msg.reply("Du kan använda detta kommando om " + u2)
                        return false;
                    }
                }
            }
            return canuse
        } else {
            vars.msg.reply("Du har inte tillstånd att använda detta kommando.")
            return false;
        }
    }

    return vars;
}

client.once('ready', () => {
   client.user.setActivity('dina samtal.', { type: 'LISTENING' });
})

client.on('message', msg => {
    if (msg.content.startsWith(config.prefix)) {
        var command = msg.content.split(" ")[0]
        command = command.substring(config.prefix.length,command.length)

        var vars = createVars(msg,command)

	console.log(msg.channel.name,client.typeToExecute)
        if (client.typeToExecute.has(msg.channel.name)) {
		console.log(1)
            client.typeToExecute.get(msg.channel.name).execute(vars)
        }

        if (client.commands.has(command)) {
            client.commands.get(command).execute(vars)
            addCooldown(msg.author.id,command)
        }
    }
});

client.login(process.env.TOKEN);
