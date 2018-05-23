// --- Lecture : IIFE - Immediate Invoked Functional Expressions
// IIFE is used to create data privacy, not to create a piece of resuable code
// Example 1
function someGame() {
    var someScore = Math.random() * 10;
    console.log(someScore >= 5);
}
someGame();

// Example 2
// Wrapping the function around a parenthesis lets JS treat this as an
// a expression and not a statement. What is in a parenthesis in JS cannot
// be a statement.
(function () {
    var someScore = Math.random() * 10;
    console.log(someScore >= 5);
})();

// This line will not execute because we have data privacy with how this code is written
// console.log(someScore);