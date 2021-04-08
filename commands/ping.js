module.exports = {
  name: 'ping',
  cooldown: 1,
  level: 0,
  execute(vars) {
    var result = vars.canExecuteCommand(this, vars)
    if (result === true) {
      vars.msg.inlineReply(":ping_pong: Svarstiden på botten är " + vars.client.ws.ping + " millisekunder sakta.")
    }
  }
};
