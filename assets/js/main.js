// // question (ortographe a verifier)
// let Questions = [
//     "Qui est le père de Thor ?",
//     "Quel est le véritable nom de l'Iron Man ?",
//     "Dans quel film Spider-Man rencontre-t-il Iron Man pour la première fois ?",
//     "Quel est le nom de l'alter ego de Hulk ?",
//     "Quel est le nom de l'Organisation qui veut contrôler le monde dans le film Captain America: The Winter Soldier ?",
//     "Qui est le méchant principal dans le film Avengers: Infinity War ?",
//     "Quel est le nom de l'arme utilisée par Captain America ?",
//     "Qui est l'antagoniste principal dans 'Black Panther' ?",
//     "Quel est le nom de l'arme de Thor, qui peut invoquer des éclairs et est aussi un symbole de son pouvoir ?",
//     "Comment se nomme la race des êtres cosmiques responsables de la création des Eternals ?"
// ];
// // les reponse (ortographe a verifier)
// let reponses = [
//     "odin", 
//     "tony stark", 
//     "captain america civil war", 
//     "bruce banner", 
//     "hydra", 
//     "thanos", 
//     "le bouclier", 
//     "killmonger", 
//     "mjolnir", 
//     "les celeste"
// ];




let questions = [
    { question: "Qui est le père de Thor ?", reponse: ["Odin", "Loki", "Zeus"], correct: 0 },
    { question: "Quel est le véritable nom d'Iron Man ?", reponse: ["Tony Stark", "Steve Rogers", "Bruce Wayne"], correct: 0 },
    { question: "Dans quel film Spider-Man rencontre-t-il Iron Man ?", reponse: ["Captain America: Civil War", "Avengers: Age of Ultron", "Spider-Man: Homecoming"], correct: 0 },
    { question: "Quel est l'alter ego de Hulk ?", reponse: ["Bruce Banner", "Clint Barton", "Stephen Strange"], correct: 0 },
];

let q = 0;
let score = 0;
let questionElement = document.getElementById("question");
let reponseButtonsElement = document.getElementById("reponse-buttons");
let scoreElement = document.getElementById("score");

function loadQuestion() {
    questionElement.innerText = questions[q].question;
    reponseButtonsElement.innerHTML = ""; // Réinitialise les boutons à chaque question

    let reponses = questions[q].reponse;
    for (let i = 0; i < reponses.length; i++) {
        let btn = document.createElement("button");
        btn.innerText = reponses[i];
        btn.classList.add("btn");
        btn.onclick = function () {
            if (i === questions[q].correct) {
                score++;
            }
            q++; // Passe à la question suivante

            // Vérifie si on a encore des questions
            if (q < questions.length) {
                loadQuestion(); // Charge la question suivante
            } else {
                alert("Quiz fini ! Score : " + score + "/" + questions.length);
            }
            scoreElement.innerText = score;
        };
        reponseButtonsElement.appendChild(btn);
    }
}

loadQuestion(); // Appelle cette fonction pour charger la première question
