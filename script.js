
import {board} from "./gameboard.js";

/*
    1. Store gameboard as an array inside of a Gameboard object
    2. Player objects
    3. Game mechanics object
    // Side note: use as few global names as possible
    //            modules: only need one of it, so "gameBoard", "display"
                  factory: need multiples, "players"
*/

function Player(name, playSymbol) {
    return { name, playSymbol };
}

(function playGame() {
    // How the game will play out
    // 1. Ask player for name & playSymbol
    // 2. Game starts
    // 3. Let player go first
    // 4. AI then goes
    // 5. Game ends either (3 consecutive gameSymbols) || (board is full)

    // let playerName = prompt("Please enter your name");
    // let playerGameSymbol = prompt("Please enter your symbol that you'll play with");
    
    let player1;

    const button = document.querySelector("#gameStartButton");
    button.addEventListener("click", () => {

        let main_form = document.querySelector("#main-form");
        // !! player1 = Player(playerName, playerGameSymbol)
        let playerName, playerGameSymbol;
        for (let index = 0; index < main_form.length; index++) {
            let element = main_form.elements[index].value;
            if (element) {
                if (index == 0) {
                    playerName = element;
                }
                if (index == 1) {
                    playerGameSymbol = element;
                }
            }
        }

        player1 = Player(playerName, playerGameSymbol);

        main_form.style.visibility = "hidden";

        let main_div = document.querySelector("#main-div");
        main_div.style.visibility = "visible";

        let input_form = document.querySelector("#player1-input-form");
        input_form.style.visibility = "visible";
   
        

    });

})();