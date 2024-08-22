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
    if (!isNaN(testInput)) {
        return "Is a Number";
    } else if (testInput == "") {
        return "Empty";
    } else {
        return "Not a Number";
    }
}

function formSubmission(document, pilot, copilot, fuelLevel, cargoLevel) {
    let launchReady = true;
    // change faultyItems to visible
    let faultyItemsElment = document.getElementById("faultyItems");
    faultyItemsElment.style.visibility = "visible";

    let pilotStatusElement = document.getElementById("pilotStatus");
    pilotStatusElement.innerHTML = `${pilot} Ready`;

    let copilotStatusElement = document.getElementById("copilotStatus");
    copilotStatusElement.innerHTML = `${copilot} Ready`;

    let fuelLevelElement = document.getElementById("fuelStatus");
    if (validateInput(fuelLevel) == "Is a Number") {
        if (fuelLevel >= "10000") {
            fuelLevelElement.innerHTML = "You have enough fuel!";
        } else if (fuelLevel <= "10000") {
            fuelLevelElement.innerHTML = "Too little fuel!";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
            document.getElementById("launchStatus").style.color = "red";
            launchReady = false;
        } else {
            fuelLevelElement.innerHTML = "Please enter vaild numeric fuel level!";
            launchReady = false;
        }
    } else {
        fuelLevelElement.innerHTML = "Please enter vaild numeric fuel level!";
        launchReady = false;
    }

    let cargoMassElement = document.getElementById("cargoStatus");
    if (validateInput(cargoLevel) == "Is a Number") {
        if (cargoLevel <= "10000") {
            cargoMassElement.innerHTML = "You have met cargo requirements!";
        } else if (cargoLevel >= "10000") {
            cargoMassElement.innerHTML = "Too much cargo!";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
            document.getElementById("launchStatus").style.color = "red";
            launchReady = false;
        } else {
            cargoMassElement.innerHTML = "Please enter vaild numeric mass value!";
            launchReady = false;
        }
    } else {
        cargoMassElement.innerHTML = "Please enter vaild numeric mass value!";
        launchReady = false;
    }
   
    if(launchReady == true){
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch"
        document.getElementById("launchStatus").style.color = "green";
    } else {
        event.preventDefault();
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