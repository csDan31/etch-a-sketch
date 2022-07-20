// creates the board and squares

/*
let board = document.querySelector('.board');
board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

for(let i = 0; i<256 ; i++) {
    let square = document.createElement('div');
    board.insertAdjacentElement("beforeend",square);
    square.style.border = 'solid';
    square.style.borderWidth = 'thin';
} 
*/


let grid = 16;
function makeBoard() {
    let board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${grid}, 1fr)`;

for(let i = 0; i<(grid*grid) ; i++) {
    let square = document.createElement('div');
    board.insertAdjacentElement("beforeend",square);
    square.style.backgroundColor = 'white';
    square.style.outline = 'solid';
    square.style.outlineWidth = 'thin';
    square.setAttribute('class','etch');

    /*let squares = document.querySelectorAll('.etch');

    squares.forEach((square) => {
    square.addEventListener('mouseover', etch);
    })
    }*/}

let squares = document.querySelectorAll('.etch');

squares.forEach((square) => {
    square.addEventListener('mouseover', etch);
    })
    }

function etch(){
    this.style.backgroundColor = 'rgb(0,0,0)';
}

// black btn

let blackBtn = document.getElementById('default-color');

blackBtn.addEventListener('click',etchDefault);
function etchDefault(){
    document.querySelectorAll('.etch').forEach((item) => {
        removeMouseover(item);
        item.addEventListener('mouseover', etch)
    })
};

// gray scale btn

let grayScaleBtn = document.getElementById('gray-scale');

grayScaleBtn.addEventListener('click', grayScale);

function grayScale(){
    document.querySelectorAll('.etch').forEach((item) => {
    removeMouseover(item);
    let opacity = 0;
    function setOpacity(){
        opacity += 0.1;
        this.style.backgroundColor = `rgba(0,0,0,${opacity})`
        console.log(opacity);
    }
    item.addEventListener('mouseover', setOpacity)
})
};

// randomized color button

function randomColors(){
    let red = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    this.style.backgroundColor = `rgb(${red},${blue},${green})`;
}

let randomBtn = document.getElementById('random-color');

randomBtn.addEventListener('click',etchRand);
function etchRand(){
    document.querySelectorAll('.etch').forEach((item) => {
        removeMouseover(item);
        item.addEventListener('mouseover', randomColors)
    })
};

// remove all mouseover functions

function removeMouseover(item){
    item.removeEventListener('mouseover', etch)
    item.removeEventListener('mouseover', etchRand)
    item.removeEventListener('mouseover', grayScale)
}

makeBoard();

// set board size
let boardSize = document.getElementById('board-size');

function enterBoardSize(){
    let sizeNum = prompt('How many columns and rows would you like?','');
    if(sizeNum > 100) {
        alert("Too big! It might cause it to freeze! Try setting it lower than 100!")
    } else {
        resetGrid();
        grid = sizeNum;
        makeBoard();
    }
}

boardSize.addEventListener('click', enterBoardSize);

// reset hover overs
let resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', resetGrid);

function resetGrid(){
    document.querySelectorAll('.etch').forEach((item) => {
        item.style.backgroundColor = 'white';
})};

