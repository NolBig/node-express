const run = require('../libs/database.js');
const ObjectId = require('mongodb').ObjectId;

class GamesController {

    constructor(){

        run().then(
            (db)=>{

            this.db = db;
 
        });

    }


    async getGames(req, res){

        const games = await this.db.collection('games').find({}).toArray();

        res.json(games);

    }

    async getGameById(req, res){

        // req.params : permet de récupérer les données passées dans l'url de la requête.
        
        const id = new ObjectId(req.params.id);
        
        const game = await this.db.collection('games').find({_id: {$eq: id}}).toArray();
        // $eq = equal (égal)

        res.json(game);
    }

    
    async getGameByScore(req, res){

        
        const game = await this.db.collection('games').find({score: {$gt: 50}}).toArray();


        res.json(game);
    }

    async getGameByRank(req, res){

        const game = await this.db.collection('games').find({
            $and: [
                {position: {$exists: true}}
            ]
        }).toArray();

        res.json(game);
    }


}

module.exports = GamesController;