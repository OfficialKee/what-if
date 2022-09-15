const prompt = require('prompt-sync')({sigint: true});

let whatNumber = Number(prompt('Give me a number! Any Number!'))

if (whatNumber%3===0 && whatNumber%5 ===0){
    console.log('fizzbuzz')
} else if (whatNumber%5===0){
    console.log('buzz')
} else if (whatNumber%3===0 ){
    console.log('fizz')
} else{
    console.log("Not Divisble")
}
