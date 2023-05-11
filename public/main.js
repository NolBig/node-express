// main.js est le script de lancement de notre serveur.
const express = require('express');

const apiRoutes = require('../routes/api.js');
// On inclut apiRoutes qui fait référence à notre router contenant l'ensemble des routes du fichier api.js
const cors = require('cors');

const server = express(); 

server.use(cors()); // On accepte toutes les origines de requête sur notre serveur.
// /!\ Le fait d'accepter toutes les origines de requête peut être risquée.

server.use(express.json());

server.use(express.urlencoded({extended: true}));

server.use('/', apiRoutes);
// .use() permet de mettre en place des middlewares. Des instructions qui sont executées avant ou après l'utilisation des routes.
// Ici, on met en place le router sur l'url racine. Désormais les routes seront accessibles grâce à notre router.
// L'exemple ci-dessus est un exemple typique de la mise en place de route sur un serveur express via un router.

const port = 3300;

server.get('/', (req, res)=>{
    res.send('Bienvenue sur notre premier serveur');
});

server.listen(port, () => {
    console.log('Server is ready on port 3300');
});





