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
let punteggio = 0;
let currentQuestionIndex = 0;
const domandaElement = document.getElementById("domandaRND");
const container = document.getElementById("container");

const mostraDomande = (questionIndex) => {
  const domandaCorrente = questions[questionIndex];
  domandaElement.innerText = domandaCorrente.question;
  container.innerHTML = "";

  let risposte = [...domandaCorrente.incorrect_answers];
  risposte.splice(
    Math.floor(Math.random() * (risposte.length + 1)),
    0,
    domandaCorrente.correct_answer
  );

  risposte.forEach((answer) => {
    const button = document.createElement("div");
    button.classList.add("opzione");
    button.innerText = answer;

    button.addEventListener("click", () => {
      if (answer === domandaCorrente.correct_answer) {
        punteggio++;
      }
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        mostraDomande(currentQuestionIndex);
      } else {
        votoFinale();
      }
    });
    container.appendChild(button);
  });
};

function votoFinale() {
  domandaElement.innerText = `Quiz finito! Il tuo punteggio è ${punteggio}/${questions.length}.`;
  container.innerHTML = "";
}

mostraDomande(currentQuestionIndex);
