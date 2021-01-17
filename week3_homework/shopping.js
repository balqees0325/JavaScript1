'use strict';
let shoppingCart = ['banana', 'milk'];


let addToShoppingCart =(item) => {
 shoppingCart.push(item);
 if(shoppingCart.length > 3) {
   shoppingCart.shift();
 }

  shoppingCart.forEach(arr =>{
    console.log(arr);
  })
  return `You bought ${shoppingCart}!`;
}
console.log(addToShoppingCart('chocolate'));
console.log(addToShoppingCart('waffles'));
console.log(addToShoppingCart('tea'));