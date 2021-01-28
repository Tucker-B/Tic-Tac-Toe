/*
    ** TODO_LIST **
    1. Add win-condition/gamestop functionality where 
    (3 symbols line up || impossible to do so anymore), whichever comes first.

    2. Make board not be full of 'B's, and instead be blank with
    nice horizontal and vertical lines separating the rows & columns.

    3. Add stylizing to page to make it look prettier and less bland.

    4. Add functionality for 2 players.

    5. Add statistics tracking (# of times winning)

    6. Create WIN / LOSE Screen popup after game

    7. AI Difficulty Options
*/
import {board, blankSpaceOnBoard, checkForWinCondition} from "./gameboard.js";
import {play} from "./play.js";
import {getComputerGameSymbol, computerPlay} from "./computer_ai.js";

function Player(name, playSymbol) {
    return { name, playSymbol };
}

(function game() {
    // How the game will play out
    // 1. Ask player for name & playSymbol
    // 2. Game starts
    // 3. Let player go first
    // 4. AI then goes
    // 5. Game ends either (3 symbols line up || impossible to do so anymore)
    
    let player1;

    const gameStartButton = document.querySelector("#gameStartButton");
    gameStartButton.addEventListener("click", () => {
        // Retrieving gameSymbol and playerName from main-form
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

    const player1InputButton = document.querySelector("#player1InputButton");
    player1InputButton.addEventListener("click", () => {

        let player1_input_form = document.querySelector("#player1-input-form");

        let xInput, yInput;

        for (let index = 0; index < player1_input_form.length; index++) {
            let element = player1_input_form.elements[index].value;
            if (element) {
                if (index == 0) {
                    yInput = element;
                }
                if (index == 1) {
                    xInput = element;
                }
            }
        }

        console.log("Player1: [" + yInput + "," + xInput + "]");

        play(board, blankSpaceOnBoard, 'X', xInput, yInput);

        let computerGameSymbol = getComputerGameSymbol('X');
        checkForWinCondition(board, 'X', computerGameSymbol);

        computerPlay(board, blankSpaceOnBoard, computerGameSymbol);

        checkForWinCondition(board, 'X', computerGameSymbol);
        
        
    })
})();