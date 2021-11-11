const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    category: 'infomation',
    description: 'Show ping bot!',

    run: async(client, message, args) => {
        const msg = await message.channel.send('🏓 Checking ping...');

        const embed = new Discord.MessageEmbed()
            .setTitle(`${client.user.username} Ping !`)
            .setDescription(`Ping is: ${client.ws.ping} ms!\nMessage Ping is: ${Math.floor(msg.createdAt - message.createdAt)} ms!`)
        
        await message.channel.send(embed);
        msg.delete();
    }
}
