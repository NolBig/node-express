const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://root:root@cluster0.nydk73p.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { 
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    await client.connect();
    // On se connecte à mongoDB.

    const db = client.db("mongodb_node");
    // On se connecte à notre base de données et on stock la connexion dans une constante.
    // On aura besoin de la constante pour effectuer les requêtes par la suite.
    
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    return db;

  } catch(error) {
    console.log(error);
  }
  // On retourne l'erreur si le try en produit une.

}

module.exports = run;

// On exporte la fonction et non pas la const db parce que sinon l'import ne contiendra rien.
// Explication : la fonction run est asynchrone, son execution sera fait après les imports.

// .then() permet de récupérer le résultat de la promesse et donc ici la valeur de retour de la fonction run().



