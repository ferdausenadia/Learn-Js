let re;
let postal;
//postal code regx
re = /^[0-9]{4}$/;
postal = "4000";
console.log(re.test(postal));
// phone number
/*
let phoneRe = /^01[0-9]{9}$/;//01.....
let phone = "01745089010";
console.log(Re.test(phone));
*/
let phoneRe = /^(\+)?(88)?01[0-9]{9}$/;
let phone = "+8801745089010";
console.log(phoneRe.test(phone));

//email address
emailRe = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;
email = "itzferdausebd456@gmail.com";

console.log(emailRe.test(email));
