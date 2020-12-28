'use strict';
const dataType = (string, object) => {

// variable declarations;
let firstVar = 'javascript';
let secondVar = 'nodejs';
let firstArr = ['sweet',2,3];
let secondArr = ['chocolate', 'cheese', 13, 'nuts'];
if((typeof firstVar === typeof secondVar) || (typeof firstArr === typeof secondArr)) {
  console.log('same data type!')
} 
if(typeof secondVal !== typeof secondArr) {
  console.log('They two data types are not same!')
}
else {
  console.log('Not same data type!');
}

}
dataType();