/**
 * GAME RULES:
 * 
 *  * The Game has 2 Players, playing in rounds.
 * In each turn, a player rolls a dice as many times as he whishes. 
 * Each result get added to his ROUND score.
 * BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn.
 * The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. 
 * After that, it's the next player's turn.
 * The first player to reach 100 points on GLOBAL score wins the game.
 */

/**
 * Lecture : DOM Manipulation
 * 
 * DOM - Document Object Model. It is a structured representation of an HTML document. 
 * DOMs are used to connect webpages to scripts like JS.
 * 
 * For each HTML Box, there is an object in the DOM that we can access and interact with.
 */

// ------------------------------ Global Variables Initialization ------------------------------ //
var playerScores, roundScore, currentPlayer, gamePlaying;

// --- Start a New Game
init();

//  --- Enable "Roll Dice" Button
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // 1. Random Number
        var diceValue = Math.floor(Math.random() * 6) + 1;

        // 2. Display Results
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + diceValue + '.png';


        // 3. Update the Current Round IF the rolled number was NOT a 1
        if (diceValue !== 1) {
            // Add Score
            roundScore += diceValue;
            document.querySelector('#current-' + currentPlayer).textContent = roundScore;
        } else {
            // Next Player Turn
            nextPlayer();
        }
    }
});

// --- Enable "Hold" Button
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add current score to player global score
        playerScores[currentPlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + currentPlayer).textContent = playerScores[currentPlayer];

        // Check if player won the game
        if (playerScores[currentPlayer] >= 100) {
            document.querySelector('#name-' + currentPlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + currentPlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + currentPlayer + '-panel').classList.remove('active');

            gamePlaying = false;
        } else {
            // Next Player Turn
            nextPlayer();
        }
    }
});

// --- Enable "New Game" Button
document.querySelector('.btn-new').addEventListener('click', init());

/**
 * init()
 * 
 * This Function will initialize a new game.
 * This will reset all scores and player turns.
 * 
 * @param none
 */
function init() {
    playerScores = [0, 0];
    roundScore = 0;
    currentPlayer = 0;
    gamePlaying = true;

    // DOM Manipulation
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

/**
 * nextPlayer()
 * 
 * This function handles the changing of players.
 * 
 * @param none
 */
function nextPlayer() {
    // Next Player Turn
    currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // Adding and Removing Classes in HTML
    // Toggle is better than add() and remove()
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

    document.querySelector('.dice').style.display = 'none';
}