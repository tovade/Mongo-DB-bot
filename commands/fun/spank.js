const {  MessageAttachment } = require('discord.js');
const canvacord = require("canvacord")
module.exports = {
    name: "spank",
    category: "Fun",
    async execute (client, message, args) {
        const user = message.mentions.members.first() || client.users.cache.get(args[0])
       
        if(!user) {
            const image1 = client.user.displayAvatarURL({ format: "png" })
            const image2 = message.author.displayAvatarURL({ format: "png" })
            const slap = await canvacord.Canvas.spank(image1, image2)
            let attachment = new MessageAttachment(slap, "spank.png")
            return message.channel.send(attachment)
   
        }
    if(user) {
        const image1 = message.author.displayAvatarURL({ format: "png" })
        const image2 = user.displayAvatarURL({ format: "png" })
        const slap = await canvacord.Canvas.spank(image1, image2)
        let attachment = new MessageAttachment(slap, "spank.png")
        return message.channel.send(attachment)
    }
    }
}