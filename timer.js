const timer = (duration) => {
  //imposto l'inzio del timer
  let timerLeft = duration;

  //richiamo l'elemento dove verrà mostrato il timer
  const TimerElement = document.getElementById("timer");

  TimerElement.innerText = timerLeft;
};
