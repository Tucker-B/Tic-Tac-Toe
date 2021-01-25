import {play} from "./play.js";

let computerGameSymbol = '';
let computerXInput, computerYInput;

function getRandNum(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

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

function computerPlay(board, blankSpaceOnBoard, computerGameSymbol) {
    // 1. Get random blank space and set it equal to xInput & yInput
    // a. Determine what is available
    let rowsWithBlankSpace = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < blankSpaceOnBoard[i].length; j++) {
            rowsWithBlankSpace.push(i);
        }
    }
    // b. Create rand var within that range
    // c. Set computerXInput & computerYInput to each
    computerYInput = rowsWithBlankSpace[getRandNum(0, rowsWithBlankSpace.length - 1)];
    computerXInput = blankSpaceOnBoard[computerYInput][getRandNum(0, blankSpaceOnBoard[computerYInput].length - 1)];

    // 2. Then call play()
    play(board, blankSpaceOnBoard, computerGameSymbol, computerXInput, computerYInput);

    console.log("ComputerAI: [" + computerYInput + "," + computerXInput + "]");
}


export {getComputerGameSymbol, computerPlay}