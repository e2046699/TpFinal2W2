/*////////////////////////////////////////////////////////////////////////////////////////////
                            LES QUESTIONS DU QUIZ
    Banque de questions dans une "structure de données" JavaScript : le tableau contient
    une collection de questions, et chaque question à trouver est un objet JavaScript
    qui contient TROIS valeurs : la chaîne du titre de la question, un tableau (Array) pour les
    choix de réponse et un nombre indiquant l'index de la bonne réponse...
///////////////////////////////////////////////////////////////////////////////////////////////*/

let lesQuestions = [
    {
        titre: "Question 1 - Quelle est la planète la plus proche du Soleil ??",
        choix: ["Mars", "Jupiter", "Mercure", "Uranus"],
        bonneReponse: 2,
    },
    {
        titre: "Question 2 - Quelle est la plus grande planète du système solaire ?",
        choix: ["Terre", "Venus", "Jupiter", "Saturne"],
        bonneReponse: 2,
    },
    {
        titre: "Question 3 - Qu'est-ce qu'une étoile ?",
        choix: ["Un satellite naturel tournant autour d'une planète","Une roche spatiale en orbite autour du Soleil" , "Un corps céleste composé de gaz produisant de la lumière et de la chaleur"," Un vaisseau spatial utilisé pour explorer l'espace"],
        bonneReponse: 2,
    },
    {
        titre: "Question 4 - Qu'est-ce qu'une galaxie ?",
        choix: ["Une planète habitable avec une atmosphère", "Un groupe d'étoiles, de poussière et de gaz maintenus ensemble par la gravité", "Un trou noir de petite taille", "Une comète en orbite autour du Soleil"],
        bonneReponse: 1,
    },
    {
        titre: "Question 5 - Qu'est-ce que la Voie lactée ?",
        choix: ["Une constellation visible dans l'hémisphère nord", "Une galaxie dans laquelle se trouve notre système solaire", "Une comète célèbre pour sa queue lumineuse","Un groupe d'astéroïdes en orbite autour du Soleil"],
        bonneReponse: 1,
    },
    {
        titre: "Question 6 - Qu'est-ce que la gravité ?",
        choix: ["Une force qui pousse les objets à s'éloigner les uns des autres", "Une force qui attire les objets vers le centre de la Terre", " Une force qui repousse les objets dans l'espace","Une force qui maintient les objets en suspension dans l'air"],
        bonneReponse: 1,
    },
    {
        titre: "Question 7 - Quelle est la plus grande lune de Jupiter ?",
        choix: ["Io"," Callisto","Ganymède","Europe"],
        bonneReponse: 2,
    },
    {
        titre: "Question 8 - Qu'est-ce qu'une comète ?",
        choix: ["Un astéroïde en orbite autour du Soleil"," Une planète naine située au-delà de Neptune","Un petit corps céleste composé de glace, de poussière et de roche","Une étoile en fin de vie"],
        bonneReponse: 2,
    },
    {
        titre: "Question 9 - Qu'est-ce qu'une supernova ?",
        choix: ["Une planète orbitant autour de deux étoiles","Une étoile qui explose","Une lune de Saturne","Un astéroïde en collision avec la Terre"],
        bonneReponse: 2,
    },
    {
        titre: "Question 10 - Qu'est-ce que la Station spatiale internationale (ISS)?",
        choix: ["Une station de recherche scientifique ","Un télescope spatial utilisé pour observer les étoiles","Un engin spatial envoyé pour explorer Mars","Une station spatiale habitée où des astronautes de différentes nations mènent des expériences scientifiques"],
        bonneReponse: 3,
    },
    
];
