let board = [];


function gameBoard(board) {

    // Populates board array with 'B' ([B]lank spaces)
    for (let i = 0; i < 3; i++) {
        board[i] = [];
        // let rowString = "";
        for (let j = 0; j < 3; j++) {
            board[i][j] = 'B';
            // rowString += board[i][j];
            // const container = document.querySelector(`#row-${i+1}-span-${j+1}`);
            // container.textContent = board[i][j];

        }
        // console.log(rowString);
    }
};

gameBoard(board);

'use strict';
export {board}