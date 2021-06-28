module.exports = {
    name: 'eval',
    cooldown: 0,
    level: 9,
    execute(msg) {
        var entireString = msg.content.substring(6, 1994)
        try {
            eval(entireString)
        } catch (e) {
            return msg.inlineReply(`${e}`)
        }
        msg.inlineReply(`Kod: 0`)
    }
};