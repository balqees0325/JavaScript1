'use strict';
const recipeCard = {
  Meal_name: 'pizza',
  serving: 3,
  ingredients: ['flour 200g', 'yeast 10g',
  'milk 80g', 
  'cheese 150kg','olive 20g', 'meat', 'tomato 50g']
}
 
for (let [key, value] of Object.entries(recipeCard)) {
  console.log(`${key}:${value}`);
}