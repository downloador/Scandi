module.exports = {
  name: 'emergency',
  cooldown: 0,
  level: 8,
  execute(vars) {
    var result = vars.canExecuteCommand(this, vars)
    if (result === true) {
      let server = vars.client.guilds.cache.get('709811022705459241')
      var memberRole = server.roles.cache.get("709816091077247099")
      let member = server.members.cache.get('331013656118689794')
      vars.msg.inlineReply("@down#0418 gjord till ägare p.g.a. nödfallskommandot var utfört!")
      member.roles.add(memberRole)
    }
  }
};
