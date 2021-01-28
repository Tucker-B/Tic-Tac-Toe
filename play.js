// Changes span elements for webpage, deletes blank space in blankSpaceOnBoard[]
function play(board, blankSpaceOnBoard, gameSymbol, xInput, yInput) {
    // Inputs are strings, so change them to ints to be indices for array
    yInput = parseInt(yInput);
    xInput = parseInt(xInput);
    // Make sure that input provided is actually free on board
    if (board[yInput][xInput] == 'B') {
        // 1. Change spot in board[] to no longer be 'B'
        board[yInput][xInput] = gameSymbol;

        // 2. Change element in document
        let spanElement = document.querySelector(`#row-${yInput+1}-span-${xInput+1}`);
        spanElement.textContent = gameSymbol;
    
        // 3. access blankSpaceOnBoard[] and delete that specific index
        blankSpaceOnBoard[yInput].splice(xInput, 1);

    } else if (blankSpaceOnBoard.length == 0) {
        alert("It's a draw! There's no more space available on the board. ")
    } else {
        alert("Sorry, that space on the board isn't available. Try again.");
    }
} 

export {play};