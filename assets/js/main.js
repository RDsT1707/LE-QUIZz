// question (ortographe a verifier)
let Questions = [
    "Qui est le père de Thor ?",
    "Quel est le véritable nom de l'Iron Man ?",
    "Dans quel film Spider-Man rencontre-t-il Iron Man pour la première fois ?",
    "Quel est le nom de l'alter ego de Hulk ?",
    "Quel est le nom de l'Organisation qui veut contrôler le monde dans le film Captain America: The Winter Soldier ?",
    "Qui est le méchant principal dans le film Avengers: Infinity War ?",
    "Quel est le nom de l'arme utilisée par Captain America ?",
    "Qui est l'antagoniste principal dans 'Black Panther' ?",
    "Quel est le nom de l'arme de Thor, qui peut invoquer des éclairs et est aussi un symbole de son pouvoir ?",
    "Comment se nomme la race des êtres cosmiques responsables de la création des Eternals ?"
];
// les reponse (ortographe a verifier)
let reponses = [
    "odin", 
    "tony stark", 
    "captain america civil war", 
    "bruce banner", 
    "hydra", 
    "thanos", 
    "le bouclier", 
    "killmonger", 
    "mjolnir", 
    "les celeste"
];


// Compte des points
let score = 0;

// qstn reponse test v1.4

for (let i = 0; i < Questions.length; i++) {
    let reponse = prompt(Questions[i]);             // permet dafficher les questions une par une en prompt(affichage style pup) et de rentrer une reponse


    if (reponse === reponses[i]) {
        console.log("Bonne réponse !");               //dans cette boucle j'ai demander que a chaque bonne réponse la console affiche bonne reponse ce qui ferait un point en plus
        score++;  

    } else {
        console.log("Mauvaise réponse !");            // fin de boucle mauvaise reponse on ne fait rien a part l'afficher dans la console 
    }
}

//score final test
console.log("Ton score est : " + score + " sur " + mesQuestions.length);  // pour voir son score a la fin 