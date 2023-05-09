const movies = require('../../movies.js');
const run = require('../libs/database.js');
const ObjectId = require('mongodb').ObjectId;
// La classe ObjectId permet de convertir un string en ObjectId
// On ne peut passer directement une chaine de caractère en tant qu'id dans une sélection




class MoviesController {
// class : ES6
// MoviesController : le fichier qui gère toutes les interactions de données de nos films.

    constructor(){
        // Le constructor execute du code au moment où on instancie la classe (quand on utilise la classe).
        run().then(
            (db)=>{

            this.db = db;
            // this représente le contexte de l'objet, c'est à dire, si j'instancie deux fois ma classe. this représentera chaque objet individuellement.
            // console.log(db);
            // on stocke la base de données, dans une variable nommée db qui appartient à la classe.
        });

    }

    async getMovies(req, res){

        // La même requête en SQL : SELECT * FROM movies
        const movies = await this.db.collection('movies').find({}).toArray();
        // La fonction find() est la fonction qui permet de récupérer des données provenant de la base de données.
        // Lorsque l'on veut récupérer plusieurs documents, on utilisera la fonction toArray() qui retourne un tableau de documents.

        // on utilise await pour la fonction de mongoDB, car elle est asynchrone, le problème c'est que sans le await, le code continue de s'executer et la réponse est retournée avant même qu'on est eu le temps de récupérer les films.
        
        res.json(movies);
    }

    async getMovieById(req, res){

        const id = new ObjectId(req.params.id);

        // Equivalent en SQL : SELECT * FROM movies WHERE _id = id;
        const movie = await this.db.collection('movies').find({ 
            _id: {
                $eq: id
            } 
        }).toArray();

        res.json(movie);

    }

    async insertMovie(req, res){

        const { title, synopsis } = req.body;

        const result = await this.db.collection('movies').insertOne({title: title, synopsis: synopsis});
        
        res.json({message: "Film ajouté avec succès", error: false});

    }

    updateMovie(req, res){
        let id = req.params.id;

        const {title, synopsis} = req.body;
    
        let index = movies.findIndex((movie) => movie.id === parseInt(id));
    
        movies[index].title = title;
        movies[index].synopsis = synopsis;
    
        res.json({message: "Film modifié avec succès", error: false});
    }

    deleteMovie(req, res){

        let id = req.params.id;

        let index = movies.findIndex((movie)=>{return movie.id == id});

        movies.splice(index, 1);
 
        res.json({message: "Film supprimé avec succès", error: false});
    }

}

module.exports = MoviesController;
// On exporte notre controller /!\/!\/!\/!\/!\/!\/!\/!\/!\/!\/!\






/*
Opérateurs de comparaison avec MongoDB : 

$eq (equal) : égalité =
$ne (not equal) : non égal !=
$gt (greater than) : supérieur à > 
$gte (greater than and equal) : supérieur ou égal à  >=
$lt (lower than) : inférieur à < 
$lte (lower than equal) : inférieur ou égal à <=
$nin (not in) : vérifie qu'une valeur n'est pas contenue dans un tableau
$in : vérifie qu'une valeur est contenue dans un tableau

const movie = await this.db.collection('movies').find({ 
    _id: {
        $eq: id
    },
    title: {
        $eq: title
    }
}).toArray();

Opérateurs logiques : 

$and : toutes les conditions doivent être vraies
$or : une seule condition suffie pour être vraie
$nor : une seule condition doit être vraie 
$not : contraire de la condition

const movie = await this.db.colleciton('movies').find({
    $and: [
        {_id: {$eq: id}},
        {title: {$eq: title}}
    ];
});


*/