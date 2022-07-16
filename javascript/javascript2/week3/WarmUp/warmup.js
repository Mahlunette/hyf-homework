// // Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
// Method 1

let called = function(){
  console.log("Called");
}

setTimeout(function(){
  console.log("Called");
}, 2500);

// method 2
let calledLater = (sec) => {
  setTimeout(() => { console.log(`This is logged after ${sec} seconds`)}
  );
}
calledLater(6)

// // Create a function that takes 2 parameters: delay and stringToLog.
// // Calling this function should log out the stringToLog after delay seconds.
// // Call the function you have created with some different arguments.

// I expected this to work too but it didnt

// method 1
// let stringLogify = function(delay, stringToLog) {
//     console.log(stringToLog)

// setTimeout(function(delay, stringToLog) {
//   console.log(stringToLog);
// }, delay * 1000);
// }

// method 2
let stringLogify = (delay, stringToLog) => {
  setTimeout(() => { console.log(stringToLog) }, delay * 1000);
}

stringLogify(6, "This string logged after 6 seconds")
stringLogify(10, "This string logged after 10 seconds")

// Create a button in html. When clicking this button, use the f
// unction you created in the previous task to log out the text:
// Called after 5 seconds 5 seconds after the button is clicked.

let btn = document.querySelector("#item1")
btn.addEventListener("click", (delay) => {
  setTimeout(() => { console.log("Called after 5 seconds 5 seconds after the button is clicked")
}, 5000);
})


// Create two functions and assign them to two different variables.
//  One function logs out Earth, the other function logs out Saturn.
//  Now create a new third function that has one parameter: planetLogFunction.
//  The only thing the third function should do is call the provided parameter function.
//  Try call the third function once with the Earth function and once with the Saturn function.

let earthLogger = function(){
  console.log("Earth");
}

let saturnLogger = function(){
  console.log("Saturn");
}

function planetLogFunction(callback) {
  callback();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);


// Create a button with the text called "Log location".
// When this button is clicked the location (latitude, longitude)
// of the user should be logged out using this browser api

// Method one

// const locationButton = document.querySelector("#locationButton")

// locationButton.addEventListener("click", () => {
//   navigator.geolocation.getCurrentPosition((position) => {
//     console.log(
//       `Latitude :${position.coords.latitude} Longitude:${position.coords.longitude}`
//     )
// })
// }
// )

// method two

const locationButton = document.querySelector('#locationButton')

const successCallback = (position) => {
  console.log("position");
}

const errorCallback = (error) => {
 console.error("error");
}

locationButton.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  console.log(
          `Latitude :${position.coords.latitude} Longitude:${position.coords.longitude}`
        )
    });


    // Create a function called runAfterDelay. It has two parameters: delay and callback.
    // When called the function should wait delay seconds and then call the provided callback function.
    // Try and call this function with different delays and different callback functions

    function runAfterDelay(delay, callback) {
      setTimeout(() => {
        return callback();
       } , delay * 1000)
    }

    runAfterDelay(12,function () {
      console.log('should be logged after 12 seconds');
    })

    // Check if we have double clicked on the page.
    // A double click is defined by two clicks within 0.5 seconds.
    //  If a double click has been detected, log out the text: "double click!"

    window.addEventListener("dblclick", function() {
      console.log("double click!");
    });

    // Create a function called jokeCreator that has three parameters:
    // shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke -
    // function. If you set shouldTellFunnyJoke to true it should call the logFunnyJoke
    // function that should log out a funny joke. And vice versa.

    let funnyJoke = function (){
      console.log("Funny");
      };

      let badJoke = function (){
        console.log("Not Funny");
        };

    let jokeCreator = function(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
      if (shouldTellFunnyJoke === true) {
        logFunnyJoke();
        }else{
          logBadJoke();
        }
      }
      jokeCreator(true,funnyJoke, badJoke)
