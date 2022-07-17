// Create an array with 3 items. All items should be functions.
// Iterate through the array and call all the functions.

const function1 = function(){
  console.log("FunctionOne");
}

const function2 = function(){
  console.log("FunctionTwo");
}

const function3 = function(){
  console.log("FunctionThree");
}

const functionArray = [function1, function2, function3]

functionArray.forEach((item, index) =>{
console.log(item,index)
})


// Create a function as a const and
// try creating a function normally.
// Call both functions. Read up on this if you are interested:

const multiply = function(num1, num2) {
  return num1 * num2
}

function division(num1, num2){
   return num1 / num2
}

console.log(multiply(4,8)); //output = 32
console.log(division(8,4)); //output = 2


// Create an object that has a key whose value is a
// function. Try calling this function.

const sum = (a,b)=> {a+b}
const subjects = {maths: sum}

console.log(subjects.maths);
