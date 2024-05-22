

const changeNumberQ = function() { 
    const numberQ = document.getElementById("numberQ"); {
    if (parseInt(numberQ.textContent) < 10 )
        numberQ.textContent=parseInt(numberQ.textContent) + 1;}
};
document.addEventListener('click', function(event) {
   
    if (event.target.classList.contains('opzione')) {
        changeNumberQ();
    }
});



const secondsElements = document.querySelector("p");

if (secondsElements.textContent = 0) {changeNumberQ()}
    
setInterval(function() {
    if (parseInt(secondsElements.textContent) === 0) {
        changeNumberQ();
    }
}, 1000); 
