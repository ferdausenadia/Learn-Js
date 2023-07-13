let re;
let str;
//meta char must start with

re = /^Hel/i;
// re = /Hel$/i; //must end with
//re =/^Hello$/ ; //must start and end with

str = "Hello Bitch";
console.log(re.exec(str));
reTest(re, str);
function reTest(re, str) {
  if (re.test(str)) {
    console.log(`'${str}' matches with '${re.source}'`);
  } else {
    console.log(`'${str}' does not match '${re.source}' `);
  }
}
