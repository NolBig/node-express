/*
- Créer un nouveau projet pour cet entraînement :
    - Créer un nouveau dossier
    - npm init 

- Installer Express et Nodemon : 
    - npm install express
    - npm install --save-dev nodemon : 
            - dans le fichier package.json, il faut rajouter le script suivant : "start": "nodemon main.js"

- Créer votre serveur et mettre en place la méthode .listen() pour écouter le port : 
    - inclure le module express : const express = require('express')
    - initialiser le serveur : const server = express();
    - on déclare le port : const port = 3300;
    - d'écouter la connexion sur le port : server.listen(port, ()=>{});

- Route de sélection de données : 
    - server.get('/events', (req, res) => { res.json(events) });

- Route d'insertion de données : 
    - server.post('/events', (req, res) => { req.body });
        - Pour pouvoir récupérer correctement les données dans req.body, il faut mettre en place deux middlewares
            - server.use(express.json()); Permet de récupérer les données au format JSON
            - server.use(express.urlencoded()); Permet de récupérer les données provenant de formulaire HTML

*/