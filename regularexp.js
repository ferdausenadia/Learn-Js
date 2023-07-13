//regular expression
//let re = /hello/;
let re = /hello/i; // i meand case insensitive
let str = "Hello Bitch";
//exec() - returns result in an array or null
let result = re.exec(str);
console.log(result);
//test()- only returns ture and false
let result1 = re.test(str);
console.log(result1);
//match() returns array or null..
let result2 = str.match(re);
console.log(result2);
//search() returns the index of first match or minus index
let result3 = str.search(re);
console.log(result3);
//replace( ) returns new string and replace
str = "Again Hello World hello";
let newStr = str.replace(re, "Hi");
console.log(newStr);
