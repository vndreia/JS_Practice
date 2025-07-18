//If you just have a single parameter and one single return action in a function, you can write id like:

const addNums = (num1) => num1 + 5; //Arrow simple funct
console.log(addNums(5, 5));

//'This' keyword:
const person = {
  name: "Andrea",
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};
person.greet(); // "Hi, I'm Andrea"
//Here 'this' refers to the object that owns the method (person)
//It's not recommended to use 'this' keyword for arrow functions, because they don't have that property
//It's better when you write explicitlly the kind of var you extract properties from

//OMG functions CAN have MORE than 1 return:
function getInfoList(students) {
  if (!Array.isArray(students)) return []; // 1️⃣ primer caso: NO es un array
  return students.map((student) => student.getInfo()); // 2️⃣ segundo caso: SÍ es un array
}

// una función almacenada en una variable
const double = function (num) {
  return num * 2;
};

// una función pasada por un método
[1, 2, 3].map(function (item) {
  return item * 2;
});

//IFEE or Immediately Invoked Function Expression
//Es una función que se ejecuta inmediatamente después de ser definida
(function () {
  console.log("¡Hola, mundo!");
})(); // añadamos unos paréntesis al final del código para llamar a la función

/*Algo que puede ocurrir es que si otro desarrollador declara una variable button,
 no afectará a tu código ni al suyo. Tu variable permanece a salvo dentro del scope de tu IIFE.*/


 //A beautiful example of a function to get an average rating of difficulty recipes:
 const getAverageRating = function(arr) {
  const sum =  arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0);  //0 is the initializer value
  return sum / arr.length;
}

//Create a getTotalIngredients function that takes a single argument, representing an array with ingredients, and returns the number of ingredients from the array passed to the function.
function getTotalIngredients(ingredients) {
  return recipe.ingredients.length; //Already access recipe ingredients
}
//Get the difficulty level of a recipe based on cookingTime
function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return "easy";
  } else if (cookingTime <= 60) {
    return "medium";
  } else {
    return "hard";
  }
}

//Ang logging the results:
const recipe1AverageRating = getAverageRating(recipe1.ratings);
console.log(recipe1AverageRating);
const recipe1TotalIngredients = getTotalIngredients(recipe1); //No need to enter recipe1.ingredients bc the function already did
console.log(recipe1TotalIngredients);
const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel);

