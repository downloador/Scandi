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
          msg.reply("Nummret kan inte vara större eller mindre än 100 och 2")
          return;
        }
        vars.msg.channel.bulkDelete(number).then( () => {
          vars.channel.send("Tog bort " + number + " meddelanden")
        })
      } else {
       msg.reply("Du måste ange ett nummer") 
      }
    }
  }
};
