let risultati = [];

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
function rispostaCorretta(stringa) {
  return stringa === corretto;
}

const percentualeCorretto = (risultati) => {
  const grafico = document.getElementById("pieChart");
  const divParagrafo = document.createElement("div");
  const h4Paragrafo = document.createElement("h4");
  const paragrafo = document.createElement("p");
  let count = risultati.filter(rispostaCorretta).length;
  const percentuale = (count / risultati.length) * 100;
  if (percentuale >= 60) {
    h4Paragrafo.innerText = `Congratulations! 
    You passed the exam.`;
    paragrafo.innerText = `We'll send you the certicate
    in few minutes.
    Check your email (including promotions/ 
        spam folder)`;
  } else if (percentuale < 60) {
    h4Paragrafo.innerText = `Failed!
    You didn't pass the exam.`;
  }
};
