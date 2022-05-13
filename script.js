// console.log("Hello")

let turn = "X";
let gameOver = false;

const changeTurn = () => {
    if (turn === "X") {
        return "O";
    }
    else {
        return "X";
    }
}

//game win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("text");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.turn').innerText = boxtext[e[0]].innerText + " Won"
            gameOver = true
        }
    })
}
//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.text');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
        }
        checkWin();
        if (gameOver = false) {
            document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
        }
    })
})