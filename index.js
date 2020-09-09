// Const et require du bot, rien de bien complexe ici
// require du fichier dotenv qui permet de récupérer le token et prefix
require('dotenv').config();
// Déclaration de la constante contenant le prefix
const prefix = process.env.PREFIX;
// Déclaration de la constante avec le plugin discord.js
const Discord = require('discord.js');
// Déclaration de la constante du client discord
const bot = new Discord.Client();
// Déclaration de la constante de ce que contient le dossier commands
const botCommands = require('./commands');
// Déclaration d'une constante contenant le token associé à votre bot
const TOKEN = process.env.TOKEN;

// Création d'une collection contenant les commandes
bot.commands = new Discord.Collection();

// Association du bot avec le TOKEN
bot.login(TOKEN);

// Création d'une liste contenant les commandes
Object.keys(botCommands).map(key => {
    bot.commands.set(botCommands[key].name, botCommands[key]);
})

// Event de connexion
bot.on('ready', () => {
    console.info(`Connexion réussie avec ${bot.user.tag}!`);
});

// Event d'erreur
bot.on('error', () => {
    console.error(`Le bot a rencontré une erreur...`);
});

// Event de reconnexion
bot.on('reconnecting', () => {
    console.log('Reconnexion...');
});

// Event de déconnexion
bot.on('disconnect', () => {
    console.log('Deconnexion...!');
});

// Event de message
bot.on('message', async msg => {
    // Deconstruction du message pour récupérer l'argument de la commande
    const args = msg.content.split(/ +/);
    // toLocaleLowerCase converit les caractères de la chaîne saisie
    const command = args.shift().toLocaleLowerCase();
    // Vérification de la saisie de l'utilisateur
    // Si la commande n'existe pas ou vient du bot alors...
    if(!bot.commands.has(command) || msg.author.bot) {
        // Si le message saisi contient bien le prefix et n'est pas du bot alors...
        if(msg.content.startsWith(prefix) && !msg.author.bot) { 
            msg.reply("Commande inconnue");
    }
    return;
    }
    // Si la commande saisie existe et ne provient pas du bot : try
    try {
        // Return sur la console pour savoir quelle commande est saisie
        console.info(`Commande saisie: ${command}`);
        // Execution de la commande avec msg et args en paramètres
        bot.commands.get(command).execute(msg,args);
    // Catch d'une erreur critique
    // Si vous avez ce message dans votre console lors de vos test
    // Lisez la attentivement, vous avez très probablement une erreur liée à votre code
    } catch(error) {
        console.error(error);
        msg.channel.send(`Erreur critique lors de la tentative d'excécution de la commande`);
    }
});
