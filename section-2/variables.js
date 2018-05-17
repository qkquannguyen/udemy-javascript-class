/**
 * Javascript Attributes
 * 1. Dynamic Typing: JS automatically defines types for you. It does it on the fly
 * 2. Coersion: JS will automatically convert different datatypes when necessary
 * 3. Variable Mutation: JS can mutate variables. This means JS can change variable values after it has already been
 *    assigned. var X can first be an integer, then can be mutated into a string.
 */

 // --- Lecture: Variables Part 1
var personName = "REV--B3LL";
console.log(personName);

var personLastName = "Argonaut";
console.log(personLastName);

var personAge = 22;
console.log(personAge);

var personFullAge = true;
console.log(personFullAge);

// --- Lecture: Variables Part 2
// Example of Coercion
console.log(personName + personName);
console.log(personAge + personAge);

var personJob, isPersonMarried;
console.log(personJob);

personJob = "Software Developer Intern";
isPersonMarried = false;
console.log(personName + " " + personAge + " " + personJob + " " + isPersonMarried);

// Example of Variable Mutation
personJob = "Software Developer";
personAge = "22";
console.log(personName + " " + personAge + " " + personJob + " " + isPersonMarried);

// --- Example of using prompt()
// Gives users a prompt, in which they can enter some information or data
var personLastName = prompt("What is your last name?");
console.log(personLastName);

// --- Example of using alert()
// Gives users a pop-up alert on the screen
alert(personName + " " + personAge + " " + personJob + " " + isPersonMarried);

// --- Lecture: Operators
// Basic KNowledge, look at course resources for more information if needed
// "===" : Equal Operators, Does not do type coersion
// "=="  : Does Type Coersion
var yearOfBirth = 2018 - 22;
console.log(yearOfBirth);

// --- Lecture: If-Else Statements
if (isPersonMarried) {
    console.log(true);
} else {
    console.log(false);
}

// Type Coersion Example with "==" and "==="
// == : Includes type coersion
// This will log because JS will convert the integer 22 into a string and compare it
if (22 == "22") {
    console.log("The integer 22 is equal to the string '22'");
}

// === : Does not include type coersion
// This will not log the message because the integer 22 is NOT equal to the string 22
if (22 === "22") {
    console.log("The integer 22 is NOT equal to the string '22'");
}