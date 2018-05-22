/**
 * Section 5 Lecture Notes
 * 
 *  - Everything is an object... (Almost Everything). This is one of the unique and fundamental
 *  things about JS compared to other languages.
 *  - Object Oriented Programming : Objects interacting with one anotehr through methods and properties.
 *  Additionally, used to store data, structures, etc.
 *  - Constructor : Acts as a blueprint and creates instances of objects
 *  - Inheritance : When one object is based on another object.
 *  - JS is a prototype based language. Each and every JS Object, has a Prototype property.
 *  Therefore, every JS Object has a prototype property, making inheritance possible.
 */

// --- Function Constructor
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// Inheritance Example
Person.prototype.calclateAge = function() {
    console.log(2018 - this.yearOfBirth);
};

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calclateAge();
jane.calclateAge();
mark.calclateAge();
