function createPieChart(correct, sbagliato) {
  const total = correct + sbagliato;
  const data = [correct, sbagliato];
  const colori = ["#d20094", "#00ffff"];
  let angolo = -90;
  const radius = 150;
  const svg = document.getElementById("pieChart");

  data.forEach((valore, i) => {
    const halfAngle = (valore / total) * 360;
    const x1 = radius * Math.cos((angolo * Math.PI) / 180);
    const y1 = radius * Math.sin((angolo * Math.PI) / 180);
    angolo += halfAngle;
    const x2 = radius * Math.cos((angolo * Math.PI) / 180);
    const y2 = radius * Math.sin((angolo * Math.PI) / 180);
    const arc = halfAngle > 180 ? 1 : 0;

    const pathData = `M 150 150 L ${150 + x1} ${150 + y1} A ${radius} ${radius} 0 ${arc} 1 ${150 + x2} ${150 + y2} Z`;
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    path.setAttribute("fill", colori[i]);

    svg.appendChild(path);
  });
}

const correctAnswers = 6;
const sbagliatoAnswers = 4;
createPieChart(sbagliatoAnswers, correctAnswers);
