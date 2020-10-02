const GuildModel = require("../models/welcomeLeave")
const { MessageEmbed } = require("discord.js")

module.exports = async (client, member) => {
    const guild = await GuildModel.findOne({
        GuildID: member.guild.id,
    })
    let welcomeChannel = guild.welcomeChannelId
    if(!welcomeChannel && welcomeChannelId === null) return;
    let welcomeEmbed = new MessageEmbed()
    .setTitle(`Welcome ${member.name}`)
    .setDescription(`Welcome to ${member.guild.name}`)
    client.channels.cache.get(welcomeChannel).send(welcomeEmbed)
}