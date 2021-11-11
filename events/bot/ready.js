const client = require('../../index.js');

const config = require('../../config.json');

const activities = [
    { name: 'DiozVN Coding', type: 'WATCHING'}, //WATCHING, STREAMING, LISTENING
    { name: 'DiozVN Testing', type: 'WATCHING'}
];

client.on('ready', () => {
    console.log(`Log into ${client.user.username} success!`)
    client.user.setPresence({status: 'online', activity: activities[0] })

    let activity = 1;
    setInterval(() => {
        activities[2] = { name: `${client.guilds.cache.size} servers`, type: 'WATCHING'} ;
        activities[3] = { name: `${client.users.cache.size} users`, type: 'WATCHING'} ;

        if (activity > 3) activity = 0;
        client.user.setActivity(activities[activity]);
        activity++;
    }, 3000);
});
