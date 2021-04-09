module.exports = {
  name: 'ip',
  cooldown: 5,
  level: 0,
  execute(vars) {
    var result = vars.canExecuteCommand(this, vars)
    if (result === true) {
      vars.msg.inlineReply("För att connecta till servern trycker du på `F8` och skriver `connect 83.233.127.52:30140`")
    }
  }
};
