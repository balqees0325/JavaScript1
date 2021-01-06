'use strict';
const drinkTray = [];
const drinkTypes = ['cola', 'lemonade', 'water'];
for (let i = 0; i < drinkTypes.length; i++)
 {
  if(i === 0) {
drinkTray.push(drinkTypes[0])
  } else if (i === 1) {
    drinkTray.push(drinkTypes[0]);
  }else if (i === 2) {
    drinkTray.push(drinkTypes[1]);
  } else if (i === 3) {
    drinkTray.push(drinkTypes[1]);
  }else if (i === 4) {
    drinkTray.push(drinkTypes[2]);
  }
}
// console.log(drinkTray);
console.log(`Hey guys I brought a ${drinkTray}`);