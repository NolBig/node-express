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


