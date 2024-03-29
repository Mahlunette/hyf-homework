// Exercise 1 part 1: using reduce method

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
var shortestWord;
function getShortestWord(words) {
  words.reduce(function (a, b) {
    return a.length <= b.length ? (shortestWord = a) : b;
  });
  console.log(shortestWord);
}
 getShortestWord(danishWords);

//  Exercise 1 part 2: Using regex
const danishString = "Jeg har en blå bil";
countdanishVowels(danishString); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
countdanishVowels(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}

function countdanishVowels(danishString) {
  let matchRegex = danishString.match(/[æåø]/gi);
  if(matchRegex){
       console.log(`total ${ matchRegex.length}: {${ matchRegex} } `)
      return  matchRegex.length
  }
 }
