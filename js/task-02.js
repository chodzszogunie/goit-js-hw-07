const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
ingredients.forEach(ingredient => {
const addIngredients = document.createElement("li");
addIngredients.textContent = ingredients;
addIngredients.classList.add('item');
list.append(addIngredients);
});

