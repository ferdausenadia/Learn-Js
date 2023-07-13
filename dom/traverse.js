//traverse the dom
//parent node traverse
let ul = document.querySelector("ul");
//console.log(ul.parentNode.parentNode);
//console.log(ul.parentElement);
const html = document.documentElement;
console.log(html);
console.log(html.parentElement); //null
console.log(html.parentNode); //document
//child node traversal

console.log(ul);
console.log(ul.childNodes); //indentation counts as text nodes
console.log(ul.firstChild);
console.log(ul.lastChild);
ul.childNodes[1].style.backgroundColor = "blue";
//ul1.childNodes[0].style.backgroundColor = "blue";//error

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);
//siblings node traversal
console.log(ul.previousSibling);
console.log(ul.nextSibling);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
