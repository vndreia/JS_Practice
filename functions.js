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

<<<<<<< HEAD
function SeriesSum(n) {
  // 1. Si n es 0, devolver "0.00" directamente
  if (n === 0) return "0.00";

  // 2. Inicializar variable para acumular la suma
  let suma = 0;

  // 3. Recorrer desde i = 0 hasta i < n
  for (let i = 0; i < n; i++) {
    // 3a. Calcular denominador que crece de 3 en 3, empezando en 1
    let denominador = 1 + 3 * i;

    // 3b. Sumar la fracción correspondiente
    suma += 1 / denominador;
  }

  // 4. Devolver la suma redondeada a 2 decimales como string
  return suma.toFixed(2);
}

//Function without destructuring:
const countUserPosts = (user) => {
  return user.posts.length;
};

const user1 = {
  id: 2294611830,
  username: "leonardo.dv",
  posts: [
    { comment: "Hombre de Vitruvio", dateCreated: 1490 },
    { comment: "Retrato de un músico", dateCreated: 1490 },
    {
      comment: "Retrato de un hombre con tiza roja #autorretrato",
      dateCreated: 1512,
    },
  ],
};

countUserPosts(user1); //This access to the whole user object, so I don't need to pass it below in the destructured function:

//Function with destructuring:
const countUserPosts = ({ posts }) => posts.length; //Access directly to the posts property of the user object
=======

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

>>>>>>> 19004f07ddb1c9432a65d6eb030c03966c198c7d
