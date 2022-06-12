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


// Part 3
// TV series durations in my life

const seriesDurations = [
    {
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Sopranos",
        days: 3,
        hours: 14,
        minutes: 0,
    },
    {
        title: "The Wire",
        days: 2,
        hours: 12,
        minutes: 0,
    },
];


function calculateSeriesTime() {
    let total = 0;
    for (i = 0; i < seriesDurations; i++) {
        let timeSpent =
            ((seriesDurations[i].days * 24 * 60 +
                seriesDurations[i].hours * 60 +
                seriesDurations[i].minutes * 24) / (80 * 365 * 24 * 60)) * 100;
    }
    console.log(`{seriesDurations[i].title} took ${timeSpent.toFixed(3)}% of my life`
    );
    total += timeSpent;
};
calculateSeriesTime()




// Part 4
//   Note app

// Save a note

let notes = []
function saveNote(content, id) {
    notes.push({ content, id });
}

saveNote("Do HYF assignment", 1)
saveNote("Clean the house", 2)

console.log(notes);

// Get a note 

function getNote(id) {
    if (typeof id !== "number" || id === "") {
        return "error! Please enter a valid id";
    } else {
        for (index = 0; index < notes.length; index++) {
            if (id === note[index].id) {
                return note[index];
            }
        }
    }
}

const exampleNote = getNote(2);
console.log(exampleNote);


// log out notes

function logOutNotesFormatted() {
    for (let index = 0; index < note.length; index++) {
        console.log(`the note with id ${note[index].id} has the following note text: ${note[index].content}`)
    };
};

logOutNotesFormatted()