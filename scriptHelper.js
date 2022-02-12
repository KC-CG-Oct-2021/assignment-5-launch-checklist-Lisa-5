// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if (testInput === "") {
        alert("Empty");
    } else if (isNaN(testInput) == true) {
        alert("Not a Number"); 
    } else if  (isNaN(testInput) === false) {
        alert("Is a Number")
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  window.addEventListener('load', (event) => {
    let form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
      if (
        pilot.value === '' ||
        copilot.value === '' ||
        fuelLevel.value === '' ||
        cargoLevel.value === ''
      ) {
        alert('All fields are required!');
        event.preventDefault();
      }
    });
  });
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {});

  return planetsReturned;
}
myFetch();
function pickPlanet(planet) {
 planet = Math.floor(Math.random(planetsReturned)*10);

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
