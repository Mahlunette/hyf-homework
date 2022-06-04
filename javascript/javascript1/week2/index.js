// fullname function 
function getFullname(firstname,surname){
    console.log(`Full name is ${firstname} ${surname}`);
}

getFullname("Mahtab", "Mahdavifar")

// declaring 2 variable
const fullname1 = "Mary Shelly"
const fullname2 = "Johny Shelly"

console.log(getFullname(fullname1,fullname2));


// create a formalName

function getFullname(firstname,surname,useFormalName) {
    if(useFormalName === true){
        return `Lord ${firstname} ${surname}`;
    }else if(firstname === "" || surname === ""){
        return `Please add your name`;
    } else {
        return `${firstname} ${surname}`
}
};

console.log(getFullname("Hamed", "Mahdavifar"));

// declaring with lord

console.log(getFullname("Mahtab", "Mahdavifar", true))


// declaring without lord
console.log(getFullname("Mahtab", "Mahdavifar", false))

// calling a function with empty string 
console.log(getFullname(""))

// calling a function with no arguments (the result seems to be undefined)

console.log(getFullname())

// it seems that it is only possible to add the psarameter of gender 
// and define it with an if statment if we'd like to include another gender(s) in. 



// Event application
// using the getDay method which returns the weekday as a number:


const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

function getEventWeekday(eventDayFromToday){
    const date = new Date();
    let today = date.getDay()
    // console.log(today)
    let event = [(today + eventDayFromToday)%7];
    // I should remember that I need to return weekdays in ana array 
    return weekDays[event]
};

    console.log(getEventWeekday(8));










