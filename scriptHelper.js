// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTargetElement = document.getElementById("missionTarget");
    missionTargetElement.innerHTML = 
    // Here is the HTML formatting for our mission target div.

                 `<h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons:${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
`
}

function validateInput(testInput) {
    if (testInput == "" || testInput == null) {
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
        list.style.visibility= "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

        if (Number(fuelLevel) < 10000) {
            fuelLevelElement.innerHTML = "Too little fuel!";
            launchStatusElement.innerHTML = "Shuttle Not Ready for Launch";
            launchStatusElement.style.color = "red";
        } else if (Number(cargoLevel) > 10000) {
            cargoMassElement.innerHTML = "Cargo mass too heavy for launch";
            launchStatusElement.innerHTML = "Shuttle Not Ready for Launch";
            launchStatusElement.style.color = "red";
        } else if (Number(cargoLevel) <= 10000 && Number(fuelLevel) >= 10000) {
            fuelLevelElement.innerHTML = "Fuel level high enough for launch";
            cargoMassElement.innerHTML = "Cargo mass low enough for launch";
            launchStatusElement.innerHTML = "Shuttle is Ready for Launch";
            launchStatusElement.style.color = "green";
        }
    }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let planetindex = Math.floor(Math.random() * planets.length);
    return planets[planetindex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;