const planetFacts = {
    mercury: {
        name: "Mercury",
        funFacts: [
            "Mercury is the smallest planet in the solar system.",
            "Another fun fact about Mercury."
        ]
    },
    // Add facts for other planets similarly
};

let currentPlanet = 'mercury';
let factIndex = 0;
const factDisplay = document.getElementById('factDisplay');

function showPlanetFact(planet) {
    currentPlanet = planet;
    factIndex = 0;
    displayFact();
}

function displayFact() {
    const planet = planetFacts[currentPlanet];
    if (planet) {
        factDisplay.textContent = planet.funFacts[factIndex];
        factIndex = (factIndex + 1) % planet.funFacts.length;
        setTimeout(displayFact, 2000); // Change fact every 2 seconds
    } else {
        factDisplay.textContent = "Planet not found in the solar system.";
    }
}

// Initial fact display
displayFact();
