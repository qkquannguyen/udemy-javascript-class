// --- Lecture : Passing Functions as Arguments Examples
var years = [1990, 1965, 1937, 2005, 1998];

// someFxn - is a Callback Function
function arrayCalculation(array, someFxn) {
    var resultingArray = [];
    for (var i = 0 ; i < array.length ; i++) {
        resultingArray.push(someFxn(array[i]));
    }
    return resultingArray;
}

function calculateAge(someElement) {
    return 2018 - someElement;
}

function isFullAge(someElement) {
    return someElement >= 18;
}

function maxHeartRate(someElement) {
    if (someElement >= 18 && someElement <= 81) {
        return Math.round(206.9 - (0.67 * someElement));
    } else {
        return -1;
    }
}

var ages = arrayCalculation(years, calculateAge);
var fullAges = arrayCalculation(ages, isFullAge);
var rates = arrayCalculation(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);
