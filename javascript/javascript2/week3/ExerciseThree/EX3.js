// Create an input and a button in html. When the button is clicked,
// get the value of the input.
// This value will be the amount of time the game should run.

let time = document.getElementById("time-input")
let start = document.getElementById("start-button")

function gameStart() {
  if(time == 0 || time == ""){
    console.log("Enter a valid time to start the game");
  }else {
    start.addEventListener("click", gameStart)
}
}

// Set a timeout for the time specified by the user.
//  After that time has run out just log out a simple string.
const userOneArea = document.getElementById("user-one-area")
const userTwoArea = document.getElementById("user-two-area")


// Create an event listener so you can call a function when any key is pressed.
// Now grap the actual key that was pressed. Fx was it a j or an i.
// We are interested in s and l. Here google is your friend!



// Keep a counter for how many times l and s was pressed.


// Now put it all together! After the timeout is done figure out which
// of the counters is largest. Give some kind of
// feedback to the users indicating who won.
