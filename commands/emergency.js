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

      member.roles.add(memberRole)
    }
  }
};
