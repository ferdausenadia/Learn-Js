//normal declaration
function saySomething() {
  console.log("hello");
}
//function expression
let saySomething1 = function () {
  console.log("Hello");
};
//arrow function
let saySomething2 = (name) => {
  console.log("Hello " + name);
};
saySomething2("dfgh");
//if we have exactly one parameter, we can skip the first braces in arrow func
