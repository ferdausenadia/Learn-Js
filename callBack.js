function display(anything) {
  console.log(anything);
}
function sum(num1, num2) {
  return num1 + num2;
}

const calculate = sum(5, 5);
display(calculate);
//alternatively

function Display(anything) {
  console.log(anything);
}
function calculator(num1, num2) {
  const sum = num1 + num2;
  Display(sum);
}
calculator(4, 9);

//callback
/*
function display(some) {
  console.log(some);
}
function cal(num1, num2, callbck) {
  let sum = num1 + num2;
  //display(sum);
  if (callbck) {
    callbck(sum);
  }
}
cal(5, 10, display);
*/
//anoynemous call back function
function calculator(num1, num2, callback) {
  let sum = num1 + num2;
  if (callback) {
    callback(sum);
  }
}
calculator(5, 8, function (result) {
  console.log(result);
});
