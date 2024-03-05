const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.getElementById("ingredients");


const liElements = ingredients.map(function(ingredient) {

  return `<li class="item">${ingredient}</li>`;
});


const html = liElements.join('');


ul.innerHTML = html;
