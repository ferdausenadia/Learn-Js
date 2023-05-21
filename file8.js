//ternary operator
/*The conditional (ternary) operator is the
only JavaScript operator that takes three
operands: a condition followed by a question 
mark (?), then an expression to execute 
if the condition is truthy followed by a colon (:),
and finally the expression to execute if the condition
is falsy. This operator 
is frequently used as an alternative to an if...else statement.
*/
let country = "Bd";
let drink;
country = "Bd" ? drink = "coca cola" : drink = "pepsi"
console.log(drink)

let welcome = (person) => {
    let name = person ? person.name : "stranger";
    return `Hello, ${name}`;
};
console.log(welcome({ name: "Alice" }));
console.log(welcome(null))
