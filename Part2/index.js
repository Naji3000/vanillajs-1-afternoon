

var idInput = document.getElementById('idInput');
var idColor = document.getElementById('colorInput');

function setCard(){
    let str = idInput.value
    let card = document.getElementById(str)
    card.style.color = colorInput.value
}
// console.log("hello World!");
function refreshPage() {
    window.location.reload();
}