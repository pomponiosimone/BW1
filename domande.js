const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];
//creo contenitore punteggio e prendo i riferimenti dall'HTML
let punteggio = 0;
const domanda = document.getElementById("domandaRND");
const container = document.getElementById("container");
//creo funzione for per le 10 domande all'interno di "questions"
const mostraDomande = () => {
  const domanda = questions[questionIndex]; //domanda corrente preso dall'array questions con index della domandaCorrente
  domanda.innerText = domanda.question; //inserisco la domanda prendendola dalla proprietà all'interno della domanda corrente
  container.innerHTML = ""; //svuoto la domanda
  //creo dei bottoni per le risposte
  let risposte = [...domanda.incorrect_answers]; //creo una copia/contenitore delle risposte sbagliate, questo è necessario per evitare di modificare direttamente l'array incorrect_answers originale, lavorando invece su una copia.
  risposte.splice(
    Math.floor(Math.random() * (risposte.length + 1)),
    0,
    question.correct_answer
  ); //qui inserisco la risposta corretta dentro la copia del'array di risposte sbagliate creata precedentemente grazie a splice e contemporaneamente la inserisco in un indice random
  //Comincio il ciclo di domanda da mostrare nella schermata grazie a forEach
  risposte.forEach((answer) => {
    //ricordiamoci che "answers" è l'array creato con risposte errate e quela giusta mentre "answer" è solo un elemento dentro l'array questa può essere errata come sbagliata
    const button = document.createElement("div");
    button.classList.add("opzione");
    button.innerText = answer;
    container.appendChild(button);
    button.addEventListener("click", () => {
      if (risposte === questions.correct_answer) {
        punteggio++;
      }
      domanda.innerText = domanda;
    });
  });
};

mostraDomande();
