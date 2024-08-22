// const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

// Write your JavaScript code here!
window.addEventListener("load", function () {
    
    //vaildation
    const form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        let pilotName = document.querySelector("input[name=pilotName]").value;

        let copilotName = document.querySelector("input[name=copilotName]").value;

        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;

        let cargoLevel = document.querySelector("input[name=cargoMass]").value;

        let list = document.getElementById("faultyItems");

        formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoLevel);
    });

    // planets
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        
        let planet = pickPlanet(listedPlanets);
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let moons = planet.moons;
        let imageUrl = planet.image;

        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
    })

});
