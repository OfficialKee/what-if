const prompt = require('prompt-sync')({sigint: true});

let earthWeight = Number(prompt('What is your Earth weight? '));

console.log('What planet are we fighting on today?  Enter a number based on the correct arena! 1 for Venus, 2 for Mars, 3 for Jupiter, 4 for Saturn, 5 for Uranus, and 6 for Neptune.')

let otherPlanet = Number(prompt('> '));

let printResult = true;

if (otherPlanet === 1) {
       result = earthWeight * .78;
} else if (otherPlanet === 2){
    result = earthWeight * .39;
} else if (otherPlanet === 3){
    result = earthWeight * 2.65;
} else if (otherPlanet === 4){
    result = earthWeight * 1.17;
} else if (otherPlanet === 5){
    result = earthWeight * 1.05;
} else if (otherPlanet === 6){
    result = earthWeight * 1.23;
} if (printResult=== true){
    console.log(`Your fighting weight will be ${result}! `);
} else{
    console.log('Unable to calculate weight')
    printResult = false;
} 


