// --- Lecture : JS Objects
var guildObject = {
    guildName : 'REVOLUTION',
    guildRank : '1',
    guildLeader : 'REV--B3LL',
    guildStatus : 'active'
};

// Display the Object
console.log(guildObject);

// Display a particular value in the object
console.log(guildObject.guildName);
console.log(guildObject['guildRank']);

// Change values in the objects
guildObject.guildStatus = 'disbanded';
guildObject.guildLeader = 'El Bardu';

console.log(guildObject);

// Another way to declare a JS Object
var guildLuminous = new Object();
guildLuminous.guildName = 'Luminous';
guildLuminous.guildRank = '2';
guildLuminous.guildLeader = 'Sokury';
guildLuminous.guildStatus = 'active';

console.log(guildLuminous);