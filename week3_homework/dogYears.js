'use strict';
const calculateDogAge = (num) =>{
const humanYear = 1;
const dogYear = 7;
let dogYearInHuman = dogYear * num;
 return `Your doggie is ${dogYearInHuman} years old in dog years!`;
}
console.log(calculateDogAge(1));
console.log(calculateDogAge(9));
console.log(calculateDogAge(18));
