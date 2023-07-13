var food = ["cake", "choco", "shake"];
//1st parameter will be item
//2nd parameter will be  index
//3rd parameter will be whole array
food.forEach(function (value, ind, arr) {
  console.log(value);
  console.log(ind);
  console.log(arr);
});
var numbers = [1, 2, 3, 4];
let printNumber = function (item, ind, arr) {
  console.log(`index: ${ind} and item: ${item},
  ${arr}`);
};
numbers.forEach(printNumber);
