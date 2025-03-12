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




const questions = [
    {
        question: "Qui est le père de Thor ?",
        reponse: [
            { text: "Odin", correct: true },
            { text: "Loki", correct: false },
            { text: "Zeus", correct: false }
        ]
    },
    {
        question: "Quel est le véritable nom d'Iron Man ?",
        reponse: [
            { text: "Tony Stark", correct: true },
            { text: "Steve Rogers", correct: false },
            { text: "Bruce Wayne", correct: false }
        ]
    },
    {
        question: "Dans quel film Spider-Man rencontre-t-il Iron Man pour la première fois ?",
        reponse: [
            { text: "Captain America: Civil War", correct: true },
            { text: "Avengers: Age of Ultron", correct: false },
            { text: "Spider-Man: Homecoming", correct: false }
        ]
    },
    {
        question: "Quel est le nom de l'alter ego de Hulk ?",
        reponse: [
            { text: "Bruce Banner", correct: true },
            { text: "Clint Barton", correct: false },
            { text: "Stephen Strange", correct: false }
        ]
    },
    {
        question: "Quel est le nom de l'organisation qui veut contrôler le monde dans Captain America: The Winter Soldier ?",
        reponse: [
            { text: "HYDRA", correct: true },
            { text: "S.H.I.E.L.D.", correct: false },
            { text: "L'Ordre Noir", correct: false }
        ]
    },
    {
        question: "Qui est le méchant principal dans Avengers: Infinity War ?",
        reponse: [
            { text: "Thanos", correct: true },
            { text: "Ultron", correct: false },
            { text: "Red Skull", correct: false }
        ]
    },
    {
        question: "Quel est le nom de l'arme utilisée par Captain America ?",
        reponse: [
            { text: "Le bouclier", correct: true },
            { text: "Mjolnir", correct: false },
            { text: "L'arc", correct: false }
        ]
    },
    {
        question: "Qui est l'antagoniste principal dans Black Panther ?",
        reponse: [
            { text: "Killmonger", correct: true },
            { text: "M'Baku", correct: false },
            { text: "Ulysses Klaue", correct: false }
        ]
    },
    {
        question: "Quel est le nom de l'arme de Thor, qui peut invoquer des éclairs ?",
        repnse: [
            { text: "Mjolnir", correct: true },
            { text: "Stormbreaker", correct: false },
            { text: "Gungnir", correct: false }
        ]
    },
    {
        question: "Comment se nomme la race des êtres cosmiques responsables de la création des Éternels ?",
        reponse: [
            { text: "Les Célestes", correct: true },
            { text: "Les Skrulls", correct: false },
            { text: "Les Krees", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.innerText = score;
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        selectedButton.classList.add("correct");
        score++;
        scoreElement.innerText = score;
    } else {
        selectedButton.classList.add("wrong");
    }
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert(`Quiz terminé ! Votre score : ${score}/${questions.length}`);
        startQuiz();
    }
});

startQuiz();
