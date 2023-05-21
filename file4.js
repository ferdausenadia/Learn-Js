//string method
// ***trim()
let name = " hey and  "
console.log(name.length)
console.log(name)
let newName = name.trim() //it will remove spaces
console.log(newName)
console.log(newName.length)
/* The trim() method removes 
whitespace from both ends of a 
string and returns a new string, 
without modifying the original string
*/
// ** toUpperCase()

let testVar = `I'm selfish, impatient and a little insecure. 
I make mistakes, I am out of control and at times hard to handle.
 But if you can't handle me at my worst, 
 then you sure as hell don't deserve me at my best`
console.log(testVar)
let newTestVar = testVar.toUpperCase()
console.log(newTestVar)
console.log(testVar.toLowerCase())

//##slice method
/*The slice() method extracts a section of a string and
 returns it as a new string, without modifying 
 the original string.*/
let exmp = " The Morning is Upon us "
/*

*/
console.log(exmp.slice(0, 4))
console.log(exmp.slice(0, -2))
console.log(exmp.slice(0, -1))
console.log(exmp.slice(-2))
console.log(exmp.slice(-6, -2))






