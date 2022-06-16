require('discord.js')

module.exports = async(client, message, options) => {
    let Links = [ 'www', '.com', '.xyz', '.io', 'facebook', 'fb', 'youtube', 'yt', 'stackoverflow', 'discord.js.org', 'https://', 'http://', '.net', '.gg', '.org', 'ww', 'download' ]
    let FoundLink = false;
    let Message = (options && options.Message) || `<@${message.author.id}> **The Links is not Allowed Here**`;
    let StaffRole = (options && options.StaffRole)

    for (var i in Links) {
        if(message.content.toLowerCase().includes(Links[i].toLowerCase())) FoundLink = true;
    }

    for (var i in StaffRole) {
        if(!message.member.permissions.has('ADMINISTRATOR') && !message.member.permissions.has('MANAGE_GUILD')) FoundLink = false;
        if(message.member.roles.cache.has(StaffRole)) FoundLink = false;
    }

    if(FoundLink) {
        if(message.member.permissions.has('ADMINISTRATOR') && !message.member.permissions.has('MANAGE_GUILD')) return;
        message.delete()
        message.channel.send({ content: `${Message}` })
    }
}