// Exercide 1:double the odd numbers/ throw the even numbers
let numbers = [1, 2, 3, 4];
let newNumbers = []

const oddNumber = numbers.filter(function(number){
if (number % 2 === 0){
  newNumbers.push(number * 2)
}
});

console.log(oddNumber);


// let numbers = [1, 2, 3, 4]
// let newNumbers =[]

// numbers.map(function(i){
//     if (numbers[i] % 2 != 0) {
//       newNumbers[i] = numbers[i] * 2;
//     }else{
//       newNumbers.delete
//     }
//   })
//   console.log(newNumbers);


listOut.innerHTML= ""
const maximumPrice = Number(event.target.value);
if (maximumPrice === 0) {
  products.forEach((product) => renderProducts(product));
}else {
  products.filter(product => product.price < maximumPrice).forEach((product) => renderProducts(product))
}
})


