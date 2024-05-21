const changeNumberQ = function()

{ 
     const numberQ = document.getElementById("numberQ")
    return numberQ.textContent = parseInt(numberQ.textContent) + 1
}
const primaopzione = document.getElementById("opzione1")
primaopzione.addEventListener("click",changeNumberQ)
const secondaopzione = document.getElementById("opzione2")
secondaopzione.addEventListener("click",changeNumberQ)
const terzaopzione = document.getElementById("opzione3")
terzaopzione.addEventListener("click",changeNumberQ)
const quartaopzione = document.getElementById("opzione4")
quartaopzione.addEventListener("click",changeNumberQ)


const secondsElements = document.querySelector("p");

if (secondsElements.textContent = 0) {changeNumberQ()}
    
setInterval(function() {
    if (parseInt(secondsElements.textContent) === 0) {
        changeNumberQ();
    }
}, 1000); 