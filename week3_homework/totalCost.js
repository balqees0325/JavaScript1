'use strict';
const cartForParty = {
  drinks: 5.99,
  pastery: 3.48,
  plastics: 2.1,
  water: 10.2,
  towel: 3.7,
}
const calculateTotalPrice = (num) => {
    
  let sum = Object.values(num).reduce((a,b) => a + b);
  return `Total price is: $${sum}`
}
console.log(calculateTotalPrice(cartForParty));