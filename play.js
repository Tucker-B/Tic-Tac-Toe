// Changes span elements for webpage, deletes blank space in blankSpaceOnBoard[]
function play(board, blankSpaceOnBoard, gameSymbol, xInput, yInput) {

    // 1. Change spot in board[] to no longer be 'B'
    yInput = parseInt(yInput);
    xInput = parseInt(xInput);
    board[yInput][xInput] = gameSymbol;

    // 2. Change element in document
    let spanElement = document.querySelector(`#row-${yInput+1}-span-${xInput+1}`);
    spanElement.textContent = gameSymbol;

    // 3. access blankSpaceOnBoard[] and delete that specific index
    blankSpaceOnBoard[yInput].splice(xInput, 1);
} 

export {play};