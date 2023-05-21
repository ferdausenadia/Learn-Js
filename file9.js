let name = "kukur";

let firstLetter = name[0];
console.log(`Your name starts with ${firstLetter}`)

//nested if else gussing game
let winningNumber = 19;
let userGuess = +prompt("Guess a number: ")
console.log(userGuess)
//prompt take input in string so if we put a plus sign before prompt then it will convert the string into 
//prompt is not a valid construct in the Node.js runtime (which assumedly is what you are running in through VSCode). It will only work in browser-based JavaScript engines.

if (userGuess === winningNumber) {
    console.log("Your Guess is right")
} else {
    if (userGuess > winningNumber) {
        console.log("Too High");
    } else {
        console.log("too low")
    }
}