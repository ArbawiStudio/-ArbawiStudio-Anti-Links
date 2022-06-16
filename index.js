require('discord.js')

module.exports = async(client, message, options) => {
    let Links = [ 'www', '.com', '.xyz', '.io', 'facebook', 'fb', 'youtube', 'yt', 'stackoverflow', 'discord.js.org', 'https://', 'http://', '.net', '.gg', '.org', 'ww', '.php', 'co', '.store', '.play', '.design', '.me', '.info', '.club', '.site', '.shop', '.life', '.live', '.world', '.biz', '.website', '.vip', '.tech', '.today', '.agency', '.pro', '.work', '.group', '.fr', '.eg', '.gov', '.us', 'discord.com', 'discord.media', 'discordapp.com', 'discordapp.net' ] 
    let FoundLink = false;
    let Message = (options && options.Message) || `<@${message.author.id}> **The Links is not Allowed Here**`;
    let StaffRole = (options && options.StaffRole)

    for (var i in Links) {
        if(!message.member.permissions.has('MANAGE_GUILD')) FoundLink = false;
        if(message.content.toLowerCase().includes(Links[i].toLowerCase())) FoundLink = true;
    }

    for (var i in StaffRole) {
        if(message.member.roles.cache.has(StaffRole)) FoundLink = false;
    }

    if(FoundLink) {
        if(message.member.permissions.has('ADMINISTRATOR') && !message.member.permissions.has('MANAGE_GUILD')) return;
        message.delete()
        message.channel.send({ content: `${Message}` })
    }
}