document
  .getElemqueentById("proceedButton")
  .addEventListener("click", function (event) {
    const checkbox = document.getElementById("condition");
    if (checkbox.checked) {
      window.location.href = "pagina2.html";
    }
  });
