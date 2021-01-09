'use strict';
const drinkTray = [];
const drinkTypes = ['cola', 'lemonade', 'water'];

  let i = 0; 
  while (drinkTray.length < 5) {
    if (i === drinkTypes.length){
      i = 0;
  }

   
   drinkTray.push(drinkTypes[i])
   if (drinkTray.length !== 5){
     drinkTray.push(drinkTypes[i])
  }
   
   i++;
}


// for (let i = 0; i < 5; i++)
//  {
//   if(i ===  0) {
// drinkTray.push(drinkTypes[0])
//   } else if (i === 1) {
//     drinkTray.push(drinkTypes[0]);
//   }else if (i === 2) {
//     drinkTray.push(drinkTypes[1]);
//   } else if (i === 3) {
//     drinkTray.push(drinkTypes[1]);
   
//   }else if (i === 4) {
//     drinkTray.push(drinkTypes[2]);
   
//   } 
  

 
console.log(drinkTray);
console.log(`Hey guys I brought a ${drinkTray}`);










//  let count = 0;
//     count = drinkTray.filter(drink => {

//       return drink.indexOf(drinkTypes[i]) !== -1;
//     }).length;

//     drinkTray.push(drinkTypes[i]);
    
//  console.log(count);