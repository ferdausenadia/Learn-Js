//math object - built in object
let val;
val = Math.pi;
console.log(val);

val = Math.E;
console.log(val);
val = Math.round(3.33);
console.log(val);
val = Math.ceil(1.9);
console.log(val);
val = Math.floor(1.9);
console.log(val);
val = Math.sqrt(81);
console.log(val);
val = Math.abs(-8);
console.log(val);
val = Math.pow(3, 2);
console.log(`Math.pow(3,2) = ${val}`);
val = Math.min(1, 8, -8, 1, -1, 0);
console.log(val);
let i = 0;
while (i <= 5) {
  console.log(Math.floor(Math.random() * 100 + 1));
  i++;
}
let today = new Date();
console.log(today);
let val;
let today = new Date();

val = today;
val = today.toString();

let birthday = new Date("11-2-1995 8:25:00");
birthday = new Date("November 2 1995");
birthday = new Date("11/2/1995");
val = birthday;
val = today.getMonth(); // Start from 0
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();
// timestamp -> amount of time past since Jan 1st 1970

birthday.setMonth(0);
birthday.setDate(12);
birthday.setFullYear(1996);
birthday.setHours(3);

console.log(val);
console.log(birthday);
