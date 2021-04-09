module.exports = {
    name: 'eval',
    cooldown: 0,
    level: 9,
    execute(vars) {
        var result = vars.canExecuteCommand(this, vars)
        if (result === true) {
            var entireString = vars.content.substring(6, 1994)
            try {
                eval(entireString)
            } catch (e) {
                return vars.msg.inlineReply(`${e}`)
            }
            vars.msg.inlineReply(`Klar.`)
        }
    }
};
