/*
node -v : permet de connaitre la version de node installée

node <nom du script> : permet d'executer un script 

NPM (Node packet manager) : gestionnaire de paquet de dépendances de Node. Il permet d'installer des paquets de dépendances
Paquet de dépendances : un ensemble de fichiers. Lorsqu'on installe une bibliothèque, un framework (react, angular...), on va dépendre des fichiers de cette technologie, on parle alors de dépendance. 
Exemple : je veux utiliser $() de jQuery, je dépend des fichiers sources de jQuery 

npm init : initialiser un projet.
    - package name : nom du paquet (projet) que l'on créé 
    - version : version du projet, si on la change, les autres développeurs pourront être avertis d'une mise à jour
    - description
    - entry point : fichier de départ de mon projet (point d'entrée)
    - test command : commande de test
    - git repository
    - keywords : mot-clés de recherche du projet 
    - author
    - license : 

npm init -y : permet d'initialiser un projet sans avoir à remplir chaque champs

package.json : fichier qui récapitule les informations générales de notre projet.
(json : JavaScript Object Notation)
Dans le fichier, on retrouvera l'ensemble des dépendances installées et leur version.


npm install <package name>
npm i <package name>: les deux commandes permettent l'installation d'un paquet de dépendances

Trois possibilités pour installer une technologie javascript : 
- télécharger la technologie via une archive zip
- CDN (content delivery network) : on met en place un lien distant qui mène à un serveur distant contenant le ou les fichiers
- lorsqu'il la technologie est disponible sur npm, on peut l'installer via la commande npm install.

Lorsqu'on installe un paquet de dépendances, le dossier node_modules est généré automatiquement.
Ce dossier contient l'ensemble des paquets de dépendances, si je le supprime, mon projet ne fonctionne plus à partir du moment où j'ai inclus des dépendances.

Si jamais, on supprime node_modules, il suffit de saisir la commande : npm install 
Pour reinstaller toutes les dépendances.

package-lock.json : il contient des informations supplémentaires sur notre projet mais aussi sur les dépendances installées (par exemple : la version précise, chemin d'installation)


Pour pouvoir désinstaller un paquet de dépendances : 
npm uninstall <package name> 
npm un <package name>
Il vaut mieux utiliser la commande pour pouvoir supprimer les paquets de dépendances et les retirer des fichiers .json (package)

npm help : permet de connaitre les commandes du gestionnaire

npm version : permet d'obtenir la liste des versions pour l'installation de node.

npm update <package name> : mettre à jour un paquet de dépendances


Les modules dans Node.js : 

Le module "http" de node : ce module propose un ensemble de fonctions utilisables pour mettre en place un serveur web.
Un module est un ensemble de fonctionnalités proposées par une technologie. Ils sont conçus à partir des fichiers de dépendances.

Trois grand types de modules dans node : 
- Locals modules : modules que nous nous allons créé.
- Cores modules : modules qui appartiennent nativement à Node.Js (ex : http, child_process, fs, os...), pas besoin de les installer
- Third Party modules (modules tiers) : modules qui ont été développé par la commaunuté (exemple : jquery, react...).

Lorsque l'on va vouloir utiliser un module, il faudra l'importer.


Pour créer un serveur HTTP avec Node, on a plusieurs possibilités : 
- Le module http de node.js 
- L'utilisation d'un framework type express 

npm install avec l'option --save permet de spécifier la dépendance dans la fichier package.json, mais si on ne la précise, cela sera fait automatiquement : 
// Node 15.0.0

--no-save : permet de ne pas spécifier le paquet de dépendance dans le fichier package.json

npm install --global : permet d'installer des dépendances globalement (elles seront installées dans les dossiers de node). On pourra donc les réutiliser sur tous nos projets
(ou -g)



Pour éviter de devoir fermer et rouvrir notre serveur à chaque changement dans les fichiers sources, on va pouvoir installer nodemon.

npm install --save-dev nodemon

l'option --save-dev permet de spécifier nodemon comme une dépendance de développement

Dans package.json, on a ajouté la ligne suivante dans l'object "scripts" : 

"start": "nodemon main.js"

Elle nous permet d'utiliser la commande npm start qui va automatiquement ouvrir le serveur avec nodemon. Nous n'aurons plus à le couper à chaque sauvegarde







Postman est un logiciel qui va nous servir à tester nos routes de l'API. En effet, on a pas toujours de front-end pour tester une API, il existe donc ces logiciels.

Pour envoyer des données avec une requêtes POST, on va le faire dans l'onglet body de la requête.

- form-data : permet d'envoyer des fichiers et des données comme pour un formulaire HTML
- x-www-form-urlencoded : permet d'envoyer des données comme un formulaire HTML (sans fichier)
- raw : permet d'écrire les données à la main
- binary : permet d'envoyer un fichier seul

*/

<form action="" enctype="multipart/form-data">

    <input type="text" name="title" id="" />

</form>



