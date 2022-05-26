// AGE-IFY exercise

const yearOfBirth = 1985;
const yearfuture = 2045;

const myAge = yearfuture - yearOfBirth;
console.log(myAge);

console.log("You will be " + myAge + " " + "years old in " + yearfuture + ".");


// Goodbye OLdboy exercise 
const dogYearOfBirth = 2018; 
const dogYearFuture = 2025;
 const dogYear = dogYearFuture - dogYearOfBirth ;
 const dogInHumanYear = dogYear * 7 ;

let shouldShowResultInDogYears = dogYear;
if (shouldShowResultInDogYears) {
    console.log("my dog will be " + dogYear + "dog year old in " + " " + dogYearFuture + "." ) 
    } else { 
        console.log("my dog will be " + dogInHumanYear + " human year old in " + dogYearFuture + ".")

    };


    // Housey-Pricy
    // const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
   
    // for peter
    const peterHouseWidth = 8 ;
    const peterHouseHeight = 10;
    const peterHousedepth = 10;
    const peterGardenSize = 100;
    const peterpaid = 2500000;


    // calculation

    const peterHousePrice = (peterHouseWidth*peterHouseHeight*peterHousedepth) * 2.5 * 1000 * peterGardenSize * 300 
   

    if (peterpaid > peterHousePrice ) {
        console.log("You paid too much")
    } else if (peterpaid === peterHousePrice) {
        console.log("You paid a good price") 
         }  else {
        console.log("You are very lucky! the real price is higher")
        } ;
    

           
    // for Julia
    const juliaHouseWidth = 5 ;
    const juliaHouseHeight = 8;
    const juliaHousedepth = 11;
    const juliaGardenSize = 70;
    const juliapaid = 1000000;


    // calculation

    const juliaHousePrice = (juliaHouseWidth*juliaHouseHeight*juliaHousedepth) * 2.5 * 1000 * juliaGardenSize * 300 
   

    if (juliapaid > juliaHousePrice ) {
        console.log("You paid too much")
    } else if (juliapaid === juliaHousePrice) {
        console.log("You paid a good price") 
         }  else {
        console.log("You are very lucky! the real price is higher")
        } ;

 console.log(juliapaid === 1000000)



