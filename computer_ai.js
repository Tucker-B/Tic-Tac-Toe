// How computer AI will function
// 0. Assign computer a gameSymbol
// 1. After player1's turn, begin
// 2. Search board[] for blank spots ('B')
// 3. Randomly pick one from blank spots and 
// assign it to AI's gamesymbol


let computerGameSymbol = '';


function getComputerGameSymbol(playerGameSymbol) {
    if (playerGameSymbol == 'X') {
        computerGameSymbol = 'O';
    } else if (playerGameSymbol == 'O') {
        computerGameSymbol = 'X';
    } else {
        computerGameSymbol = 'X';
    }

    return computerGameSymbol;
}

function computerPlay(boardsBlankSpaces) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            const element = board[j];
            if (board[i][j] == 'B') {
                
            }
        }
    }
}