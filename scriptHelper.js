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
  if (testInput === '') {
    return 'Empty';
  } else if (isNaN(testInput)) {
    return 'Not a Number';
  } else if (!isNaN(testInput)) {
    return 'Is a Number';
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

      let pilotValidation = validateInput(pilot);
      let copilotValidation = validateInput(copilot);
      let fuelLevelValidation = validateInput(fuelLevel);
      let cargoLevelValidation = validateInput(cargoLevel);
      
      if (
        pilotValidation === 'Empty' ||
        copilotValidation === 'Empty' ||
        fuelLevelValidation === 'Empty' ||
        cargoLevelValidation === 'Empty'
      ) {
        alert('All fields are required!');
      }  else if (
        pilotValidation === 'Is a Number' ||
        copilotValidation === 'Is a Number' ||
        fuelLevelValidation === 'Not a Number' ||
        cargoLevelValidation === 'Not a Number'
      ) {  
          alert("Enter Valid Input");
    
      } 
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    'https://handlers.education.launchcode.org/static/planets.json'
  ).then(function (response) {
    response.json().then(function (json) {
      console.log(json);
    });
  });

  return planetsReturned;
}

function pickPlanet(planet) {
  planet = Math.floor(Math.random(planetsReturned) * 10);
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
