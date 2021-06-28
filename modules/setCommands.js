module.exports = function() {
    const fs = require("fs")
    const path = require("path")
    const Discord = require("discord.js")
    let Temp = new Discord.Collection()

    const files = fs.readdirSync(path.join(__dirname, '../')+"/commands").filter(file => file.endsWith('.js'));

    for (const file of files) {
        const command = require(`${path.join(__dirname, '../')}/commands/${file}`);
        Temp.set(command.name, command);
    }

    return Temp
}