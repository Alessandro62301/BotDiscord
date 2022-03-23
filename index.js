require('dotenv').config();
const { Client, Intents } = require('discord.js');


const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const TOKEN = process.env.TOKEN;

client.on('ready', () => {
	client.user.setStatus('your status')
	console.log('Connected!')
})

client.on("message", (msg) => {
    if (msg.author.bot) return
    
    if(msg.content === '/git'){
        //msg.channel.send
        msg.reply(`Comandos Git: 
    Geral
    git help

    Comando específico
    git help add
    git help commit
    git help <qualquer_comando_git>
    
    Criar novo repositório
    git init
    Verificar estado dos arquivos/diretórios
    git status

    Adicionar um arquivo em específico
    git add meu_arquivo.txt

    Adicionar um diretório em específico
    git add meu_diretorio

    Adicionar todos os arquivos/diretórios
    git add .	

    Adicionar um arquivo que esta listado no .gitignore (geral ou do repositório)
    git add -f arquivo_no_gitignore.txt

    Setar usuário
    git config --global user.name "lorem lorem"

    Setar email
    git config --global user.email "lorem@lorem.com.br"

    Setar editor
    git config --global core.editor vim

    Setar ferramenta de merge
    git config --global merge.tool vimdiff

    Setar arquivos a serem ignorados
    git config --global core.excludesfile ~/.gitignore

    Listar configurações
    git config --list
        `);
        
    }

    if(msg.content === '/help'){
        msg.reply(`Lista de Comandos:

        `);
    }
});

client.login(TOKEN);