require('dotenv').config();
const { Client, Intents } = require('discord.js');


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const TOKEN = process.env.TOKEN;

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