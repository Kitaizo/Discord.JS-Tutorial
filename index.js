console.clear();

const Discord = require('discord.js');
const intents = new Discord.Intents(32767);
const client = new Discord.Client({
    intents,
    disableEveryone: true,
    partials: ["CHANNEL", "MESSAGE", "GUILD_MEMBER", "REACTION"]
});

const config = require('./config.json');

client.on('ready', () => {
    console.log(`Log into ${client.user.username} success!`)
    client.user.setActivity(`My prefix : ${prefix}`)
});

client.login(config.token);
