// --- Lecture : Arrays
// Different ways to declare a new Array
var nameArray = ['REVOLUTION', 'Luminous', 'NightCrow'];
var rankArray = new Array(1, 2, 3);
console.log(nameArray);

// Add Element to Array
// push() : Adds element at end of array
nameArray.push('Lunette');
console.log(nameArray);

// unshift() : Adds element at beginning of array
nameArray.unshift('7K Global Guilds');
console.log(nameArray);

// pop() : Pops out the element at the end of array and returns it
nameArray.pop();
console.log(nameArray);

// shift() : Removes first element in array
nameArray.shift();
console.log(nameArray);

// indexOf() : Returns index of element given
// Returns -1 if the element is not in the array
console.log(nameArray.indexOf('REVOLUTION'));
