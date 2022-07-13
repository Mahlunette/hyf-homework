fetch("http://api.open-notify.org/astros.json")
  .then((response) => response.json())
  .then((data) => {
    const listOfAstro = document.getElementById("astraunants");
    const astoName = document.getElementById("astraunantsNames");
    const p = document.createElement("p");
    p.innerHTML = `There are ${data.people.length} astronauts in space, they are`;
    listOfAstro.appendChild(p);
    data.people.forEach((person) => {
      p.innerHTML = person.name;
      listOfAstro.appendChild(p);
    });
  });
