// script.js

// Planet facts database
const planetFacts = {
    Mercury: [
        "Mercury is the closest planet to the Sun.",
        "Mercury has no atmosphere.",
        "A year on Mercury is just 88 Earth days.",
        "Mercury is the smallest planet in the Solar System.",
        "It has no moons or rings.",
        "Mercury is named after the Roman messenger god.",
        "Its surface is covered in craters.",
        "Temperatures on Mercury range from -173°C to 427°C.",
        "It is only slightly larger than Earth's moon.",
        "Mercury has a weak magnetic field."
    ],
    Venus: [
        "Venus is the hottest planet in the Solar System.",
        "A day on Venus is longer than a year on Venus.",
        "Venus rotates in the opposite direction to most planets.",
        "It has a thick, toxic atmosphere of carbon dioxide.",
        "Venus is often called Earth's twin due to its size.",
        "Its surface is covered with volcanoes.",
        "Venus has no moons.",
        "It is the brightest planet in the night sky.",
        "Venus is named after the Roman goddess of love.",
        "It has crushing surface pressure."
    ],
    Earth: [
        "Earth is the only planet known to support life.",
        "71% of Earth's surface is covered by water.",
        "Earth has a powerful magnetic field.",
        "It takes Earth 365.25 days to orbit the Sun.",
        "Earth's atmosphere is 78% nitrogen and 21% oxygen.",
        "Earth's only natural satellite is the Moon.",
        "The Earth's core is as hot as the surface of the Sun.",
        "Earth is the densest planet in the Solar System.",
        "Earth is the third planet from the Sun.",
        "It has a surface temperature ranging from -88°C to 58°C."
    ],
    Mars: [
        "Mars is known as the Red Planet due to its iron-rich soil.",
        "Mars has the largest volcano in the Solar System, Olympus Mons.",
        "It has two small moons: Phobos and Deimos.",
        "Mars has seasons similar to Earth but lasts twice as long.",
        "The Martian atmosphere is 95% carbon dioxide.",
        "Mars is half the size of Earth.",
        "A year on Mars lasts 687 Earth days.",
        "Mars' thin atmosphere cannot retain much heat.",
        "It is home to the longest canyon, Valles Marineris.",
        "Mars is the fourth planet from the Sun."
    ],
    Jupiter: [
        "Jupiter is the largest planet in the Solar System.",
        "It has at least 79 moons, including the largest, Ganymede.",
        "Jupiter's Great Red Spot is a giant storm larger than Earth.",
        "It has a faint ring system made of dust particles.",
        "Jupiter is composed mostly of hydrogen and helium.",
        "A day on Jupiter lasts only 10 hours.",
        "It takes 12 Earth years for Jupiter to orbit the Sun.",
        "Jupiter emits more heat than it receives from the Sun.",
        "Its magnetic field is the strongest in the Solar System.",
        "Jupiter is the fifth planet from the Sun."
    ],
    Saturn: [
        "Saturn is famous for its stunning ring system.",
        "It has 83 confirmed moons, including Titan, the second-largest moon in the Solar System.",
        "Saturn is a gas giant mostly made of hydrogen and helium.",
        "A year on Saturn lasts 29.5 Earth years.",
        "A day on Saturn lasts about 10.7 hours.",
        "Saturn's rings are made of ice and rock particles.",
        "Titan has a thick atmosphere and lakes of methane.",
        "Saturn's density is so low it could float in water.",
        "It has a hexagonal storm pattern at its north pole.",
        "Saturn is the sixth planet from the Sun."
    ],
    Uranus: [
        "Uranus rotates on its side, making it unique in the Solar System.",
        "It has 27 known moons, including Titania and Oberon.",
        "Uranus is often called an ice giant due to its icy composition.",
        "It has a faint ring system made of dark particles.",
        "Uranus' atmosphere is rich in hydrogen, helium, and methane.",
        "Methane gives Uranus its blue-green color.",
        "A year on Uranus lasts 84 Earth years.",
        "A day on Uranus lasts about 17.25 hours.",
        "Uranus is the coldest planet in the Solar System, with a minimum temperature of -224°C.",
        "Uranus is the seventh planet from the Sun."
    ],
    Neptune: [
        "Neptune is the farthest planet from the Sun.",
        "It has 14 known moons, with Triton being the largest.",
        "Neptune has a deep blue color due to methane in its atmosphere.",
        "A year on Neptune lasts 165 Earth years.",
        "It has the strongest winds in the Solar System, reaching 2,100 km/h.",
        "Neptune has faint, dark rings made of dust and ice particles.",
        "Triton, its largest moon, orbits Neptune in the opposite direction of its rotation.",
        "Neptune is a gas giant primarily made of hydrogen, helium, and water.",
        "A day on Neptune lasts about 16 hours.",
        "Neptune was discovered in 1846 and is the eighth planet from the Sun."
    ]
};

// Auto-switch facts
let factInterval;
function showFacts(planet) {
    clearInterval(factInterval); // Clear any previous interval
    const facts = planetFacts[planet];
    let index = 0;

    document.getElementById("planet-name").innerText = planet;
    document.getElementById("fact-text").innerText = facts[index];

    // Auto-switch every 2 seconds
    factInterval = setInterval(() => {
        index = (index + 1) % facts.length; // Cycle through facts
        document.getElementById("fact-text").innerText = facts[index];
    }, 2000);
}
