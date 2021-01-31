const quoteArray = [
  '\"Optimism is an occupational hazard of programming; feedback is the treatment.\" -Kent Beck',
  
   '\"The only person you are destined to become is the person you decide to be.\" -Ralph Waldo Emerson',

  '\"The more you know, the more you realize you know nothing.\" - Socrates',

   '\"I dream my painting and I paint my dream.\"  -Vincent van Gogh',

  '\"It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.\" -Leonardo da Vinci',
  
  '\"Never confuse a single defeat with a final defeat.\" -F.ScottFitzgerald',

]
let displayQuote = document.getElementById('quote-output');
let button = document.getElementById('btn');

const buttonClick = () => {
randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
  console.log(randomQuote);

  displayQuote.innerText = randomQuote;
  

}
 
button.addEventListener('click', buttonClick);