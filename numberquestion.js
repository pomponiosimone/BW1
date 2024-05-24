const changeNumberQ = function () {
  const numberQ = document.getElementById("numberQ");
  {
    if (parseInt(numberQ.textContent) < 10)
      numberQ.textContent = parseInt(numberQ.textContent) + 1;
  }
};
