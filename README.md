# OUTDATED. CE PROJET NE FONCTIONNE PLUS AVEC LES NOUVELLES MAJ DE DISCORD.JS - JE FAIS AU PLUS VITE POUR CORRIGER
# Discord bot template avec discord.js

Ce projet est un template pour la création d'un mini bot sur discord avec le plugin discord.js

## Préparation

Avant toute chose il vous faut un éditeur de texte, je vous conseille **[VScode](https://code.visualstudio.com/)**, mais vous pouvez bien évidemment en utiliser un autre tel que **[Sublime Texte](https://www.sublimetext.com/)**, **[IntelliJ IDEA](https://www.jetbrains.com/idea/)**, **[WebStorm](https://www.jetbrains.com/webstorm/)**, **[Atom](https://atom.io/)**... 

Une fois votre editeur de texte prêt, il faut **[NodeJS](https://nodejs.org/en/)**, je vous recommande la version LTS.

Il vous faut créer votre bot via le portail **[Discord Developper](https://discord.com/developers/applications)**. Il faut créer une application, se rendre dans l'onglet "Bot", ajouter un bot. Le nom et l'image importe peu.

Il faut maintenant se rendre dans l'onglet **OAuth2**, cocher la case "bot" et se rendre sur le lien qui a été générer. Vous pouvez désormais ajouter le bot sur un serveur où vous êtes admin.

## Installation

Une fois votre IDE et NodeJS prêt, il faut installer les dépendances qui sont liés au projet, c'est-à-dire les plugins nécessaire à son fonctionnement. Elles sont stockées dans le fichier `package.json` et sont les suivantes :
```js
  "dependencies": {
    "discord.js": "^12.3.1",
    "dotenv": "^8.2.0"
  }
```

Pour pouvoir installer ces dépendances, lancer le logiciel **Node.Js Command Prompt**, il faut parcourir les dossiers de votre ordinateur pour atteindre l'emplacement du dossier template.

```bat
cd Desktop/discord-bot-template
```
Lorsque vous êtes dans le dossier du template, il est temps d'installer les dépendances **discord.js** et **dotenv**
```nodejs
npm i discord.js
npm i dotenv
```
Ou tout simplement sans préciser les dépendances puisqu'elles sont existantes dans le `config.json`
```nodejs
npm i
```


## Configuration
Il est important ce créer à la racine du projet un fichier en le nommant `.env` qui contient le token de votre bot et le prefix que vous souhaitez utiliser. 

Le token est récupérable dans le panel de votre bot.
```js
TOKEN=...
PREFIX=!!!
```

Si vous souhaitez créer une nouvelle commande, il faut créer un fichier `nomcommande.js`dans le dossier `commands` et modifier le fichier `index.js`dans le même dossier pour ajouter la commandes à la collection.

L'exemple suivant avec une commande qui permet d'envoyer un message privé à l'utilisateur :

fichier `mpmoi.js`
```js
const PREFIX = process.env.PREFIX;
module.exports = {
    name: `${PREFIX}mpmoi`,
    description: "Ceci est une commande exemple qui mp l'utilisateur",
    execute(msg, args) {
        msg.author.send("Je suis un bot très performant, je sais mp les utilisateurs !");
    }
}
```
fichier `commands/index.js`
```js
module.exports = {
    Exemple: require('./exemple'),
    Mpmoi: require('./mpmoi'),
}
```

## Utilisation
Pour démarrer le bot, il faut être dans le répertoire du projet avec le logiciel **Node.Js Command Prompt** ou avec **VSCode** ouvrir un nouveau terminal et saisir la commande
```node
node .
```
Cette commande, si le bot est correctement configurer devrait donner comme resultat
```bat
Connexion réussie avec NomDuBot#TagDuBot!
```
Vous aurez dans ce terminal le reporting de tous les évènements qui seront rencontrés par le bot, qui sont définis dans le fichier `index.js`
- ready
- error
- reconnecting
- disconnect
- message


Pour éteindre le bot il faut faire le raccourci clavier `CTRL+C` dans le terminal

## Documentation
**[Discord.js](https://discord.js.org/#/docs/main/stable/general/welcome)** - Plugin qui permet d'utiliser l'API Discord

**[Node.JS](https://nodejs.org/dist/latest-v12.x/docs/api/)** - Plateforme logicielle libre en JS orientée vers les applications réseau événementielles

**[dotenv](https://www.npmjs.com/package/dotenv)** - Environnement séparé du code et basé sur la méthode de l'application Twelve-factors

**[VSCode](https://code.visualstudio.com/docs)** - IDE


## Credits
@ThomSmart


## License
Copyright (c) 2020 ThomSmart

[MIT](https://choosealicense.com/licenses/mit/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
