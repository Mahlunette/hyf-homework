// Call back function
let logCall = function(){
  console.log("logCall was called back");
}

setTimeout(logCall,3000);

// Anonymous callback function
setTimeout(function(){
  console.log("logCall was called back")
}, 3000)

// addEventListener is a callback function

let btn = document.querySelector("#item1")
btn.addEventListener("click", function(event){
  console.log("the buton was clicked")
})


let students = [{name: "John", score: 1, school:"East"},
 {name: "John", score: 40, school:"West"},
 {name: "Mary", score: 50, school:"West"},
 {name: "Joli", score: 90, school:"East"},
 {name: "Eli", score: 95, school:"East"}]

 let processStudents = function(data, callback){
  for (let i = 0; i < students.length; i++) {
    if(data[i].school.toLowerCase() == "east"){

      if(typeof callback == "function"){
        callback(data[i])
      }
    }
 }
}

processStudents(students, function(obj){
if(obj.score > 60){
  console.log(obj.name + " passed");
}
});

let determinTotal = function(){
  total = 0;
  count = 0;
  processStudents(students, function(obj){
    total += obj.score;
    count ++
  })
}


// Geolocation API


