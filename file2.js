//let keyword
/* let allows you to declare variables that are limited to the scope of a block statement, or expression on which it is used, unlike the var keyword, which declares a variable globally, or locally to an entire function regardless of block scope. The other difference between var and let is that the latter can only be accessed after its declaration is reached.For this reason, let declarations are commonly regarded as non-hoisted.

Just like const the let does not create properties of the window object when declared globally (in the top-most scope).*/

let name = "xyz"
name = "pqr"
console.log(name)
const pi = 3.1416
//pi = 3
console.log(pi)