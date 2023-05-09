const express = require('express');
// Ce fichier a pour rôle de récapituler les routes de mon projet.
const MoviesController = require('../app/controllers/MoviesController.js');
// On inclut le controller créé précédemment.

const MoviesInstance = new MoviesController();
// On instancie la classe MoviesController pour pouvoir l'utiliser.

const router = express.Router();
// express.Router() permet de définir un groupe de route que l'on va pouvoir exporter par la suite.
// Router() va permettre de créer une aborescence des routes que l'on va pouvoir utiliser
// On ira l'importer dans le fichier main.js

router.get('/movies', (req, res) => MoviesInstance.getMovies(req, res)); 

router.get('/movies/:id', (req, res) => MoviesInstance.getMovieById(req, res));

router.post('/movies', (req, res) => MoviesInstance.insertMovie(req, res));

router.delete('/movies/:id', (req, res) => MoviesInstance.deleteMovie(req, res));

router.patch('/movies/:id', (req, res) => MoviesInstance.updateMovie(req, res));

// Au sein du système de route, si on met en place directement les méthodes de notre classe, on ne pourra pas récupérer la requête et la réponse
// Nous allons les encapsuler dans une fonction fléchée propre à la route

module.exports = router;
// On exporte le router.