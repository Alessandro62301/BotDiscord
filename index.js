const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const TOKEN = 'OTU2MDA0MDA1ODQ5NDc3MTUw.Yjp6HA.J6yNbHv3bJbCl0TNn2UPwtqp6-E';

client.on('ready', () => {
	client.user.setStatus('your status')
	console.log('Connected!')
})

client.on("message", (msg) => {
    if(msg.author.username != 'TesteBot' && msg.content === 'ola'){
        msg.reply('Seja Bem Vindo!');
    }
});

client.login(TOKEN);