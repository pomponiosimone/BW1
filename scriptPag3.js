const getPercentage = (punteggio) => {
  let sbagliate = 10 - punteggio;
  let sbagliatePercentuale = (sbagliate / 10) * 100;
  let punteggioPercentuale = (punteggio / 10) * 100;
  let risultatoPercentuale = document.getElementsByClassName(
    "risultatoPercentuale"
  );
  risultatoPercentuale[0].innerText = `${punteggioPercentuale}%`;
  risultatoPercentuale[1].innerText = `${sbagliatePercentuale}%`;
  //console.log(risultatoPercentuale[0].innerText);
  //console.log(risultatoPercentuale[1].innerText);
  let risposte = document.getElementsByClassName("nQuestion");
  risposte[0].innerText = `${punteggio}/10 questions`;
  risposte[1].innerText = `${sbagliate}/10 questions`;
  if (punteggioPercentuale >= 60) {
    const svg = document.getElementById("pieChart");
    const intoDonut = document.createElement("div");
    intoDonut.classList.add("inDonut");
    const h4 = document.createElement("h4");
    const h5 = document.createElement("h5");
    const paragraph = document.createElement("p");
    h4.innerText = "Congratulations!";
    h5.innerText = "You Passed the exam";
    paragraph.innerText = `We'll send you the certificate
    in few minutes.
    Check your email (including promotions/spam folder)`;
    intoDonut.append(h4, h5, paragraph);
    svg.appendChild(intoDonut);
  }
};
getPercentage(7);
