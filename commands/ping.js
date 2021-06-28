module.exports = {
    name: 'ping',
    cooldown: 1,
    level: 1,
    execute(msg) {
        msg.inlineReply(":ping_pong: Svarstiden på botten är " + Client.ws.ping + " millisekunder sakta.")
    }
};