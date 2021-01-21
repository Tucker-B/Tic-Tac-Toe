

/*
    1. Store gameboard as an array inside of a Gameboard object
    2. Player objects
    3. Game mechanics object
    // Side note: use as few global names as possible
    //            modules: only need one of it, so "gameBoard", "display"
                  factory: need multiples, "players"
*/


(function gameBoard() {
    let board = [];
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
})();

const Player = (name, playSymbol) => {
    return { name, playSymbol };
}
