let mesQuestions = [
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

let reponsesCorrectes = [
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


// Compteur de points
let score = 0;

// qstn reponse test v1.4
for (let i = 0; i < mesQuestions.length; i++) {
    let reponse = prompt(mesQuestions[i]);

    if (reponse.toLowerCase() === reponsesCorrectes[i]) {
        console.log("Bonne réponse !");
        score++;  
    } else {
        console.log("Mauvaise réponse !");
    }
}

//score final test
console.log("Ton score est : " + score + " sur " + mesQuestions.length);