// /**
//  * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
//  * @param {integer} min - The min number
//  * @param {integer} max - The max number
//  * @returns {Number} Random number between min and max
//  */
//  function randomIntFromInterval(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }


// /**
// * Get an array with listing objects with random color and speed
// * @param {integer} numberOfListings - The number of listings
// * @returns {array} Array containing the listing objects
// */
// function generateListings(numberOfListings) {
//   const listings = [];

//   const listingType = ['House', 'Apartment', 'Shed', 'Dorm', 'Farm'];
//   const listingFacilities = ['Parkering', 'Elevator', 'Altan', 'Have', 'Husdyr'];

//   for (let i = 0; i < numberOfListings; i++) {
//       const listing = {};
//       const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
//       const numberOfFacilities = randomIntFromInterval(1, listingFacilities.length - 1);
//       const facilities = [];
//       for(let i = 0; i < numberOfFacilities; i++) {
//           const randomIndexFacilities = randomIntFromInterval(0, listingFacilities.length - 1);
//           const randomFacility = listingFacilities[randomIndexFacilities];

//           if (!(facilities.includes(randomFacility))) {
//               facilities.push(randomFacility);
//           }
//       }

//       listing.type = listingType[randomTypeIndex];
//       listing.facilities = facilities;
//       listing.price = randomIntFromInterval(1, 10000);
//       listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
//       listing.size = randomIntFromInterval(12, 1000);
//       listing.img = `https://loremflickr.com/200/200/${listing.type}`

//       listings.push(listing);
//   }

//   return listings;
// }

// generateListings(20);

// console.log(generateListings(37))

// // using forEach

// let newList = generateListings(37)

// let listingSize = [];
// newList.forEach(function(list){
//   return listingSize.push(list.size);
// })

// console.log(listingSize)


// // using map

// let listPrices = newList.map((oneListing) => oneListing.price);
// console.log(listPrices)


// // Filter
// // Create an array of cheap listings. You define what cheap means. Each item in this array should be of type object


// const cheapItemsListings = newList.filter(function(item) {
//   return item.price < 3000
// })
// console.log(cheapItemsListings)


// // const cheapItemsListing = newList.filter (=>  )

// // Create an array of expensize listings prices. Each item in this array should be of type number

// const expensiveItemsListings = newList.filter(function(item) {
//   return item.price > 6000
// })
// console.log(expensiveItemsListings)

// // Create an array of listings that have parking. Each item in this array should be of type object

// const itemsWithParking = newList.filter(function(item) {
//   return item.facilities.includes("Parkering");

// })
// console.log(itemsWithParking)

// // Listing project
// // const hasFarmType = newList.filter.includes("farm")

//  listings = generateListings(20);

// const filteredObjects1 = {
//     type: 'farm',
// };

// const farmListings = filterListings(listings, filteredObjects);
// console.log(farmListings)


// function filterListings(listings, filteredObjects) {
// const filterType = filteredObjects.type;
// const minPrice = filteredObjects.minPrice;
// const maxPrice = filteredObjects.maxPrice;
// const minSize = filteredObjects.minSize;
// const maxSize = filteredObjects.maxSize;
// return listings.filter(oneListing) => (oneListing.type === filterType &&
//   oneListing.price > minPrice &&
//    oneListing.price < maxPrice &&
//    oneListing.hasGarden === hasGarden &&
//    oneListing.minSize > minSize &&
//    oneListing.maxSize < maxSize
// );
// }

// const listings = generateListings(20)
// const filteredObjects = {
//   type : "House"
//   minPrice: 5000,
//   maxPrice: 20000,
//   minSize: 0,
//   maxSize: 100000,
//   hasGarden : true
// };





const array = ["Mohammed", "Soqra", "Eli", "Mahtab", "Hamed", "Arman"]
array.forEach(function(item,index) {
  console.log(item,index);
})
