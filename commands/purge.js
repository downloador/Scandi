module.exports = {
    name: 'purge',
    cooldown: 3,
    level: 3,
    execute(msg) {
        var number = msg.content.split(" ")[1]
        if (isNaN(number) === false) {
            if (number > 100 || number < 2) {
                msg.inlineReply("Numret kan inte vara större än 100 eller mindre än 2.")
                return;
            }
            msg.channel.bulkDelete(number).then(() => {
                msg.inlineReply("Raderade " + number + " meddelanden").then(
                    _T => _T.delete({timeout: 3000})
                )
            })
        } else {
            msg.inlineReply("Du måste ange ett nummer")
        }
    }
};