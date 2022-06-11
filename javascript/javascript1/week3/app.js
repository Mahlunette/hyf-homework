/**
    * @description      : 
    * @author           : 
    * @group            : 
    * @created          : 11/06/2022 - 22:27:23
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 11/06/2022
    * - Author          : 
    * - Modification    : 
**/
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const nameToRemove = "Ahmad";
  
  // Write some code here
  console.log(names.indexOf(0))
  names.splice(1,1)
  
  // Code done
  
  console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']