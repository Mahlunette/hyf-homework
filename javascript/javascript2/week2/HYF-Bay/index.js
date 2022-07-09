//  exercise 2

const inputName = document.getElementById('input');
const btn = document.getElementById('btn');
const output = document.getElementById('par');
const animalsArray = ['Elephant', 'Mouse', 'Dog', 'Cat', 'Rabbit', 'Monkey', 'Frog', 'Donkey',];

btn.addEventListener('click', () => {
  const nameValue = inputName.value;
  const randomNum = Math.floor(Math.random() * animalsArray.length);
  output.innerHTML = `${nameValue} is a ${animalsArray[randomNum]}`;
});


// Exercise 3

const listOut = document.getElementById('product-list'); //This returns an element object with the same unique id name from the html file
const products = getAvailableProducts();
console.log(products); //This should create the ul and the li's with the individual products details

function renderProducts(products) {
  //create the HTML elements by tag names
const listItem = document.createElement('li');
const title = document.createElement('h3');
const paragraph = document.createElement('p');
//inject inside the title already created above
title.innerHTML = `Name: ${products.name}`;
 //inject inside the paragraph already created above
paragraph.innerHTML = `Price: ${products.price}`;
//add children to the list item
listItem.appendChild(title);
listItem.appendChild(paragraph);
listOut.appendChild(listItem);
}
//executing the function for each product
products.forEach((product) => renderProducts(product));

// Week 3/ Part 3
// Filtering the products based on the price
listOut.innerHTML= ""
const maximumPrice = Number(event.target.value);
if (maximumPrice === 0) {
  products.forEach((product) => renderProducts(product));
}else {
  products.filter(product => product.price < maximumPrice).forEach((product) => renderProducts(product))
}
