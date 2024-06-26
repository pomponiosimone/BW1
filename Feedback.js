//Creazione 10 stelle con fill scuro
const rating = document.getElementById("rating");
for (let index = 0; index < 10; index++) {
  //creo <li> con classe star
  const star = document.createElement("li");
  star.classList.add("star");
  //qui prendo l'svg e riporto i suoi attributi
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "47");
  svg.setAttribute("height", "46");
  svg.setAttribute("viewBox", "0 0 47 46");
  svg.setAttribute("fill", "none");
  svg.setAttribute("xmlns", svgNS);
  const path = document.createElementNS(svgNS, "path");
  path.setAttribute(
    "d",
    "M22.2044 1.55551C22.6143 0.569963 24.0104 0.569964 24.4203 1.55552L29.9874 14.9402C30.1602 15.3557 30.5509 15.6396 30.9994 15.6756L45.4494 16.834C46.5134 16.9193 46.9448 18.2471 46.1341 18.9415L35.1248 28.3722C34.7831 28.6649 34.6338 29.1242 34.7382 29.5619L38.1018 43.6626C38.3494 44.7009 37.2199 45.5215 36.309 44.9651L23.9379 37.4089C23.5538 37.1743 23.0709 37.1743 22.6868 37.4089L10.3157 44.9651C9.40478 45.5215 8.27528 44.7009 8.52295 43.6626L11.8865 29.5619C11.9909 29.1242 11.8416 28.6649 11.4999 28.3722L0.490575 18.9415C-0.320069 18.2471 0.111362 16.9193 1.17535 16.834L15.6253 15.6756C16.0738 15.6396 16.4645 15.3557 16.6374 14.9402L22.2044 1.55551Z"
  );
  //qui modifico uno dei suoi attributi (fill azzurrino) cambiando il colore di ripieno in uno scuro
  path.setAttribute("fill", "#1A104C");
  svg.appendChild(path);
  star.appendChild(svg);
  rating.appendChild(star);
}
//ottengo un array da un elemento htmlCollector
const stars = Array.from(document.getElementsByClassName("star"));
//variabile per tenere traccia della stella cliccata
let clickedIndex = -1;
//mouse sopra le stelle
function handleMouseOver(index) {
  stars.forEach((star, i) => {
    //seleziono tutti i path e tramite una condizione dove i è minore dell'index su cui è passato il mouse allora assegna a tutti queli precedenti fino a quello sopra la stella corrente un fill azzurro
    const path = star.querySelector("path");
    if (i <= index) {
      path.setAttribute("fill", "#00FFFF");
    } else {
      //altrimenti lascialo come sta
      path.setAttribute("fill", "#1A104C");
    }
  });
}
//mouse fuori stella
function handleMouseOut() {
  stars.forEach((star, i) => {
    const path = star.querySelector("path");
    if (i > clickedIndex) {
      path.setAttribute("fill", "#1A104C");
    } else if (i <= clickedIndex) {
      path.setAttribute("fill", "#00FFFF");
    }
  });
}
//evento click
function handleClick(index) {
  clickedIndex = index;
  stars.forEach((star, i) => {
    const path = star.querySelector("path");
    if (i <= index) {
      path.setAttribute("fill", "#00FFFF");
    } else {
      path.setAttribute("fill", "#1A104C");
    }
  });
}
//creazione evento interattivo sull'illuminazione della stella
stars.forEach((star, index) => {
  star.addEventListener("mouseover", () => handleMouseOver(index));
  star.addEventListener("mouseout", handleMouseOut);
  star.addEventListener("click", () => handleClick(index));
});
//creazione messaggio quando viene premuto il tasto INFO
const button = document.querySelector(".glowButton");
button.addEventListener("click", () => {
  event.preventDefault();
  const section = document.getElementById("section");
  section.setAttribute("style", "display: none");
  const footer = document.querySelector("footer");
  footer.innerHTML = "";
  const divFooter = document.createElement("div");
  const messaggio = document.createElement("p");
  messaggio.setAttribute("style", "font-size: xx-large");
  if (clickedIndex >= 5) {
    messaggio.innerText = "Grazie per il tuo feedback!";
  } else {
    messaggio.innerText =
      "Ci dispiace della tua esperienza su Epicode, non farti problemi a contattarci per migliorare la tua esperienza!";
  }
  divFooter.appendChild(messaggio);
  footer.appendChild(divFooter);
});

window.onload = (event) => {
  console.log("page is fully loaded");
};
