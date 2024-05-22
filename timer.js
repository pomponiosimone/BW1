// Variabile globale per memorizzare l'intervallo del timer corrente
let currentTimerInterval;

const timer = (duration) => {
  // Se esiste un timer attivo, lo cancello
  if (currentTimerInterval) {
    clearInterval(currentTimerInterval);
  }

  // Creo la variabile che prenderà come valore la durata del timer (parametro)
  let timeLeft = duration;

  // Ottengo l'elemento del DOM dove verrà mostrato il timer
  const timerElement = document.querySelector(".secondsRemaining");
  // Ottengo l'elemento del cerchio dal DOM
  const circle = document.getElementById("ss");
  const radius = circle.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  // Gli assegno come contenuto il timer
  timerElement.textContent = timeLeft;

  // Imposto lo stroke del cerchio
  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = circumference;

  // Creo funzione che aggiorna il timer
  const updateTimer = () => {
    // Decremento il tempo rimanente
    timeLeft--;

    // Aggiorno il valore nel DOM
    timerElement.textContent = timeLeft;

    // Calcolo l'offset per lo stroke del cerchio
    const offset = circumference - (timeLeft / duration) * circumference;
    circle.style.strokeDashoffset = offset;

    // Quando il tempo arriva a 0 si ferma il timer
    if (timeLeft <= 0) {
      clearInterval(currentTimerInterval);
    }
  };

  // Richiamo la funzione 'updateTimer' ogni secondo
  currentTimerInterval = setInterval(updateTimer, 1000);
};

timer(60);
// Richiama il timer dopo qualche secondo per vedere l'effetto della cancellazione del precedente
