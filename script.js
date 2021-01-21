

/*
    1. Store gameboard as an array inside of a Gameboard object
    2. Player objects
    3. Game mechanics object
    // Side note: use as few global names as possible
    //            modules: only need one of it, so "gameBoard", "display"
                  factory: need multiples, "players"
*/

const Player = (name, playSymbol) => {
    return { name, playSymbol };
}

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


(function playGame() {
    // How the game will play out
    // 1. Ask player for name & playSymbol
    // 2. Game starts
    // 3. Let player go first
    // 4. AI then goes
    // 5. Game ends either (3 consecutive gameSymbols) || (board is full)

    // let playerName = prompt("Please enter your name");
    // let playerGameSymbol = prompt("Please enter your symbol that you'll play with");
    
    // let player1 = Player(playerName, playerGameSymbol);
    const button = document.querySelector("#gameStartButton");
    button.addEventListener("click", () => {

        let main_form = document.querySelector("#main-form");
        main_form.style.visibility = "hidden";

        let main_div = document.querySelector("#main-div");
        main_div.style.visibility = "visible";
        
    })

})();