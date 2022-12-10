// 1. Create an object that represents your favourite coffee. Please include coffee name,
// strength, flavour, milk, sugar, … everything you like!

// var obj = {
//   coffeName: "turska",
//   coffeMilk: "kravica",
//   coffeSugar: "beli",
// };

// console.log(obj);

// 2. Create an object that represents your favourite movie. Please include title, actors,
// director, genre, popularity.

// var obj = {
//   movieName: "Ko to tamo peva",
//   movieGenre: "Drama",
//   movieDirector: "Andrija",
// };

// console.log(obj);

// 3. Write a function that creates an object that represents a project. Each project is
// described by: description, programming language, git repository, boolean status that
// says if the project is in development or not. Add a method that prints out the project&#39;s
// repository, a method that checks if the project is written in JavaScript as well as a
// method that checks if the project is in development or not.

// function project(obj) {
//   let result = "";

//   if (obj["programmingLanguage"] == "JavaScript") {
//     result = "true";
//   } else {
//     result = "false";
//   }

//   return `Project repository is ${obj["gitRepository"]},
//   project is written in JavaScript (${result})
//   and this project is in development (${obj["statusDevelopment"]})`;
// }

// let obj = {
//   description: "vezba",
//   programmingLanguage: "JavaScript",
//   gitRepository: "https://github.com/andrija0202/IT-OBUKE-BIT-Academy",
//   statusDevelopment: true,
// };

// console.log(project(obj));

//4. Write a function that creates an object that represents a culinary recipe. Each recipe is
// described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients,
// preparing time, preparing instruction.
// ○ Add a method that prints out all the ingredients necessary for the meal
// preparation.
// ○ Add a method that checks if a meal can be prepared in under 15 minutes.
// ○ Add a method that changes the type of cuisine to the given value.
// ○ Add a method that delete a given ingredient from the list of ingredients.

// function culinaryRecipe(mainRecipe, dodaj, obrisi) {
//   let result = "";
//   if (recipe.preparingTime > 15) {
//     result = false;
//   } else {
//     result = true;
//   }

//   recipe.typeOfCuisine = dodaj;

//   delete recipe.listOfIngredients[obrisi];

//   // let del = "";

//   // for (let element in recipe.listOfIngredients) {
//   //   var temp = element;
//   //   // console.log(element);
//   //   if (obrisi == element) {
//   //     del = element;
//   //   }
//   // }
//   // console.log(recipe.listOfIngredients);
//   // console.log(del);

//   return `All ingredients necessary are: ${JSON.stringify(
//     recipe.listOfIngredients
//   )}
//   Meal can be prepared under 15 mins (${result}).
//   New cuisine: (${recipe.typeOfCuisine}).
//   Deleted ingredient from list: ${obrisi}`;
// }

// let recipe = {
//   name: "Popara",
//   typeOfCuisine: "Babina",
//   complexity: 5,
//   listOfIngredients: {
//     ingredients1: "Hleb",
//     ingredients2: "Voda",
//     ingredients3: "Sir",
//   },
//   preparingTime: 14,
//   preparingInstructions: "Baba sve to lepo pomesa i eto :)",
// };

// console.log(culinaryRecipe(recipe, "Dedina", "ingredients2"));

// var temp = {
//     prvi: 1,
//     drugi: 2,
//     treci: {
//         jedan: 1,
//         dva: 2
//     }
// }

// function brisi(parametar) {
//     var prop = parametar;

//     delete temp.treci[prop];

//     console.log(temp.treci);
// }

// console.log(brisi("jedan"));

// Novih 8 zadataka

// 1. . Create a function that takes an array of objects (groceries) which
// calculates the total price and returns it as a number. A grocery object
// has a product, a quantity and a price, for example:
// {
//   "product": "Milk",
//   "quantity": 1,
//   "price": 1.50
// }

// function calc(obj) {
//   return obj.quantity * obj.price;
// }

// let obj = {
//   product: "Milk",
//   quantity: 3,
//   price: 3,
// };

// console.log(calc(obj));

// 2. You go to a jewelry shop and try to find the most expensive piece of
// jewelry. You write down the name of each piece of jewelry and its
// price. Create a function that gets the name of the piece of jewelry with
// the highest price and returns "The most expensive one is the {name of
// jewelry piece}".
// Example:
// mostExpensive([{name:’DiamondEarings’, price: 980}, {name:’Gold
// watch’, price:250}, ...])
// - The most expensive one is the diamond Ring.

// function mostExpensive(jew) {
//   let expensive = 0;
//   var nameMain;

//   for (let i = 0; i < jewelry.length; i++) {
//     if (jewelry[i].price > expensive) {
//       expensive = jewelry[i].price;
//       nameMain = jewelry[i].name;
//     }
//   }
//   return nameMain;
// }

// let jewelry = [
//   {
//     name: "Diamond Ring",
//     price: 980,
//   },
//   {
//     name: "Diamon Glasses",
//     price: 500,
//   },
//   {
//     name: "Gold Watch",
//     price: 200,
//   },
// ];

// console.log(mostExpensive(jewelry));
