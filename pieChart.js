function createPieChart(punteggio, questions) {
  const risposteSbagliate = questions - punteggio;
  const data = [punteggio, risposteSbagliate]; //dati del grafico (risposte giuste e sbagliate)
  const colors = ["#00ffff", "#d20094"];

  const totale = data.reduce((sum, val) => sum + val, 0); //somma totalee dei valori
  let angoloIniziale = -90; //angolo iniziale per il primo segmento
  const radius = 150;
  const svg = document.getElementById("pieChart");

  //Iteriamo sui dati per creare ogni segmento del grafico
  data.forEach((value, index) => {
    //calcoliamo l'angolo del segmento corrente
    const sliceAngolo = (value / totale) * 360;
    //calcoliamo le coordinate del primo punto del segmento
    const x1 = radius * Math.cos((angoloIniziale * Math.PI) / 180);
    const y1 = radius * Math.sin((angoloIniziale * Math.PI) / 180);
    //aggiungiamo l'angolo del segmento
    angoloIniziale += sliceAngolo;
    //calcoliamo le coordinate del secondo punto del segmento
    const x2 = radius * Math.cos((angoloIniziale * Math.PI) / 180);
    const y2 = radius * Math.sin((angoloIniziale * Math.PI) / 180);
    //dobbiamo determinare se l'angolo del segmento è maggiore di 180 gradi
    const arc = sliceAngolo > 180 ? 1 : 0;

    //stringa per disegnare il segmento (path data)
    const pathData = `M 150 150 L ${150 + x1} ${150 + y1} A ${radius} ${radius} 0 ${arc} 1 ${150 + x2} ${150 + y2} Z`;
    //creamo un nuovo elemento "path" per il segmento
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    //impostiamo l'attributo "d" con la stringa "pathData" e l'attributo "fill" con il colore corrispondente
    path.setAttribute("d", pathData);
    path.setAttribute("fill", colors[index]);

    //aggiungiamo l'elemento "path" al grafico SVG
    svg.appendChild(path);
  });
}

const punteggio = 6;
const questions = 10;

createPieChart(punteggio, questions);
