// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
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
    if (testInput === "" || testInput === null) {
        return "Empty";
    } else if (!isNaN(Number(testInput))) {
        return "Is a Number";
    } else {
        return "Not a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelLevelElement = document.getElementById("fuelStatus");
    let launchStatusElement = document.getElementById("launchStatus");
    let cargoMassElement = document.getElementById("cargoStatus");

    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" ||
        validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required");
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Please enter numerical values for Fuel Level and Cargo Mass!");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Please enter vaild names for Pilot and Copilot!");
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready`;
        list.style.visibility = "hidden";
    }

    if (Number(fuelLevel) < 10000) {
        fuelLevelElement.innerHTML = "Too little fuel!";
        list.style.visibility = "visible";
        launchStatusElement.innerHTML = "Shuttle not ready for launch!";
        launchStatusElement.style.color = "red";
    } else if (Number(cargoLevel) > 10000) {
        cargoMassElement.innerHTML = "Too much cargo!";
        list.style.visibility = "visible";
        launchStatusElement.innerHTML = "Shuttle not ready for launch!";
        launchStatusElement.style.color = "red";
    } else if (Number(cargoLevel) < 10000 && Number(fuelLevel) > 10000) {
        list.style.visibility = "visible";
        fuelLevelElement.innerHTML = "Enough fuel for your journey!";
        cargoMassElement.innerHTML = "Cargo light enough for takeoff!";
        launchStatusElement.innerHTML = "Shuttle ready for launch!";
        launchStatusElement.style.color = "green";
    }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;