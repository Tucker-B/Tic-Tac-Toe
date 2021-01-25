let board = [];
let blankSpaceOnBoard = [[0,1,2], [0,1,2], [0,1,2]];

(function gameBoard(board) {

    // Populates board array with 'B' ([B]lank spaces)
    for (let i = 0; i < 3; i++) {
        board[i] = [];
        for (let j = 0; j < 3; j++) {
            board[i][j] = 'B';
        }
    }
})(board);

'use strict';
export {board, blankSpaceOnBoard}