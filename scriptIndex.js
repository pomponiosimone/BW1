const checkAndRedirect = () => {
  const button = document.getElementById("proceedButton");
  button.addEventListener("click", function (event) {
    //previene il comportamento default di refresh della pagina del bottone
    event.preventDefault();
    // Controlla se la checkbox è selezionata
    const checkbox = document.getElementById("condition");
    if (checkbox.checked) {
      // Se la checkbox è selezionata, indirizza l'utente alla nuova pagina
      window.location.href = "pagina2.html";
    } else {
      // Altrimenti, mostra un messaggio di avviso
      alert("Please check the checkbox before proceeding.");
    }
  });
};
//richiamo la funzione
checkAndRedirect();
