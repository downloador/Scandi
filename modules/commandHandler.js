let Cooldowns = {}

function isInCooldown(User,Command,Cooldown) {
    if (Cooldowns[User.id] != undefined) {
        if (Cooldowns[User.id][Command] != undefined) {
            const now = Date.now()
            if (Cooldowns[User.id][Command] > now) {
                return `Du kan använda detta kommando om ${(Cooldowns[User.id][Command]/1000-now/1000).toFixed(2)} sekunder.`
            } else {
                Cooldowns[User.id][Command] = Date.now()+Cooldown*1000
            }
        } else {
            Cooldowns[User.id][Command] = Date.now()+Cooldown*1000
        }
    } else {
        Cooldowns[User.id] = {}
        Cooldowns[User.id][Command] = Date.now()+Cooldown*1000
    }

    return true
}

module.exports.useCommand = function(User,Command, msg) {
    var commandModule = Client.Commands.get(Command)
    var UserLevel = Client.Settings.userLevel[User.id] ?? 1

    if (UserLevel >= commandModule.level) {
        let a = isInCooldown(User,Command,commandModule.cooldown)
        if (a == true) {
            commandModule.execute(msg)
        } else {
            msg.reply(a)
        }
    }
}