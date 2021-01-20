//buttons
const player1Button = document.querySelector('#player1');
const player2Button = document.querySelector('#player2');
const resetButton = document.querySelector('.reset');
//max Number
const numberSelect = document.querySelector('#numberSelect');
//score display
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const gameWinner = document.querySelector('#gameWinner');

let p1Count = 0;
let p2Count = 0;

//player 1 Count
player1Button.addEventListener('click', () =>{
    p1Count++;
    p1Display.textContent = p1Count;
    endGame();
    changeColor();
})
//player 2 Count
player2Button.addEventListener('click', () =>{
    p2Count++;
    p2Display.textContent = p2Count;
    endGame();
    changeColor();
}) 

// Disable buttons when game is over
const endGame = () =>{
    if (p1Count  === parseInt(numberSelect.value) || p2Count === parseInt(numberSelect.value)){
        player1Button.disabled = true;
        player2Button.disabled = true;
    }
}

//Change color of player score when game is over
const changeColor = () =>{
    if (p1Count === parseInt(numberSelect.value)){
        p1Display.setAttribute('class', 'winner');
        p2Display.setAttribute('class','loser');
        gameWinner.textContent = "Player 1 Wins!";
    }else if (p2Count === parseInt(numberSelect.value)){
            p2Display.setAttribute('class', 'winner')
            p1Display.setAttribute('class','loser');
            gameWinner.textContent = "Player 2 Wins!";
    }
}

//Reset Game
const reset = () =>{
    [p1Count,p2Count] = [0,0];
    player1Button.disabled = false;
    player2Button.disabled = false;
    p1Display.removeAttribute('class');
    p2Display.removeAttribute('class');
    p1Display.textContent = p1Count;
    p2Display.textContent = p2Count;
    gameWinner.textContent = "";
}
numberSelect.addEventListener('change',() =>{
    reset();
})
resetButton.addEventListener('click', reset)

