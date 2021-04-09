module.exports = {
  name: 'ip',
  cooldown: 5,
  level: 0,
  execute(vars) {
    var result = vars.canExecuteCommand(this, vars)
    if (result === true) {
      vars.msg.inlineReply("Direct Connect IP:n är `83.233.127.52:30140`, öppna F8 och klistra in `connect` följt av IP:n. ")
    }
  }
};
