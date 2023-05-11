const section = document.getElementById('allMovies');


// API Fetch de Javascript
// Fetch permet d'effectuer des requêtes HTTP à partir du Javascript (côté front-end)

setTimeout(()=>{

    fetch('http://localhost:3300/movies')
    .then(response => response.json()) // le premier va récupérer les données de la réponse au format JSON()
    .then(response => {
        
        response.forEach((movie)=>{

            let article = document.createElement('article');
            let title = document.createElement('h2');
            let synopsis = document.createElement('p');

            title.textContent = movie.title; // On récupère le titre de l'objet movie pour l'affecter en tant que texte à notre balise HTML.
            synopsis.textContent = movie.synopsis;

            // .append(), .prepend(), .appendChild(), .prependChild()
            // Ces quatre fonctions ont pour rôle de mettre en place une balise dans une autre balise
            // <div></div>
            // .append va ajouter les éléments à la fin de balise
            // .prepend va ajouter les éléments en début de balise

            article.append(title);
            article.append(synopsis);

            /*
                <article>
                    <h2></h2>
                    <p></p>
                </article>
            */
           section.append(article);

        });
        // Response est un tableau qui contient nos films
        // je veux boucler dessus, j'utilise le forEach



    }) // Le deuxième va nous permettre de travailler avec les données
    .catch(err => console.log(err)) // permet de retourner une erreur s'il y en a une.

}, 3000); // Permet d'executer une action après un temps donné

// /!\ On viendra remplacer le setTimeout, un peu plus tard.

document.getElementById('btnSubmit').addEventListener("click", (event)=>{
    event.preventDefault(); // evite l'envoie du formulaire et donc le raffraichissement de la page. 

    const title = document.getElementById('title').value; // On sélectionne le champ input, et on utilise la propriété value
    const synopsis = document.getElementById('synopsis').value;

    fetch("http://localhost:3300/movies", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({title: title, synopsis: synopsis})
    });
    // Par défaut, les requêtes envoyées avec fetch sont de type "GET"
    // Nous, on veut envoyer des données, donc on a besoin d'une méthode "POST", il est donc important de préciser la méthode à utiliser.

    // headers permet d'ajouter des entêtes à notre requête, ici on précise que les données sont envoyées au format JSON. Si on ne le met en place, il est possible que le serveur refuse la requête.

    // On envoie toujours les données dans le corps (body) de la requête.

    // JSON.stringify permet de convertir une valeur Javascript (tableau ou objet) au format JSON.
});





// La première ligne : fetch, va permettre d'envoyer une requête vers une url en particulier. Le premier paramètre de fetch c'est une url.


// fetch utilise le système de promise (promesse)
// les .then permettent de récupérer la réponse une fois qu'elle est arrivée. C'est à dire une fois que la requête à effectuer son travail et que le serveur a répondu correctement.






/*
Fetch c'est l'évolution d'AJAX (Asynchronous JavaScript XML)

Le « Cross-origin resource sharing » (CORS). Entête CORS dans la requête.

L'erreur "same origin" apparait par défaut pour bloquer les requêtes qui proviennent de notre localhost vers notre localhost
Exemple : 
- Live Server : localhost:5500
- Serveur express: localhost:3300 

Par défaut les deux ne pourront pas communiquer. Notre live server ne pourra pas envoyer de requête vers le serveur Express pour des raisons de sécurité.

Les entêtes CORS sont gérées côtés serveur

Pour gérer le système d'entête CORS, on va utiliser le module cors :

npm install cors

*/

/*

let testA = response.map((movie)=>{return movie}); Le .map a pour rôle de retourner un nouveau tableau avec le traitement des éléments de l'ancien tableau

let testB = response.forEach((movie)=>{return movie}); Le forEach a simplement pour rôle d'itérer sur le tableau (récupérer chaque élément du tableau pour les traiter)

console.log(testA);

console.log(testB);

*/

/*
.innerHTML


*/
// section.innerHTML;


// <div id="div">
//     <h1>test</h1>
//     <p>test</p>
// </div>

// document.getElementById('div').innerHTML = "<style>body{color: red}</style>";


