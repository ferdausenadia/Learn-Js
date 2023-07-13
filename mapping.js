var foods = ["cake", "choco", "Ice", "cream"];
var numbers = [1, 2, 3, 4];

function addSomething(item, ind) {
  return `${ind} is a ${item}`;
}
//console.log(foods.forEach(addSomething));
let arr_res = foods.map(addSomething);
console.log(arr_res);
let arrSquare = numbers.map(function (item) {
  return item * item;
});
console.log(arrSquare);
