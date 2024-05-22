function createPieChart(punteggio, questions) {
  const risposteSbagliate = questions - punteggio;
  const data = [risposteSbagliate, punteggio]; //dati del grafico (risposte giuste e sbagliate)
  const colors = ["#d20094", "#00ffff"];

  const totale = data.reduce((sum, val) => sum + val, 0); //somma totalee dei valori
  let angoloIniziale = -90; //angolo iniziale per il primo segmento
  const radius = 150;
  const innerRadius = 100;
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

    const ix1 = innerRadius * Math.cos(((angoloIniziale - sliceAngolo) * Math.PI) / 180);
    const iy1 = innerRadius * Math.sin(((angoloIniziale - sliceAngolo) * Math.PI) / 180);
    const ix2 = innerRadius * Math.cos((angoloIniziale * Math.PI) / 180);
    const iy2 = innerRadius * Math.sin((angoloIniziale * Math.PI) / 180);

    //stringa per disegnare il segmento (path data)
    const pathData = `
        M ${150 + x1} ${150 + y1}
        A ${radius} ${radius} 0 ${arc} 1 ${150 + x2} ${150 + y2}
        L ${150 + ix2} ${150 + iy2}
        A ${innerRadius} ${innerRadius} 0 ${arc} 0 ${150 + ix1} ${150 + iy1}
        Z
      `;

    //creamo un nuovo elemento "path" per il segmento
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    //impostiamo l'attributo "d" con la stringa "pathData" e l'attributo "fill" con il colore corrispondente
    path.setAttribute("d", pathData);
    path.setAttribute("fill", colors[index]);

    //aggiungiamo l'elemento "path" al grafico SVG
    svg.appendChild(path);
  });

  //aggungiamo un cerchio trasparente al centro del grafico
  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  //impostiamo le coordinate del centro e il raggio
  circle.setAttribute("cx", "150");
  circle.setAttribute("cy", "150");
  circle.setAttribute("r", innerRadius);
  //impostiamo il colore del contorno del come trasparente
  circle.setAttribute("fill", "transparent");

  svg.appendChild(circle);

  //aggiungiamo un testo al centro del grafico
  //se il voto è maggiore a 6 stampa "congratulazioni", altrimenti stampa "hai fallito"
  const text = punteggio >= 6 ? "Congratulations!" : "You Failed!";

  const textElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
  textElement.setAttribute("x", "150");
  textElement.setAttribute("y", "150");
  textElement.setAttribute("text-anchor", "middle");
  textElement.setAttribute("dy", ".3em");
  textElement.setAttribute("font-size", "20");
  textElement.setAttribute("font-family", "Arial");
  textElement.setAttribute("fill", "white");
  textElement.textContent = text;

  svg.appendChild(textElement);
}

const punteggio = 10;
const questions = 10;

createPieChart(punteggio, questions);
