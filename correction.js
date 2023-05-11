// Afficher seulement les parties qui ont un score au dessus de 50

await this.db.collection('games').find({score: {$gt: 50}}).toArray();

// $gt (greater than) : supérieur à - >

// Afficher seulement les parties qui ont un score compris entre 20 et 40 et qui possède une date de création plus ancienne par rapport à la date courante (instant T)

// Opérateur logique : and, or, nor, not

await this.db.collection('games').find({
    $and: [
        {score: {$gt: 20}},
        {score: {$lt: 40}},
        {"date.date_created": {$lt: Date.now()}}
    ]
}).toArray();

// $lt (less than) : inférieur à - <

/*
    date.date_created permet d'accèder à la propriété date_created de l'objet date stocké dans le document.
    Date.now() me permet de récupérer le timestamp à l'instant T, à l'heure actuelle.

    Autre solution possible :
*/

await this.db.collection('games').find({
    score: {$gt: 20, $lt: 40},
    "date.date_created": {$lt: Date.now()}
}).toArray();


// Afficher seulement les parties ayant réussi les 3 premiers niveaux. 

await this.db.collection('games').find({
    levels: {$eq: "level 3"}
}).toArray();

await this.db.collection('games').find({
    levels: {$in: ['level 3', 'level 2']}
}).toArray();

// $in permet de vérifier si une valeur est contenue dans un tableau.

// Afficher seulement les parties qui n’ont pas réussi le niveau 4.

await this.db.collection('games').find({
    levels: {$ne: "level 4"}
}).toArray();

await this.db.collection('games').find({
    levels: {$nin: ['level 4', 'level 5']}
});

// $ne (not equal) : non égal.
// $nin (not in) : la valeur ne doit pas être égale à l'une des valeurs du tableau précisé

// Afficher seulement les parties qui ont au moins réussi le niveau 2 et le niveau 5

await this.db.collection('games').find({
    $and: [
        {levels: {$eq: "level 2"}},
        {levels: {$eq: "level 5"}}
    ]
}).toArray();


// Afficher seulement les parties qui ont un champs de classement existant avec un nombre d’essais inférieur à 5

await this.db.collection('games').find({
    $and: [
        {position: {$exists: true}},
        {try: {$lt: 5}}
    ]
}).toArray();

// $exists : qui permet de vérifier si un champs est existant dans un document.
// La valeur de l'opérateur $exists sera true ou false. 
// Si true : on récupère les documents qui ont le champs
// Si false: on récupère les documents qui n'ont pas le champs.


// Afficher seulement les parties où les nombres de niveau réussi sont inférieur au nombre d’essais. 

// $size : permet de récupérer des documents qui contiennent un champs tableau (array) avec un nombre d'élément précis
// find({levels: {$size: 2}})

// $elemMatch : permet d'effectuer plusieurs requêtes sur un tableau (égalités, supériorité, infériorité...)
// find({levels: {$elemMatch: {$eq: "level 5", $eq: "level 2"}}})

// $all : permet de récupérer les tableaux qui contiennent les valeurs précisées
// find({levels: {$all: ['level 5', 'level 2']}})

await this.db.collection('games').find({
    try: {$lt: {$count: levels}}
}).toArray();

// $count permet de connaitre le nombre d'élément dans un tableau.


// Modifier la deuxième partie que vous avez ajoutée.

const id = req.params.id;

await this.db.collection('games').updateOne(
    {_id: {$eq: id}}, // C'est l'équivalent du find, ça permet de filtrer les documents modifiées
    {$set: {score: 40, try: 10, time: 1234564}},
    {$unset: ["levels"]}
);
// $set ça permet d'ajouter de nouvelles informations, ça permet de modifier des valeurs déjà existantes
// Exemple : time est un champs qui n'existe pas au départ dans mon document.

// $unset permet de supprimer des champs d'un document.



// Supprimer l’une de vos parties.

await this.db.collection('games').deleteOne(
    {_id: {$eq: id}}
);

// Pour supprimer, on précise simplement le filtre entre parenthèse comme pour la fonction .find()


// Ajouter deux nouvelles parties rapidement, à l’aide de la méthode bulkWrite

await this.db.collection('games').bulkWrite([
    { insertOne: {try: 30, score: 40, pseudo: "Nolan"}},
    { insertOne: {try: 40, score: 100, pseudo: "Arthur"}},
    { updateOne: {
            "filter": {_id: {$eq: id}},
            "replacement": {try: 40}
        }
    }
]);

// bulkWrite, permet d'effectuer plusieurs requêtes en même temps.

await this.db.collection('games').insertMany([
    {try: 30, score: 40},
    {try: 5, score: 10}
]);
