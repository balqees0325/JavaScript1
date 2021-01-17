'use strict';
const giveCompliment = (name) => {
  let compliment = ['Great', 'Awesome', 'Amazing', 'Wonderful', 'Nice', 'Charismatic','Superb', 'Energetic', 'Extra-ordinary', 'Beautiful']

  const randomCompliment = compliment[Math.floor(Math.random()* 
  compliment.length)];
  console.log(`You are ${randomCompliment}, ${name}`); 
}
giveCompliment('balqees!');
giveCompliment('balqees!');
giveCompliment('balqees!');