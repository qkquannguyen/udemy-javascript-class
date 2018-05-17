// --- Lecture: Functions
function calculateAge(yearOfBirth) {
    var currentYear = 2018;
    return currentYear - yearOfBirth; 
}

function yearsUntilRetirement(personName, yearOfBirth) {
    var personAge = calculateAge(yearOfBirth);
    return 65 - personAge;
}

console.log(yearsUntilRetirement("B3LL", 1995));