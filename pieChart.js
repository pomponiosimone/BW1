function createPieChart(giusto, sbagliato) {
  const total = giusto + sbagliato;
  const data = [giusto, sbagliato];
  const colors = ["#d20094", "#00ffff"];
  let currentAngle = -90;
  const radius = 150;
  const svg = document.getElementById("pieChart");

  data.forEach((value, index) => {
    const sliceAngle = (value / total) * 360;
    const x1 = radius * Math.cos((currentAngle * Math.PI) / 180);
    const y1 = radius * Math.sin((currentAngle * Math.PI) / 180);
    currentAngle += sliceAngle;
    const x2 = radius * Math.cos((currentAngle * Math.PI) / 180);
    const y2 = radius * Math.sin((currentAngle * Math.PI) / 180);
    const largeArcFlag = sliceAngle > 180 ? 1 : 0;

    const pathData = `M 150 150 L ${150 + x1} ${150 + y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${150 + x2} ${150 + y2} Z`;
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    path.setAttribute("fill", colors[index]);

    svg.appendChild(path);
  });
}

const rispostaGiusta = 6;
const rispostaSbagliata = 4;
createPieChart(rispostaSbagliata, rispostaGiusta);
