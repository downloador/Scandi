module.exports = {
  name: 'ip',
  cooldown: 5,
  level: 0,
  execute(vars) {
    var result = vars.canExecuteCommand(this, vars)
    if (result === true) {
      vars.msg.inlineReply("Direct Connect IP:n (genom konsollen (F8)) är `83.233.127.52:30140`. ")
    }
  }
};
