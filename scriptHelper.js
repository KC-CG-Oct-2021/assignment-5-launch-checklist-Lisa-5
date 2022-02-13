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
  let missionTarget = document.getElementById('missionTarget');
  missionTarget.innerHTML = `
  <h2>Mission Destination</h2>
            <ol>
                <li>Name: ${name}</li>
                <li>Diameter: ${diameter}</li>
                <li>Star: ${star}</li>
                <li>Distance from Earth: ${distance}</li>
                <li>Number of Moons: ${moons}</li>
            </ol>
            <img src="${imageUrl}">`;

  // Here is the HTML formatting for our mission target div.
  // /*
  //               <h2>Mission Destination</h2>
  //               <ol>
  //                   <li>Name: </li>
  //                   <li>Diameter: </li>
  //                   <li>Star: ${star}</li>
  //                   <li>Distance from Earth: </li>
  //                   <li>Number of Moons: </li>
  //               </ol>
  //               <img src="">
  //  */
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
  let pilotStatus = document.getElementById('pilotStatus');
  let copilotStatus = document.getElementById('copilotStatus');
  let fuelStatus = document.getElementById('fuelStatus');
  let cargoStatus = document.getElementById('cargoStatus');
  let launchStatus = document.getElementById('launchStatus');

  if (
    pilotValidation === 'Empty' ||
    copilotValidation === 'Empty' ||
    fuelLevelValidation === 'Empty' ||
    cargoLevelValidation === 'Empty'
  ) {
    alert('All fields are required!');
  } else if (
    pilotValidation === 'Is a Number' ||
    copilotValidation === 'Is a Number'
  ) {
    alert('Enter a valid name');
  } else if (
    fuelLevelValidation === 'Not a Number' ||
    cargoLevelValidation === 'Not a Number'
  ) {
    alert('Enter a valid number');
  }

  if (Number(fuelLevel) < 10000) {
    list.style.visibility = 'visible';
    launchStatus.style.color = 'red';
    launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelStatus.innerHTML = `Fuel level too low for launch`;
    cargoLevel.innerHTML = `Cargo mass too heavy for launch`;
  }

  if (Number(cargoLevel) > 10000) {
    list.style.visibility = 'visible';
    launchStatus.style.color = 'red';
    launchStatus.innerHTML = `Shuttle Not Ready for Launch`;
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelLevel.innerHTML = `Fuel level too low for launch`;
    cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
  }

  if (Number(cargoLevel) <= 10000 && Number(fuelLevel) >= 10000) {
    list.style.visibility = 'visible';
    launchStatus.style.color = 'green';
    launchStatus.innerHTML = `Shuttle is Ready for Launch`;
    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    fuelLevel.innerHTML = `Fuel level high enough for launch`;
    cargoLevel.innerHTML = `Cargo mass low enough for launch`;
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    'https://handlers.education.launchcode.org/static/planets.json'
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planet) {
  let index = Math.floor(Math.random() * planet.length);
  return planet[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
