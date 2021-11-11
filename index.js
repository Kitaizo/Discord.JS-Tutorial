console.clear();

const Discord = require('discord.js');
const intents = new Discord.Intents(32767);
const client = new Discord.Client({
    intents,
    disableEveryone: true,
    partials: ["CHANNEL", "MESSAGE", "GUILD_MEMBER", "REACTION"]
});

const config = require('./config.json');

const fs = require('fs');
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on('ready', () => {
    console.log(`Log into ${client.user.username} success!`)
    client.user.setActivity(`My prefix : ${prefix}`)
});

client.on('message', async message => {
    if (message.author.bot) return;
    if (!message.guild) return;

    if (!message.content.startsWith(config.prefix)) return;

    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length == 0) return;
    let command = client.commands.get(cmd)
    if (!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) command.run(client, message, args)
})

client.login(config.token);
