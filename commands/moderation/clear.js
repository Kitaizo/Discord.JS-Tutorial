const Discord = require('discord.js');
const config = require('../../config.json');
module.exports = {
    name: 'clear',
    aliases: ['purge'],
    category: 'moderation',
    description: 'Clear message!',

    run: async(client, message, args) => {
        const deleteCount = parseInt(args[0], 10);

        if (isNaN(deleteCount)) {
            const deleteMessageError1 = new Discord.MessageEmbed()
                .setTitle(`🧹 ${client.user.username} Clear Message`)
                .setColor('RED')
                .addField(`Error:`, `Please specify a number of message to delete`, false)
                .addField(`Use:`, `${config.prefix}purge [1 -> 99]`, false)
                .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
                .setTimestamp();
            
            return message.channel.send(deleteMessageError1);
        } else if (deleteCount <= 1 || deleteCount > 100) {
            const deleteMessageError2 = new Discord.MessageEmbed()
                .setTitle(`🧹 ${client.user.username} Clear Message`)
                .setColor('RED')
                .addField(`Error:`, `Please specify a number of message to delete ranging from 1 -> 99`, false)
                .addField(`Use:`, `${config.prefix}purge [1 -> 99]`, false)
                .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
                .setTimestamp();
            
            return message.channel.send(deleteMessageError2);
        }

        message.channel.bulkDelete(deleteCount).catch(err => console(`Cannot delete message because ${err}`))

        const deleteMessageSuccess = new Discord.MessageEmbed()
                .setTitle(`🧹 ${client.user.username} Clear Message`)
                .setColor('RED')
                .addField(`Success:`, `Delete ${deleteCount} messages successfully`, false)
                .setFooter(`${client.user.username}`, client.user.displayAvatarURL())
                .setTimestamp();
            
            return message.channel.send(deleteMessageSuccess);
    }
}
