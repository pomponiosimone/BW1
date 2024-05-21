//funzione per creare il timer e collegarlo al DOM
const timer = (duration) => {
  //creo la variabile che prenderà come valore la durata del timer(parametro)
  let timeLeft = duration;

  //ottengo l'elemento del DOM dove verrà mostrato il timer
  const timerElement = document.getElementById("secondsRemaining");
  //ottengo l'elemento del cerchio dal DOM
  const circle = document.getElementById("ss");
  const radius = ss.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  //gli assegno come contenuto il timer
  timerElement.textContent = timeLeft;

  //creo funzione che aggiorna il timer
  const updateTimer = () => {
    //decremento il tempo rimanente
    timeLeft--;

    //aggiorno il valore nel DOM
    timerElement.textContent = timeLeft;

    //
    const offset = circumference - (timeLeft / duration) * circumference;
    circle.style.strokeDashoffset = offset;

    //quando il tempo arriva a 0 si ferma il timer
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
    }
  };

  //altrimenti richiama la funzione la fuznione 'updateTimer' ogni secondo
  const timerInterval = setInterval(updateTimer, 1000);
};

timer(60);
