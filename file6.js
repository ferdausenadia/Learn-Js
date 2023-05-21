//string concatenation
let string1 = " kukur"
let string2 = "bilai"
let anim = string1 + " and " + string2
console.log(anim)
//template string
let animal = "cat"
let color = "black"
let story = `My favourite animal is ${animal} and my favourite color is ${color}`
console.log(story)
//bigint
console.log(Number.MAX_SAFE_INTEGER)
let number = BigInt(12)
let num3 = 12n
//bigint+bigint operation possible otherwise it is impossible
//== vs ===
let num1 = 7;
let num2 = "7"
console.log(num1 == num2);//true
console.log(num1 === num2);//false
/* The strict equality (===) operator checks
 whether its two operands are equal, returning
  a Boolean result. Unlike the equality operator,
   the strict equality operator always considers 
   operands of different types to be different.
   The most notable difference between this
    operator and the equality (==) operator 
    is that if the operands are of different 
    types, the == operator attempts to convert
     them to the same type before comparing.
*/
let number1 = 7;
let number2 = -7;
console.log(number1 === number2)//false
console.log(number1 == number2)//false
let number3 = 0;
let number4 = -0;
console.log(number3 === number4);//true
console.log(number3 == number4);//true
