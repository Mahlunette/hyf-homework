// Write it with if statement
const command = ""
let userName = ""
const toDoList = []
const today = new Date()

function getReply(command){
  if(command === " " || typeof command === !"string"){
    throw new Error("Please add some valid commands")
  }else if (command.includes("hello, my name is") && userName == ""){
    userName = command.split(" ").pop();
    return `Nice to meet you ${userName}`;
  }else if(userName === " "){
    return "Please add your name"
  }else if(command.includes("what is my name")){
    return `Your name is ${userName} `
  }

  function toDo(command)
    if(command === "Add fishing to my todo"){
     toDoList.push("fishing")
     return toDoList[0] + " " + "is added to your list.";
  }else if(command === "Add singing int he shower to my todo"){
    toDoList.push("singing in the shower")
    return toDoList[1] + " " + "is added to your list.";
  }else if(command === "Remove fishing from my todo list"){
    toDoList.splice(toDoList.indexOf("fishing"), 1);
    return `Removed ${indexOfFishing} from todo`
  }else if(command === "What is in my todo"){
    return Array.from(toDoList)
  }
  function getDate(command){
  } if(command === "what day is today?"){
    return today.toDateString()
  }

  function doMath(command){
   if(command.includes("what is")){
    // this was challenging and I learned it from Andrei's comment on Slack
    const stringOperations = command.replace("what is ", "");
    const array = stringOperations.split("");
      if (array[1] === "+") {
        return array[0] + array[2]
      }else if (array[1] === "-") {
        return array[0] - array[2]
      }else if (array[1] === "*") {
        return array[0] * array[2]
      }else if (array[1] === "/") {
        return array[0] / array[2]
      }
    }
  }
  };

function setTimer(command){
  if(command === "set a timer for 4 minutes"){
      setTimeout(console.log, 4 * 60 * 1000, "Timer done");
      return "Timer set for 4 minutes";
    }
  }

  // console.log(getReply("hello, my name is Mahtab"))
// console.log(getReply("what is my name"))
// console.log(toDo("Add fishing to my todo"))
// console.log(toDo("Add singing in the shower to my todo"))
// console.log(toDo("What is in my todo"))
// console.log(getDate("what day is today?"))
// console.log(setTimer("set timer for 4 minutes"))
