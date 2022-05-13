console.log("Hello")

let turnMusic = new Audio('files/ting.mp3');
let winMusic = new Audio('files/music.mp3');
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
            document.querySelector('.turn').innerText = boxtext[e[0]].innerText + " Won";
            winMusic.play();
            gameOver = true;
            document.getElementsByClassName("dance")[0].style.height = "20vh";
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
            turnMusic.play();
            turn = changeTurn();
            checkWin();
        }
        if (gameOver == false) {
            document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
        }
    })
})

//Reset
document.getElementsByClassName('btn')[0].addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.text');
    Array.from(boxtext).forEach(element => {
        element.innerText = "";
    });
    winMusic.pause();
    document.getElementsByClassName("dance")[0].style.height = "0vh";
    gameOver = false;
    turn = "X";
    document.getElementsByClassName("turn")[0].innerText = "Turn for " + turn;
})
