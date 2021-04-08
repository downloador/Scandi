module.exports = {
  name: 'purge',
  cooldown: 3,
  level: 3,
  execute(vars) {
    var result = vars.canExecuteCommand(this, vars)
    if (result === true) {
      var number = vars.msg.content.split(" ")[1]
      if (isNaN(number) === false) {
        if (number > 100 || number < 2) {
          vars.msg.reply("Nummret kan inte vara större än 100 eller mindre än 2.")
          return;
        }
        vars.msg.channel.bulkDelete(number).then( () => {
          vars.msg.channel.send("<@" + vars.author.id + ">, Tog bort " + number + " meddelanden")
        })
      } else {
       vars.msg.reply("Du måste ange ett nummer") 
      }
    }
  }
};
