const randomDogImage = document.getElementById('randomDogImage');

fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(data => {
  randomDogImage.innerHTML = data
})
