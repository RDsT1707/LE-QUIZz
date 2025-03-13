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



let Questions = [
    { question: "Qui est le père de Thor ?", reponse: ["Loki", "Zeus", "Odin"], correct: 2 },
    { question: "Quel est le véritable nom de l'Iron Man ?", reponse: ["Bruce Banner", "Tony Stark", "Steve Rogers"], correct: 1 },
    { question: "Dans quel film Spider-Man rencontre-t-il Iron Man pour la première fois ?", reponse: ["Spider-Man: Homecoming", "Avengers: Endgame", "Captain America: Civil War"], correct: 2 },
    { question: "Quel est le nom de l'alter ego de Hulk ?", reponse: ["Bruce Banner", "Tony Stark", "Peter Parker"], correct: 0 },
    { question: "Quel est le nom de l'Organisation qui veut contrôler le monde dans le film Captain America: The Winter Soldier ?", reponse: ["A.I.M.", "S.H.I.E.L.D.", "Hydra"], correct: 2 },
    { question: "Qui est le méchant principal dans le film Avengers: Infinity War ?", reponse: ["Loki", "Thanos", "Ultron"], correct: 1 },
    { question: "Quel est le nom de l'arme utilisée par Captain America ?", reponse: ["Mjolnir", "L'épée de Valkyrie", "Le bouclier"], correct: 2 },
    { question: "Qui est l'antagoniste principal dans 'Black Panther' ?", reponse: ["Loki", "Killmonger", "Ultron"], correct: 1 },
    { question: "Quel est le nom de l'arme de Thor, qui peut invoquer des éclairs et est aussi un symbole de son pouvoir ?", reponse: ["Stormbreaker", "Mjolnir", "Gungnir"], correct: 1 },
    { question: "Comment se nomme la race des êtres cosmiques responsables de la création des Eternals ?", reponse: ["Les Skrulls", "Les Asgardiens", "Les Célestes"], correct: 2 }
];

let prenom = prompt("Quel est votre prénom ?");
document.getElementById("prenom").innerHTML = "Bonjour " + prenom;   //indique le prenom du joueur

// let q = 0;
let question = 0;
let score = 0;
let LesQuestions = document.getElementById("question");
let reponseButtons = document.getElementById("reponse-buttons");
let scoreFinal = document.getElementById("score")

LesQuestions.innerText = Questions[q].question;
reponseButtons.innerHTML = "";

let reponses = Questions[q].reponse;        //   indique mon tableaux avec les reponse

for (let i = 0; i < reponses.length; i++) {
    let btn = document.createElement("button");
    btn.innerText = reponses[i];
    btn.classList.add("btn");
    reponseButtons.appendChild(btn);
    btn.addEventListener("click", function() {
        if (i === Questions[q].correct) {   // Si la réponse est correcte, augmenter le score
            score++; 
        } q++; 
        if (q < Questions.length) {  // Si il y a encore des questions, passer à la question suivante
            LesQuestions.innerText = Questions[q].question;
            reponseButtons.innerHTML = "";
            let nextReponses = Questions[q].reponse;
            for (let i = 0; i < nextReponses.length; i++) {
                let nextBtn = document.createElement("button");
                nextBtn.innerText = nextReponses[i];
                nextBtn.classList.add("btn");
                reponseButtons.appendChild(nextBtn);
            }
        } else {
            alert("Quiz fini ! Score : " + score + "/" + Questions.length); 
            scoreFinal.innerText = score;  //le score (a verifier)
        }
    });
}

