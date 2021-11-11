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

module.exports = client;

["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.login(config.token);
