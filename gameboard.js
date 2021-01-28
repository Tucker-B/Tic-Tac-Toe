let board = [];
let blankSpaceOnBoard = [[0,1,2], [0,1,2], [0,1,2]];

// Checks if there are 3 consecutive characters/symbols in a row on the board
function checkBoardRows(board, playerGameSymbol, computerGameSymbol) {
    // Check each row
    for (let i = 0; i < 3; i++) {
        let player1SymbolCounter = 0;
        let computerSymbolCounter = 0;
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == playerGameSymbol) {
                player1SymbolCounter++;
            }
            if (board[i][j] == computerGameSymbol) {
                computerSymbolCounter++;
            }
        }
        if ((player1SymbolCounter == 3) || (computerGameSymbol == 3)) {
            if (player1SymbolCounter == 3) {
                return "Player 1 Won!";
            } else {
                return "Computer Won!";
            }
        }
    }
    // If return hasn't been called yet, return "" to indicate no one has won yet.
    return "";
}
// Checks if there are 3 consecutive characters/symbols in a column on the board
function checkBoardColumns(board, playerGameSymbol, computerGameSymbol) {

    // Check each column
    for (let i = 0; i < 3; i++) {
        let player1SymbolCounter = 0;
        let computerSymbolCounter = 0;
        for (let j = 0; j < 3; j++) {
            if (board[j][i] == playerGameSymbol) {
                player1SymbolCounter++;
            } else if (board[j][i] == computerGameSymbol) {
                computerSymbolCounter++;
            }
        }
        if ((player1SymbolCounter == 3) || (computerSymbolCounter == 3)) {
            if (player1SymbolCounter == 3) {
                return "Player 1 Won!";
            } else {
                return "Computer Won!";
            }
        }
    }
    // If return hasn't been called yet, return "" to indicate no one has won yet.
    return "";
}
// Checks if there are 3 consecutive characters/symbols diagonally on the board
function checkBoardDiagonals(board, playerGameSymbol, computerGameSymbol) {
    // Check [0,0] then [1,1] then [2,2]
    let player1SymbolCounter = 0;
    let computerSymbolCounter = 0; 
    for (let i = 0; i < board.length; i++) {
        if (board[i][i] == playerGameSymbol) {
            player1SymbolCounter++;
        } else if (board[i][i] == computerGameSymbol) {
            computerSymbolCounter++
        }
    }

    if ((player1SymbolCounter == 3) || (computerSymbolCounter == 3)) {
        if (player1SymbolCounter == 3) {
            return "Player 1 Won!";
        } else {
            return "Computer Won!";
        }
    }

    // Check [0,2] then [1,1] then [2,0]
    player1SymbolCounter = 0;
    computerSymbolCounter = 0;

    for (let i = 0; i < board.length; i++) {
        let columnIndex = 2 - i;
        if (board[i][columnIndex] == playerGameSymbol) {
            player1SymbolCounter++;
        } else if (board[i][columnIndex] == computerSymbolCounter) {
            computerSymbolCounter++;
        }
    }

    if ((player1SymbolCounter == 3) || (computerSymbolCounter == 3)) {
        if (player1SymbolCounter == 3) {
            return "Player 1 Won!";
        } else {
            return "Computer Won!";
        }
    }
    // If return hasn't been called yet, return "" to indicate no one has won yet.
    return "";
}

function checkForWinCondition(board, playerGameSymbol, computerGameSymbol) {
    // Checks if there are 3 consecutive characters/symbols in a row on the board
    let rowResult = checkBoardRows(board, playerGameSymbol, computerGameSymbol);
    // Checks if there are 3 consecutive characters/symbols in a column on the board
    let columnResult = checkBoardColumns(board, playerGameSymbol, computerGameSymbol);
    // Checks if there are 3 consecutive characters/symbols diagonally on the board
    let diagonalResult = checkBoardDiagonals(board, playerGameSymbol, computerGameSymbol);
    // Alerts who won, and then reloads the page to start a new game
    if (rowResult != "") {

        alert(`${rowResult}`);
        window.location.reload(false);

    } else if (columnResult != "") {

        alert(`${columnResult}`);
        window.location.reload(false);

    } else if (diagonalResult != "") {

        alert(`${diagonalResult}`);
        window.location.reload(false);
    }
}

(function gameBoard(board) {
    // Populates board array with 'B' (Blank spaces)
    for (let i = 0; i < 3; i++) {
        board[i] = [];
        for (let j = 0; j < 3; j++) {
            board[i][j] = 'B';
        }
    }
})(board);

'use strict';
export {board, blankSpaceOnBoard, checkForWinCondition}