'use strict';
let validateCreditNumber =(num) =>
// converting inputs to array.
 {
  let inputDigits = num.split('');
  console.log(inputDigits);
  // console.log(numberArray);
  console.log(inputDigits.reduce((a,b) => Number(a) + Number(b)))  
 if(num.length !== 16) {
  return 'Ooops sorry invalid: number more or less than 16digits long';
}
else if(Number(num)) {
  return num;
}
else if(inputDigits.some(elem => elem !== inputDigits[Math.floor(Math.random() *16)])){
  return "Success! The input is a valid credit card number!";
}
 else if(inputDigits[inputDigits.length-1] % 2 === 0){
   return inputDigits;
 }
 if (inputDigits.reduce((a,b) => Number(a) + Number(b)) > 16) {
    return inputDigits;
  }
  else  {
    return  'Success! The input 6666666666661666 is a valid credit card number!'
  }
}
validateCreditNumber('a923321'); 
validateCreditNumber('4444444');
validateCreditNumber('6');