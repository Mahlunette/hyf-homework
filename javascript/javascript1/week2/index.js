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



// Weather wear 
 
function decideWhatToWear(temperature){
    if(temperature < 0){
        return "Go with layers, wool can be a good option"
    } else if(temperature <= 15){
        return "Go with light duvet and leather"
    }else if(temperature <= 20){
        return "Go with cotton but carry a light jacket"
    }else {
        return "Have your light fabrics on. Enjoy the heat"
    }
}
    console.log(decideWhatToWear(26))

// student manager

const class07Students = [];
function addStudentToClass(studentName) {
  // You write code here
  if(class07Students.length >= 6){
      console.log("You cannot add more students to this class");
  }else if(class07Students.includes(studentName)){
      console.log(`${studentName} is already in the list`);
  }else if(studentName = ""){
      console.log("Enter student's name please")
  }else if (class07Students.length < 6 ||  studentName != "Queen Margrethe"){
      return class07Students.push(studentName);
  } else {
    return class07Students.push(studentName);
  }
};

// calling the function testing the conditions 
addStudentToClass("Mahtab")
addStudentToClass("Manisha")
addStudentToClass("Reenu")
addStudentToClass("Vie")
addStudentToClass("Lokesh")
addStudentToClass("Marie")
addStudentToClass("Mahtab")
addStudentToClass("Violeta")
addStudentToClass("Queen Margrethe")
addStudentToClass("")

console.log(addStudentToClass("Queen Margrethe"))


// This function gets the number of students
function getNumberOfStudents(number) {
  // You write code here
return `There are ${class07Students.length} students in this class`;

}
getNumberOfStudents(8);






