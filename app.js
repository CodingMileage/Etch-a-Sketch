let board = document.querySelector('.grid');
board.style.gridTemplateColumns = "repeat(16, 1fr)";
board.style.gridTemplateRows = "repeat(16, 1fr)";

for (let i = 0; i < 256; i++) {
    let square = document.createElement('box');
    square.setAttribute('id', 'box');
    board.insertAdjacentElement('beforeend', square);
}



































// // let resetButton = document.querySelector('.reset');

// // function populateBoard(size) {
// //     let board = document.querySelector('.board');
// //     board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
// //     board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

// //     for (let i = 0; i < 256; i++) {
// //         let square = document.createElement('box');
// //         square.addEventListener('mouseover', () => {
// //             square.style.backgroundColor = 'black';
// //         });
// //         // square.style.backgroundColor = 'blue';
// //         board.insertAdjacentElement('beforeend', square);
// //     }
// // }

// // populateBoard(16);

// // // let m = document.querySelector('#boxx');
// // // m.addEventListener('click', () => {
// // //     square.style.backgroundColor = 'blue';
// // // });

// // function reset(size) {
// //     let board = document.querySelector('.board');
// //     board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
// //     board.style.gridTemplateRows = `repeat(${size}, 1fr)`;


// //     for (let i = 0; i < 256; i++) {
// //         let square = document.createElement('box');
// //         square.addEventListener('mouseover', () => {
// //             square.style.backgroundColor = 'black';
// //         });
// //         board.insertAdjacentElement('beforeend', square);
// //     }
// // }

// // resetButton.addEventListener('click', reset());

