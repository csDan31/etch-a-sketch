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
function makeBoard(grid) {
    grid = 16;
    let board = document.querySelector('.board');
    board.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${grid}, 1fr)`;

for(let i = 0; i<(grid*grid) ; i++) {
    let square = document.createElement('div');
    board.insertAdjacentElement("beforeend",square);
    square.style.border = 'solid';
    square.style.borderWidth = 'thin';
    square.setAttribute('class','etch');
    }}

makeBoard();
// mouseover changes the background to black
let squares = document.querySelectorAll('.etch');

squares.forEach((square) => {
    square.addEventListener('mouseover', etch);
})
function etch(){
    this.style.backgroundColor = 'black';
}

// set board size
let boardSize = document.getElementById('board-size');

function enterBoardSize(){
    let sizeNum = prompt("");
}

boardSize.addEventListener('click', enterBoardSize);

// reset hover overs
let resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', resetGrid);

function resetGrid(){
    document.querySelectorAll('.etch').forEach((item) => {
        item.style.backgroundColor = 'white';
})};