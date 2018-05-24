// --- Lecture : Bind, Call, and Apply
var maria = {
    name : 'Maria',
    age : '21',
    job : 'teacher',
    presentation : function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', everyone! I\'m ' 
                        + this.name + ' and I\'m ' 
                        + this.job + '. I\'m ' 
                        + this.age + ' years old.');
        }
        else if (style === 'informal') {
            console.log('Hey! What\'sup? I\'m ' 
                        + this.name + ' and I\'m a ' 
                        + this.job + '. I\'m ' 
                        + this.age + ' years old. I hope you have a nice ' 
                        + timeOfDay + '.')
        }
    }
};

var quan = {
    name : 'Quan',
    age : '22',
    job : 'engineer'
};

maria.presentation('formal', 'morning');

// Call Method Example
// call() - Lets you borrow a method. In this case, we borrow the Maria Method
//          in order to have Quan work.
maria.presentation.call(quan, 'informal', 'afternoon');

// Bind Method Example
// bind() - Returns a function. Makes a function for the informal part of the presentation
var mariaInformal = maria.presentation.bind(maria, 'informal');
mariaInformal('morning');
mariaInformal('night');

var quanFormal = maria.presentation.bind(quan, 'formal');
quanFormal('afternoon');

// Apply Method Example
maria.presentation.apply(quan, ['informal', 'afternoon']);

// We revisit this age calculation example. By using Bind,
// we can create much cleaner code.
var years = [1990, 1965, 1937, 2005, 1998];

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

function isFullAge(ageLimit, someElement) {
    return someElement >= 18;
}

var someAges = arrayCalculation(years, calculateAge);
var fullJapan = arrayCalculation(someAges, isFullAge.bind(this, 20));
console.log(someAges);
console.log(fullJapan);