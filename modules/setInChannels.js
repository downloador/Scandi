module.exports = function() {
    const fs = require("fs")
    const path = require("path")
    const Discord = require("discord.js")
    let Temp = new Discord.Collection()

    const files = fs.readdirSync(path.join(__dirname, '../')+"/inchannels").filter(file => file.endsWith('.js'));

    for (const file of files) {
        const inchannel = require(`${path.join(__dirname, '../')}/inchannels/${file}`);
        Temp.set(inchannel.name, inchannel);
    }

    return Temp
}