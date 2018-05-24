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
retirementUS(1995);
retirementFunction(65)(1995);