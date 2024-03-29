let board = document.querySelector(".grid");
let size = 16;
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

let color = "black";
let mode = "click";

function addEventListenersToSquares() {
  let squares = document.querySelectorAll(".box");
  squares.forEach((square) => {
    square.removeEventListener("mouseover", handleMouseOver);
    square.removeEventListener("click", handleClick);
    square.removeEventListener("mousedown", handleHold);

    if (mode === "mouseover") {
      square.addEventListener("mouseover", handleMouseOver);
    } else if (mode === "click") {
      square.addEventListener("click", handleClick);
    } else if (mode === "mousedown") {
      square.addEventListener("mousedown", handleHold);
    }
  });
}

function handleMouseOver() {
  this.style.backgroundColor = color;
}

function handleClick() {
  this.style.backgroundColor = color;
}

function handleHold() {
  this.style.backgroundColor = color;
}

function reset() {
  let squares = document.querySelectorAll(".box");
  squares.forEach((square) => {
    square.style.backgroundColor = "darkslategray";
  });
}

function changeColor(choice) {
  let btn = document.querySelector(".color");
  color = choice;
  btn.style.backgroundColor = color;
}

function changeMode(pick) {
  mode = pick;
  console.log(mode);
  addEventListenersToSquares();
}

function changeSize(input) {
  size = input;
  clearBoard();
  grid();
}

function changeClick() {}

function clearBoard() {
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
}

function grid() {
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.classList.add("box");
    board.appendChild(square);
  }

  addEventListenersToSquares();
}

grid();
