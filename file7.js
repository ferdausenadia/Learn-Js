//falsy values
/*
Value	        Type	        Description
null	        Null	        The keyword null — the absence of any value.
undefined	    Undefined	    undefined — the primitive value.
false	        Boolean	        The keyword false.
NaN	            Number	        NaN — not a number.
0	            Number	        The Number zero, also including 0.0, 0x0, etc.
-0	            Number	        The Number negative zero, also including -0.0, -0x0, etc.
0n	            BigInt	        The BigInt zero, also including 0x0n, etc. Note that there is no BigInt negative zero — the negation of 0n is 0n.
""	            String	        Empty string value, also including '' and ``.
document.all	Object	        The only falsy object in JavaScript is the built-in document.all.
*/
let firstName = "";
if (firstName) {
    console.log("the value is truthy")
} else {
    console.log("the value is falsey")
}