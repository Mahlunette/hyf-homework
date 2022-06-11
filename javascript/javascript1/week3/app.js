/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 11/06/2022 - 22:27:23
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/06/2022
    * - Author          : 
    * - Modification    : 
**/

// Part 1
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
console.log(names.indexOf(0))
names.splice(1, 1)

// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']



// Part 2
//  When will we be there?
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

function estimateArrivalTime(speed, destinationDistance) {
    // to calculate the hours
    var decimalTime = (destinationDistance / speed);
    //   using floor and ceil to round numbers 
    var hours = Math.floor(decimalTime)
    var minutesInDecimal = (decimalTime - hours) * 60
    var minutes = Math.floor(minutesInDecimal)

    return `${hours} hour and ${minutes} minutes`
    // This should give us 8 hours and 38 minutes 
}

console.log(estimateArrivalTime(50, 432))
