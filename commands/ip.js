module.exports = {
	name: 'ip',
    cooldown: 5,
    level: 0,
	execute(vars) {
        var result = vars.canExecuteCommand(this,vars)
        if (result === true) {
            vars.msg.reply("Direct Connect IP:n är **connect 83.233.127.52:30140**.")
        }
	},
};
