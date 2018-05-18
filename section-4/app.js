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
 * DOM - Document Object Model. It is a structured representation of an HTML document. DOMs are used t
 * connect webpages to scripts like JS.
 * 
 * For each HTML Box, there is an object in the DOM that we can access and interact with.
 */

// ------------------------------ Global Variables Initialization ------------------------------ //
var playerScores, roundCount, currentPlayer;
playerScores = [0, 0];
roundCount = 0;
currentPlayer = 0;

