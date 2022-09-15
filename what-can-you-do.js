const prompt = require('prompt-sync')({sigint: true});

let enterAge = Number(prompt('Please enter your age: '));
console.log(enterAge)

if(enterAge < 16){
    console.log('You cant drive! ');
}
else if (enterAge <= 17){
    console.log('You can drive, but not vote. ')
}
else if (enterAge <= 24){
    console.log('You can vote, but not rent a car')
}
else if (enterAge >= 25){
    console.log('You can do pretty much anything!')
}




