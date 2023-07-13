console.log("Before Error");
try {
  //regular code
  adddAlert("Welcome guest");
} catch (err) {
  console.log(err.message);
}
console.log("After error");

let x = 5;
try {
  if (x == "") throw "empty";
  if (isNaN(x)) throw "not a number";
  x = Number(x);
  if (x < 15) throw "too low";
  if (x > 10)
    throw {
      message: "too high",
      name: "HighError",
    };
} catch (err) {
  console.log(err.message);
}
