function square(number) {
    return number * number;
};

console.log(square(5));
/*When you pass an object as a parameter, if the
 function changes the object's properties, that 
 change is visible 
outside the function, as shown in the following example:
*/
function changeName(myObj) {
    myObj.name = "Tesla"
}

const carDesc = {
    name: "Honda",
    year: 1998,
    owner: "kohli"
};
console.log("before calling function" + " " + carDesc.name);
changeName(carDesc)
console.log("after calling function" + " " + carDesc.name);

function changeValue(myArr) {
    myArr[1] = 30;
};
const arr = [12, 23, 32]
console.log(arr);
changeValue(arr)
console.log(arr)
//anonymous function 
const square1 = function (number) {
    return number * number
}
console.log(square19(4))