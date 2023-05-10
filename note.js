/*

Node.js : environnement d'execution de JavaScript
Express.js : framework qui permet de créer des serveurs HTTP (exemple : API Rest...)
    - Nodemon : qui permet de raffraichir le serveur à chaque sauvegarde de fichier.

/!\ Express est une technologie basée sur Node.Js


Postman : outil qui permet d'effectuer pas mal de test sur les serveurs, dans notre cas, il permet de tester notre API REST le temps que l'on développe la partie front-end.

MongoDB : base de données NoSQL.



Aborescence du dossier de notre projet : 

- /app
    - /controllers 
        - MoviesController.js : contient les fonctions qui nous permettent d'intéragir avec la base de données.
                Exemple : Un admin veut supprimer un utilisateur, il doit le faire en base de données -> on créé une fonction dans le fichier permettant cette suppression
    - /libs 
        - database.js : qui créé la connexion avec la base de données. 
- /public
    main.js : ce fichier contient l'initialisation de notre serveur. Le fichier de lancement de notre serveur. Lorsqu'on utilise npm start, c'est ce fichier qui est executé

- /routes
    api.js : ce fichier permet la déclaration de nos routes.


NoSQL pour les bases de données orientées document (MongoDB, Firestore...) 

- collection : équivalent NoSQL d'une table. On va stocker des données spécifiques à l'intérieur, par exemple, j'ai une collection "users", je stocke dedans mes utilisateurs.

Les collections contiennent en NoSQL des documents, les documents représentent les données.

Un document est une structure de données semi-structurées qui peut contenir des paires clés-valeurs (format JSON).


Exemple

Doc 1
{
    id: 1,
    product: clavier,
    price: 150,
    rating: 5/5
}

Doc 2
{
    id: 2,
    product: ordinateur,
    price: 1500
}


JSON : JavaScript Object Notation : un format de données.

Timestamp : nombre de secondes écoulées depuis le 1 janvier 1970.

1564567489798 - 1896748546

Type de données Javascript : 

- integer
- float
- string
- boolean
- null
- undefined

- Array
- Object
- Function


- NaN (not a number)


MongoDB propose plus types de données : 

- Date 
- ObjectId : représente les _id de nos documents, il permet de rendre unique un document.
- Int32 : stocker des nombres entiers entre (-2,147,483,648 to +2,147,483,647)
- Int64 "long" : stocker des nombres entiers entre (-9,223,372,036,854,775,808 to +9,223,372,036,854,775,807)
- Decimal128 : stocker les nombres décimaux. (Précision plus importante pour les chiffres après la virgule)
- Double : stocker des nombres décimaux. 
- Timestamp : permet de gérer des dates en seconde.
- Boolean : true/false
- Object : permet de stocker des objets.
- Array : permet de stocker des tableaux.
- String : permet de stocker des chaines de caractères.


- BinaryData "binData": permet de stocker des données binaires (fichiers).
- Null "null" 
- JavaScript "javascript" : permet tout simplement de stocker du code javascript.




BSON : Binary javaScript Object Notation.

*/