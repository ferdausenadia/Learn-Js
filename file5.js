//typeof
//The typeof operator returns a string indicating the type of the operand's value.
let sum = 45
let name = "bokachuda"
console.log(typeof sum)
console.log(typeof name)
console.log(typeof true)
console.log(typeof 45)
//convert number to string
let num = 1
num += ""
console.log(typeof num) //string
let num2 = 2
num2 = String(num2)
console.log(typeof num2)
// toString() method
let a = 10;
console.log(a.toString())
console.log((4).toString());
console.log((9).toString(2)); // '1001' (9 in base 2, or binary)
console.log((9).toString(8));
/*The toString() method takes an integer or
 floating point number and converts it into
  a String type. There are two ways of invoking
   this method. If the base number is passed as 
   a parameter to toString(), the number will be 
   parsed and converted to it:
   */
//convert string to number
let str = +"34"
console.log(typeof str)
let str1 = "kukur"
str1 = Number(str1)
console.log(typeof str1)



