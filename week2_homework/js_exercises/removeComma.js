'use strict';
//removing comma from a string with replace method.
let myString = "hello,this,is,a,difficult,to,read,sentence";
// // myString.replace(/,/g, ' ');
let newString = myString.split(",").join(" ");
console.log(newString);

// myString = 'hello ' + ' ' + 'this ' + ' ' + 'is ' + ' ' + 'a ' + ' ' + 'difficult ' + ' ' + 'to ' + ' ' + 'read ' + ' ' + 'sentence '
// console.log(myString)