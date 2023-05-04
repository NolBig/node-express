// Fichier temporaire, il remplace notre base de données.

let movies = [
    {
        id: 1,
        title: "Le roi lion",
        synopsis: "Un film avec un lion"
    },
    {
        id: 2,
        title: "Le seigneur des anneaux : les deux tours",
        synopsis: "Un film avec des personnes de petites tailles"
    },
    {
        id: 3,
        title: "Star Wars",
        synopsis: "Un film avec des sabres lasers"
    }
];

module.exports = movies;
// module.exports permet d'exporter des données avec la version CommonJS de node (ancienne version).
// Vous pouvez exporter des tableaux, objets, fonctions.
