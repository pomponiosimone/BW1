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
//creo una variabile per il punteggio e un index per gli oggetti delle domande
let punteggio = 0;
let currentQuestionIndex = 0;
const domandaElement = document.getElementById("domandaRND");
const container = document.getElementById("container");

//creo una funzione che mostri le domande
const mostraDomande = (questionIndex) => {
  //qui assegno ad una costante la domanda corrente estratta dalla proprietà "questions"
  const domandaCorrente = questions[questionIndex];
  domandaElement.innerText = domandaCorrente.question;
  //svuoto il container per a prossima domanda
  container.innerHTML = "";
  //creo una copia dell'array risposte incorrette dell'elemento in oggetto(quello corrente per intederci)
  let risposte = [...domandaCorrente.incorrect_answers];
  //prendo l'array appena creato e grazie ad splice inserisco dentro la risposta corretta non prima di assegnargli un indice casuale a seconda della lunghezza dell'array risposte
  risposte.splice(
    Math.floor(Math.random() * (risposte.length + 1)),
    0,
    domandaCorrente.correct_answer
  );

  //creo un loop con forEach che ha come parametro "answer" non è altro che le risposte in generale siano esse giuste o sbagliate, non faccio altro che creare un "button"
  //non è altro che un div con un evento "click"
  risposte.forEach((answer) => {
    const button = document.createElement("div");
    //assegno una classe
    button.classList.add("opzione");
    //inserisco una delle risposte in oggetto dentro questo div chiamato button
    button.innerText = answer;

    //evento click
    button.addEventListener("click", () => {
      //condizione se la risposta cliccata è corretta allora il punteggio si somma di 1 il suo valore
      if (answer === domandaCorrente.correct_answer) {
        punteggio++;
      }
      //aumento anche l'indice currentQuestion per prendere il secondo oggetto dentro l'array questions, tale indice è stato creato a inizio funzione.
      currentQuestionIndex++;

      //condizione in cui se l'indice delle domande è inferiore a quello degli oggetti contenuti dento l'array continua a ripetere la funzione altrimenti passa al voto finale
      if (currentQuestionIndex < questions.length) {
        mostraDomande(currentQuestionIndex);
        timer(60);
      } else {
        votoFinale();
      }
    });
    //incollo il div creato in quello esistente su HTML
    container.appendChild(button);
  });
};

//funzione di voto finale, dovrebbe collegarsi al grafico a torta fatto da uno di voi (penso Brian)
function votoFinale() {
  const timer = document.getElementById("time");
  timer.setAttribute("style", "display:none");
  const numberQuestion = document.getElementById("numberQuestion");
  numberQuestion.setAttribute("style", "display:none");

  // Creo il bottone che manda alla pagina del feedback
  const daiUnFeedback = () => {
    const containerButton = document.createElement("div");
    containerButton.classList.add("containerButton");
    const button = document.createElement("button");
    button.innerText = "Rate Us";
    button.addEventListener("click", (event) => {
      event.preventDefault();
      window.location.href = "Feedback.html";
    });
    containerButton.appendChild(button);
  };
  daiUnFeedback();

  domandaElement.innerText = "Result";
  container.innerHTML = "";
  const h4 = document.createElement("h4");
  h4.innerText = "The summer of your answer: ";
  domandaElement.appendChild(h4);

  //creo 3 div da appendere poi a Container

  const divCorrect = document.createElement("div");
  divCorrect.classList.add("risposte");
  const divTorta = document.createElement("div");
  divTorta.classList.add("risposte");
  const divUncorrect = document.createElement("div");
  divUncorrect.classList.add("risposte");

  ////div Correct/I paragrafi del div1
  const p1 = document.createElement("p");
  p1.innerText = "Correct";
  p1.classList.add("rightWrong");
  const p2 = document.createElement("p");
  p2.innerText = `${(punteggio / 10) * 100}%`;
  p2.classList.add("risultatoPercentuale");
  const p3 = document.createElement("p");
  p3.innerText = `${punteggio}/${questions.length}`;
  divCorrect.appendChild(p1);
  divCorrect.appendChild(p2);
  divCorrect.appendChild(p3);
  container.appendChild(divCorrect);

  //div torta
  container.appendChild(divTorta);

  //div Uncorrect
  const p4 = document.createElement("p");
  p4.innerText = "Uncorrect";
  p4.classList.add("rightWrong");
  const p5 = document.createElement("p");
  p5.innerText = `${((questions.length - punteggio) / 10) * 100}%`;
  p5.classList.add("risultatoPercentuale");
  const p6 = document.createElement("p");
  p6.innerText = `${questions.length - punteggio}/${questions.length}`;
  divUncorrect.appendChild(p4);
  divUncorrect.appendChild(p5);
  divUncorrect.appendChild(p6);
  container.appendChild(divUncorrect);
}
//richiamo la funzione
mostraDomande(currentQuestionIndex);
window.onload = (event) => {
  timer(60);
  console.log("page is fully loaded");
};
