let arr = [];

function play(clickedId){
    let clickedElement = document.getElementById(clickedId)
    let playerSpan = document.getElementById('player')
    if(playerSpan.innerText === "X") {
        playerSpan.innerText = "O";
        clickedElement.innerText = "X";
        arr[clickedId] = "X"
    } else {
        playerSpan.innerText = "X";
        clickedElement.innerText = "O";
        arr[clickedId] = "O";
    }

console.log(arr);

// console.log('Hello World!')

const topLeft = arr[0];
const topCenter = arr[1];
const topRight = arr[2];
const middleLeft = arr[3];
const middleCenter = arr[4];
const middleRight = arr[5];
const bottomLeft = arr[6];
const bottomCenter = arr[7];
const bottomRight = arr[8];

if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    window.alert(`${topLeft} is the winner`);
    return;
}
if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
    alert(`${middleLeft} is the winner`);
    return;
}
if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
    alert(`${bottomLeft} is the winner`);
    return;
}
if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
    alert(`${topLeft} is the winner`);
    return;
}
if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter) {
    alert(`${topCenter} is the winner`);
    return;
}
if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
    alert(`${topRight} is the winner`);
    return;
}
if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(`${topLeft} is the winner`);
    return;
}
if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    alert(`${bottomLeft} is the winner`);
    return;
}

let boardFull = true;
for (let i = 0; i <= 8; i++) {
    if (arr[i] === undefined) {
         boardFull = false;
    }
}
if (boardFull === true) {
    alert("Cat's game, there is no winner");
}

}
