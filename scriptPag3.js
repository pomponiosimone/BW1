let risultati = {
  corretti: [],
  sbagliati: [],
};

/* const graficoTorta = (risultati) => {
  let torta = [{ corretto: [], nonCorretto: [] }];
  risultati.forEach((element) => {
    if (element === correct) {
      torta.corretto.push(element);
    } else if (element === uncorrect) {
      torta.nonCorretto.push(element);
    }
  });
  const grafico = document.getElementById("pieChart");
  const divParagrafo = document.createElement("div");
  const h4Paragrafo = document.createElement("h4");
  const paragrafo = document.createElement("p");
  if (corretto.length > nonCorretto.length) {
    h4Paragrafo.innerText = `Congratulations! 
    You passed the exam`;
    paragrafo.innerText = `We'll send you the certicate
    in few minutes.
    Check your email (including promotions/ 
        spam folder)`;
  }else if ()
};
 */

const esitoEsame = (corretti, sbagliati) => {
  const grafico = document.getElementById("pieChart");
  const divParagrafo = document.createElement("div");
  const h4Paragrafo = document.createElement("h4");
  const paragrafo = document.createElement("p");
  /*  let countCorretti = risultati.corretti.filter(rispostaCorretta).length;
  const percentualeCorretti = (countCorretti / risultati.corretti.length) * 100;
  let countSbagliati = risultati.sbagliati.filter();
  const percentualeSbagliati = (countSbagliati / risultati.sbagliati.length) * 100; */

  let percentualeCorretti =
    (corretti.length / (corretti.length + sbagliati.length)) * 100;
  const percCorrect = document.getElementsByClassName(
    "risultatoPercentualeCorretto"
  );
  percCorrect.innerText = `${percentualeCorretti}`;
  const questionCorrect = document.getElementsByName("");

  let percentualeSbagliati =
    (sbagliati.length / (corretti.length + sbagliati.length)) * 100;
  const percUncorrect = document.getElementsByClassName(
    "risultatoPercentualeSbagliato"
  );

  percUncorrect.innerText = `${percentualeSbagliati}`;

  if (percentualeCorretti >= 60) {
    h4Paragrafo.innerText = `Congratulations! 
    You passed the exam.`;
    paragrafo.innerText = `We'll send you the certicate
    in few minutes.
    Check your email (including promotions/ 
        spam folder)`;
  } else if (percentualeSbagliati > 60) {
    h4Paragrafo.innerText = `Failed!
    You didn't pass the exam.`;
  }
  grafico.appendChild(divParagrafo);
  divParagrafo.append(h4Paragrafo, paragrafo);
};
