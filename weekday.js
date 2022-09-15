const prompt = require('prompt-sync')({sigint: true});

let whatDay = Number(prompt('If days are represented as numbers , then what day of the week is it? '))

if (whatDay === 1) {
    console.log('Monday');
} else if (whatDay === 2){
    console.log('Tuesday');
} else if (whatDay === 3){
    console.log('Wednesday');
} else if (whatDay === 4){
    console.log('Thursday');
} else if (whatDay === 5){
    console,log('Friday');
} else if (whatDay === 6){
    console.log('Saturday');
} else if (whatDay === 7){
    console.log('Sunday');
} else{
    console.log('error');
}