// We need to complete a function called chooseRecipe(), which will receive three parameters: - An array of ingredients in stock at Bakery A - An array of ingredients in stock at Bakery B - An array of recipe objects. Each recipe has a name property(string) and an ingredient property(array)

// We are limiting our search to two ingredient recipes. We want to find a recipe that utilizes one ingredient from Bakery A and one from Bakery B.

// Our chooseRecipe() function should return the name of the correct recipe.

// This one is a doozy! We might want to start by creating a helper function called ingredientCheck() that will take in one bakery at a time, along with the recipes.ingredients array to check if the given bakery possesses any of the ingredients from that recipe.

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  // Code here!
  for (const recipe of recipes) {
    //     TODO: refactor this conditional...
    if (
      (bakeryA.includes(recipe.ingredients[1]) &&
        bakeryB.includes(recipe.ingredients[0])) ||
      (bakeryA.includes(recipe.ingredients[0]) &&
        bakeryB.includes(recipe.ingredients[1]))
    ) {
      return recipe.name;
    }
  }
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
  {
    name: 'Coconut Sponge Cake',
    ingredients: ['coconut', 'cake base'],
  },
  {
    name: 'Persian Cheesecake',
    ingredients: ['saffron', 'cream cheese'],
  },
  {
    name: 'Custard Surprise',
    ingredients: ['custard', 'ground beef'],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes)); // Persian Cheesecake

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
  {
    name: 'Potato Ganache',
    ingredients: ['potatoes', 'chocolate'],
  },
  {
    name: 'Sweet Fish',
    ingredients: ['anchovies', 'honey'],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ['dijon mustard', 'raisins'],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes)); // Nima's Famous Dijon Raisins
