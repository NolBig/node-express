const { MongoClient, ServerApiVersion } = require('mongodb');
// On inclue la bibliothèque de mongodb

const uri = "mongodb+srv://root:root@cluster0.nydk73p.mongodb.net/?retryWrites=true&w=majority";
// L'uri de connexion à votre base de données contenant votre mot de passe et votre username, ainsi que le nom du cluster
// /!\ surtout ne mettez pas root en mot de passe d'une base de données en production


const client = new MongoClient(uri, { 
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
// L'initialisation du client mongoDB pour pouvoir se connecter à la base de données par la suite.
// On a la version de l'API
// Strict permet de spécifier les erreurs en mode strict
// deprecationErrors permet de connaitre les éléments dépréciés.


async function run() {
  try {


    await client.connect();
    // On se connecte à mongoDB.

    await client.db("admin").command({ ping: 1 });
    // On se connecte la base de données admin et retourne la commande ping pour tester la connexion.
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {

    await client.close();
    // On ferme le client
  }

}

run().catch(console.dir);


/*

try {
    await client.connect();
} catch(error) {
    throw error
}

Le try va tester le code qui se trouve dans son bloc. Si le code génère une erreur, le catch la capture et nous permet d'intéragir avec.

Le finally va executer du code, une fois que le try aura fini d'executer son code.
*/

/*
await permet de forcer une fonction asynchrone à s'executer de manière synchrone.

*/

/*

Promise (promesse) : une promesse représente une valeur qui peut être disponible maintenant, plus tard, voire jamais, c'est utilisé le traitement de code asynchrone.

Promise est une classe de JavaScript

Déclaration de la promesse :

let promise = new Promise((resolve, reject)=>{

    resolve(result);

    reject(error);

});

resolve permet de retourner le résultat en cas de réussite.
reject permet de retourner une erreur s'il y en a une.

Utilisation de la promesse : 

promise.then().catch();

.then((response)=>{ ... }) permet de récupérer le résultat du resolve.
.catch() permet de récupérer l'erreur du reject.

*/

// let promise = new Promise((resolve, reject)=>{

//     let result = "test";

//     resolve(result);

//     let error = "test";

//     reject(error);

// });

// console.log(promise.then(response => response));