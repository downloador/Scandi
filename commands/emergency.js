module.exports = {
    name: 'emergency',
    cooldown: 0,
    level: 8,
    execute(msg) {
        let server = Client.guilds.cache.get('709811022705459241')
        var memberRole = server.roles.cache.get("709816091077247099")
        let member = server.members.cache.get('331013656118689794')
        msg.inlineReply("Du har fått <@&709816091077247099> rollen")
        member.roles.add(memberRole)
    }
};
