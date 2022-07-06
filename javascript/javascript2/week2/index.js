// let numbers = [1, 2, 3, 4];
// let newNumbers = [];

// const oddNumber = numbers.map(function(number){
// return newNumbers.push(number % 2 === 0)
// });

// console.log("The doubled numbers are", newNumbers);


let numbers = [1, 2, 3, 4]
let newNumbers =[]

numbers.map(function(number){
    if (numbers % 2 != 0) {
      newNumbers = numbers * 2;
    }
  })
  console.log(newNumbers);
