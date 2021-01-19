'use strict';
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString.length);
//removing comma from a string with replace method.
// // myString.replace(/,/g, ' ');
let newString = myString.split(",").join(" ");
console.log(newString);
console.log(newString.length);
