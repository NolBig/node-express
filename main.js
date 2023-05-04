// Le script de lancement de notre serveur
const express = require('express');
// require() permet d'inclure des modules en suivant CommonJS.
// Dès que l'on veut travailler avec un module, il faut l'intégrer (inclure)
const movies = require('./movies.js');
// /!\ Si on exporte quelque chose, on doit l'importer dans le fichier qui le demande.

const server = express(); 
// On initialise notre serveur grâce à la fonction express().
// Il s'agit d'un prototype.

server.use(express.json());
// la méthode .use() permet de mettre en place des middlewares.
// Middleware : permet d'executer du code avant ou après l'utilisation d'une route.
// Exemple : si on veut authentifier un utilisateur, on doit le faire avant que la route s'execute.
// Ce middleware permet de récupérer les données au format JSON des requêtes.
// /!\ Ne l'oubliez pas dans vos serveur sinon vous ne récupérez rien.
server.use(express.urlencoded());
// Ce middleware permet de récupérer les données passées au format x-www-form-urlencoded.

// Le format JSON c'est ce que l'on enverra avec fetch en javascript par exemple
// Le format x-www-form-urlencoded, c'est les données que l'on envoie via un formulaire HTML.

const port = 3300;
// On peut fixer différents ports (en local) cependant certaines technologies vont utiliser des ports par défaut (ex live server : 5500)
// Ce port sera défini par la suite via un fichier .env
// Le port est obligatoire pour notre serveur, puisqu'il va être écouté pour connaitre les connexions au serveur.

// Système de route : 
server.get('/', (req, res)=>{

    
    res.send('Bienvenue sur notre premier serveur');
    // res correspond à la réponse, elle propose une méthode .send() qui permet de retourner une réponse à notre client.
    // Il est obligatoire de retourner une réponse, sinon le client va attendre indéfiniement.
});
// Notre constante server possèdent les méthodes : .get(), .put(), .post(), .delete()
// Ces méthodes contiennent deux paramètres : 
// - endpoint (url)
// - callback (fonction de rappel) 

server.get('/movies', (req, res)=>{

    res.json(movies);
    // La méthode .json() permet de retourner une réponse au format json (JavaScript Object Notation).
});

server.post('/movies', (req, res) => {
    const { title, synopsis } = req.body;

    // équivalent de la ligne ci-dessus sans destructuration
    // const title = req.body.title;
    // const synopsis = req.body.synopsys;

    // req.body permet d'accèder au corps de la requête et de récupérer les données envoyées.
    // body est un objet

    let id = movies.length + 1;
    // On créé un id temporaire, la base de données mettra en place les ids automatiquement.
    
    movies.push({ // On ajoute le nouveau film à la fin du tableau
        id: id,
        title: title,
        synopsis: synopsis
    });

    res.json({message: "Film ajouté avec succès", error: false});
    // on retourne une réponse au format json.

});


server.listen(port, () => {
    console.log('Server is ready on port 3300');
});
// .listen : trigger d'évènement. On écoute le port 3300, une connexion s'ouvre dessus, le console.log est executé


// .addEventListener('click', () => {

// });


// ES6 (ES2015)




