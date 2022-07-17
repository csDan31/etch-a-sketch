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

function makeBoard(row,col) {
    let board = document.querySelector('.board');
    board.style.gridTemplateColumns = "repeat(16, 1fr)";
    board.style.gridTemplateRows = "repeat(16, 1fr)";

for(let i = 0; i<256 ; i++) {
    let square = document.createElement('div');
    board.insertAdjacentElement("beforeend",square);
    square.style.border = 'solid';
    square.style.borderWidth = 'thin';
    square.setAttribute('class','etch');
    }}

makeBoard();

let squares = document.querySelectorAll('.etch');

squares.forEach((square) => {
    square.addEventListener('mouseover', etch);
})
function etch(){
    this.style.backgroundColor = "black";
}

