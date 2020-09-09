// Récupération du prefix avec une constante
const PREFIX = process.env.PREFIX;

// Exports d'un module
// Je vous conseille d'aller voir la doc si vous voulez en apprendre d'avantage sur les modules
module.exports = {
    name: `${PREFIX}exemple`,
    description: 'Ceci est une commande exemple',
    execute(msg, args) {
        // msg.reply permet de répondre à l'utilisateur avec un ping @      
        msg.reply("Mais... C'est une commande exemple que tu as saisi là !");
        // msg.channel.send permet de récupérer le channel où la commande a été saisie et d'envoyer un message dans ce channel
        msg.channel.send("Tu as donc saisi la commande: " + msg.content);
        if(args != null)
        {
            msg.channel.send("Avec comme argument: " + args);
        }
    }
}