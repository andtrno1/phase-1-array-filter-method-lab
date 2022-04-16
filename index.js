// Code your solution here
function findMatching(drivers, name){
    return drivers.filter(function (driverNames) { return driverNames.toLowerCase() === name.toLowerCase()})
}

function fuzzyMatch(drivers, letters){
    return drivers.filter(function (driverLetters) { return driverLetters.toLowerCase().slice(0,letters.length) === letters.toLowerCase()})
}

function matchName(drivers, match){
    return drivers.filter(function (driverMatches) {return driverMatches.name === match})
}

