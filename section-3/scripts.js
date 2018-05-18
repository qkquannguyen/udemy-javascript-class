// --- Lecture : Hoisting
// Function Example
calculateAge(1995);
function calculateAge(yearOfBirth) {
    console.log(2018 - yearOfBirth);
}

// Can call calculateAge here or above calculateAge() because the function is scanned first
// Cannot call yearsUntilRetirement() here because it has yet not been declared

var yearsUntilRetirement = function(yearOfBirth) {
    console.log(65 - (2018 - yearOfBirth));
}

yearsUntilRetirement(1995)

// Variable Example
console.log(someVariable);  // This will log undefine due to hoisting
var someVariable = 1010;
console.log(someVariable);  // This will return 1010

// --- Lecture : 'this' Keyword
// In a regular function call, this -> Points at the Global Object (Window Object)
// In a method call, this -> points to the object that is calling the method
// this, is not assigned a value until a function where it is defined is actually called
calculateSum(5, 5);

function calculateSum(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
    console.log(this);
}

var guild = {
    name : 'REVOLUTION',
    yearOfBirth : '2016',
    calculateAge : function() {
        console.log(this);
        console.log(2018 - this.yearOfBirth);

        function innerFunction() {
            console.log(this);
        }
        innerFunction();
    }
}

guild.calculateAge();
