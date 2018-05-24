// --- Lecture : Closure
// Closure - An inner function has always access to the variables and parameters of its outer function.
//           Even after the outer function has returned
function retirementFunction(retirementAge) {
    var a = ' years left until retirement!';
    return function(yearOfBirth) {
        var someAge = 2016 - yearOfBirth;
        console.log((retirementAge - someAge) + a);
    }
}

var retirementUS = retirementFunction(65);
var retirementGermany = retirementFunction(65);
var retirementIceland = retirementFunction(67);

retirementUS(1995);
retirementGermany(1995);
retirementIceland(1995);

// Alternative way to write the code above
// retirementFunction(65)(1995);

function interviewQuestions(someJob) {
    return function(someName) {
        if (someJob === 'engineer') {
            console.log(someName + ', do you know what closure is?');
        }
        else if (someJob === 'professor') {
            console.log(someName + ', what courses do you teach?');
        } else {
            console.log('Hello ' + someName + ', what do you do for a living?');
        }
    }
}

// NOTES: Explanation of Code below
// interviewQuestions('professor') : This will return the function in lines 24-33
// ('Maria') : Is passed in function('someName') in Line 24
interviewQuestions('professor')('Maria');

