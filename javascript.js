// Fichier JavaScript : éléments en lien avec le javascript natif

// affection par destructuration (destructuring)
// ES6 (ES2015)

let movie = {
    title: "Star Wars",
    synopsis: "Un film",
    release: 1970
}

const {title, synopsis, release } = movie;

let music = [
    "une musique",
    1970
];

const [ titleBis, releaseBis ] = music;

let number = [
    1,
    2,
    3,
    4,
    5
];

const [a, b, ...rest] = number;
// la constante rest peut se nommer comme on le veut.
// Les trois points sont obligatoires pour affecter le reste.

console.log(a, b, rest);

