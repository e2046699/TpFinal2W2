/*///////////////////////////////////////////////////////////////////////
                     LES VARIABLES DU QUIZ
///////////////////////////////////////////////////////////////////////*/

//Variables du quiz
let noQuestion = 0; //Le no de la prochaine question

//La section du quiz et sa position sur l'axe des X
let laSection = document.querySelector("section");
let positionX = 100;
//Les balises pour afficher les titres des questions et les choix de
let titreQuestion = document.querySelector(".titre-question");
let lesChoixDeReponses = document.querySelector(".les-choix-de-reponse");
let historique = recupererHistorique();

/*Fonctiom pour recuperer l'historique*/
function recupererHistorique() {
    // On vérifie s'il y a un historique dans localStorage
    let historiqueChaine = localStorage.getItem("super-quiz-historique");
    // On retourne l'historique décodé en JS ou un tableau vide
    return JSON.parse(historiqueChaine) || [];
}
/*///////////////////////////////////////////////////////////////////////
                            DÉBUT DU QUIZ
///////////////////////////////////////////////////////////////////////*/

//Gérer la fin de l'animation d'intro
let titreIntro = document.querySelector(".anim-titre-intro");
//Gestionnaire d'événement pour détecter la fin de l'animation d'intro
titreIntro.addEventListener("animationend", afficherConsignePourDebuterLeJeu);

/*///////////////////////////////////////////////////////////////////////
                            LES FONCTIONS
///////////////////////////////////////////////////////////////////////*/




/**
 * Fonction pour afficher les consignes pour débuter le jeu
 *
 * @param {Event} event : objet AnimationEvent de l'événement distribué
 */
function afficherConsignePourDebuterLeJeu(event) {
    //console.log(event.animationName);
    //On affiche la consigne si c'est la fin de la deuxième animation: etirer-mot
    if (event.animationName == "etirer-mot") {
        //On affiche un message dans le pied de page
        let piedDePage = document.querySelector("footer");
        piedDePage.innerHTML = "<h1>Cliquer dans l'écran pour commencer le quiz génial</h1>";

        //On met un écouteur sur la fenêtre pour enlever l'intro et commencer le quiz
        window.addEventListener("click", commencerLeQuiz);
    }
}

/**
 * Fonction pour enlever les éléments de l'intro et commencer le quiz
 *
 */
function commencerLeQuiz() {
    
    historique.push({ date: new Date().toLocaleDateString("fr-CA"), reponses: [] });

    // Modifier la valeur stockée dans localStorage
    localStorage.setItem("super-quiz-historique", JSON.stringify(historique));
    
    //On enlève le conteneur de l'intro
    let intro = document.querySelector("main.intro");
    intro.remove();

    //On enlève l'écouteur qui gère le début du quiz
    window.removeEventListener("click", commencerLeQuiz);

    //On met le conteneur du quiz visible
    document.querySelector(".quiz").style.display = "flex";

    //On affiche la première question
    afficherQuestion();
}

/**
 * Fonction permettant d'afficher chaque question
 *
 */
function afficherQuestion() {
    //Récupérer l'objet de la question en cours
    let objetQuestion = lesQuestions[noQuestion];
    //console.log(objetQuestion);

    //On affiche le titre de la question
    titreQuestion.innerText = objetQuestion.titre;

    //On crée et on affiche les balises des choix de réponse
    //Mais d'abord on enlève le contenu actuel
    lesChoixDeReponses.innerHTML = "";

    let unChoix;
    for (let i = 0; i < objetQuestion.choix.length; i++) {
        //On crée la balise et on y affecte une classe CSS
        unChoix = document.createElement("div");
        unChoix.classList.add("choix");
        //On intègre la valeur du choix de réponse
        unChoix.innerText = objetQuestion.choix[i];

        //On affecte dynamiquement l'index de chaque choix
        unChoix.indexChoix = i;

        //On met un écouteur pour vérifier la réponse choisie
        unChoix.addEventListener("mousedown", verifierReponse);

        //Enfin on affiche ce choix
        lesChoixDeReponses.append(unChoix);
    }

    //Attribuer l'animation de la question courante
    laSection.style.animation = `animation-section-${noQuestion} 1.5s ease-in forwards`;
}

/**
 * Fonction permettant de vérifier la réponse choisie et de gérer la suite
 
 * @param {object} event 
 */
function verifierReponse(event) {
    historique[historique.length - 1].reponses.push(event.target.indexChoix);
    // On sauvegarde le nouvel historique dans localStorage.
    localStorage.setItem("super-quiz-historique", JSON.stringify(historique));

    gererProchaineQuestion();
}

/**
 * Fonction pour affichage de la prochaine question
 *
 */
function gererProchaineQuestion() {
    //On incrémente le noQuestion pour la  prochaine question à afficher
    noQuestion++;

    //S'il reste une question on l'affiche, sinon c'est la fin du jeu...
    if (noQuestion < lesQuestions.length) {
        //On affiche la prochaine question
        afficherQuestion();
    } else {
        //C'est la fin du quiz
        afficherFinQuiz();
    }
}

/**
 * Fonction permettant d'afficher l'interface de la fin du jeu
 *
 */
function afficherFinQuiz() {
    //On enlève le quiz de l'affichage et on affiche la fin du jeu
      // Obtenir la dernière version sauvegardée de l'historique
      historique = recupererHistorique();
      let nombreParties = historique.length;
    document.querySelector(".quiz").style.display = "none";
    document.querySelector(".fin").style.display = "flex";
    let ecranFin = document.querySelector("body");
    ecranFin.innerHTML = `<p>Score: ${partie.reponses}</p>`;
    ecranFin.innerHTML += `<p>Meilleur score: </p>`;
    for (let partie of historique) {
        ecranFin.innerHTML += `Temps:  / <br>`;

}
}
