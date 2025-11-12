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

//SOMETHING IMPORTAN TO REMEMBER:
// Function reference (NOT executed)
button.addEventListener("click", updateQuote);

// Function execution (executed immediately)
button.addEventListener("click", updateQuote());

//-------------------------------------------------------------
//FUNCTION EXPRESSIONS

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
const getAverageRating = function (arr) {
  const sum = arr.reduce((acc, curr) => {
    return acc + curr;
  }, 0); //0 is the initializer value
  return sum / arr.length;
};

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

//Another function example:

function getBookSummaries(catalog) {
  return catalog.map((book) => book.about).join("\n"); //The arrow function is telling book to return the 'about' property of each book object
}
console.log(getBookSummaries(library));
//This function takes an array of book objects and returns a string with the summaries of each book, separated by new lines.
// "/n" is a newline character, so the summaries will be printed on separate lines in the console.
//Join is a method that separates the elements of an array into a string, using the specified separator (in this case, a newline character).s

//A function that has the filter() method:
function getBooksByAuthor(library, author) {
  return library.filter((book) => book.author === author); //I almost hardcoded the author, but I made it dynamic by passing it as a parameter
}

// This function takes a library (an array of book objects) and an author name as parameters.
function getBooksByAuthor(catalog, author) {
  return catalog.filter((book) => book.author === author);
}
//This is where we pass the library and the author name to the function
console.log(getBooksByAuthor(library, "Arvid Kahl"));

//-------------------------------------------------------------
//HIGHER ORDER FUNCTIONS
//ASYNC JS AND CALLBACKS
//A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.
//EXAMPLE:
const tweets = [
  "algún hilo raro",
  "una respuesta al tweet de Elon Musk",
  "reacción a las noticias de última hora",
];

function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    //arr.length allows flexibility in the array size
    callback(arr[i]); //I don't need to return anything, just call the callback function with the current element
    //Callback is just a name by convention, it could be anything!!!!!!!!!!!!!!!!!!!!
    //arr[i] takes the first element, then the second, iterating through the array
  }
}

forEach(tweets, function (tweet) {
  console.log(tweet);
});

//ONLOAD asyn event example:
function imageLoadCallback(evt) {
  //evt is the when the image load is in process
  document.body.append(evt.target); //evt.target its the image that was loaded
}

function loadImage(imageUrl, loadCallback) {
  const img = document.createElement("img"); // creates <img> but doesn't add it to the DOM
  img.src = imageUrl; //URL is assigned to the src attribute of the img element

  img.onload = loadCallback; //when the image is FINALLY loaded, execute the loadCallback function
}

//Calling the actual function:
loadImage("https://yastatic.net/q/logoaas/v1/Practicum.svg", imageLoadCallback);

//ONLOAD means literally: when the image is loaded, do this
//-------------------------------------------------------------
//This reminds a lot to classes and objects:
function loadImage(imageUrl, loadCallback, errorCallback) {
  const img = document.createElement("img");
  img.src = imageUrl;
  img.onload = loadCallback;
  img.onerror = errorCallback;
}

//This is an interesting EXAMPLE:
function consoleDate() {
  const date = new Date(); //Date is a global JS object, so you can instantiate it
  console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`); //These are actual global JS methods
  // No return statement = automatically returns undefined
}

setInterval(consoleDate(), 1000); //Not quite right, because you are calling the functions right away, but consoleDare returns nothing
//So it will give us UNDEFINED

//THE RIGHT WAY:
setInterval(consoleDate, 1000); //because if I just write consoleDate I am just referencing the function (passing it as a parameter)
// but if I am using brackets, I am calling the method right away

const newPromise = new Promise(function (resolve, reject) {
  //Cómo es qué resolve y reject se convierten en métodos?
  // Aprenderás a enviar peticiones al servidor muy pronto. Por ahora,
  // determinaremos aleatoriamente si la solicitud ha sido procesada o no
  const rand = Math.random() > 0.5;

  if (rand) {
    resolve("Solicitud procesada satisfactoriamente");
  } else {
    reject("Solicitud rechazada");
  }
});

// CASE 1: Simple function call - NO PARENTHESES
function updateQuote() {
  // fetch quote logic
}
button.addEventListener("click", updateQuote); // ✅ Direct reference

// ====================================================

// CASE 2: Function with parameters - USE ARROW FUNCTION
function displayQuote(author, quote) {
  console.log(`${author}: ${quote}`);
}
button.addEventListener("click", () => displayQuote("Kanye", "Some quote")); // ✅

// WRONG way:
// button.addEventListener('click', displayQuote('Kanye', 'Some quote')); // ❌ Executes immediately

// ====================================================

// CASE 3: Multiple actions needed - USE ARROW FUNCTION
button.addEventListener("click", () => {
  updateQuote(); // Call the function
  console.log("Clicked!"); // Do something else
  showLoader(); // Call another function
}); // ✅

// ====================================================

// CASE 4: Conditional execution - USE ARROW FUNCTION
button.addEventListener("click", () => {
  if (isLoggedIn) {
    updateQuote();
  } else {
    showLoginModal();
  }
}); // ✅

// ====================================================

// CASE 5: Using event object - USE ARROW FUNCTION OR DIRECT REFERENCE
function handleClick(event) {
  event.preventDefault();
  updateQuote();
}

// Both work:
button.addEventListener("click", handleClick); // ✅ Direct reference
button.addEventListener("click", (event) => handleClick(event)); // ✅ Explicit passing

//-------------------------------------------
// Example function to demonstrate code comparisons
//This checks if a number is even or odd
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
//PROTOTYPE AND STANDALONE FUNCTIONS
//You can add methods to built-in prototypes like String, Array, etc.
//This checks if a string is uppercase
String.prototype.isUpperCase = function () {
  return this === this.toUpperCase();
};
/*Every string in your entire program automatically has the method:
javascript"HELLO".isUpperCase()           // true*/

//You are using prototype, so this method will be applicable to ALL strings in your program, you JUST
//Have to call the method on any string instead of passing the string as a parameter to a separate function
"world".isUpperCase(); // false
"JavaScript".isUpperCase(); // false
"CODE".isUpperCase(); // true
"123!@#".isUpperCase(); // true

//However, modifying built-in prototypes is generally discouraged in JavaScript for several reasons:
//1. Global pollution - Every string everywhere gets your method:
//javascript// Some library's code that has nothing to do with you:
//let libraryString = "internal data";
//libraryString.isUpperCase(); // Suddenly has your method!
//2. Naming conflicts - What if another library also adds isUpperCase?
//javascript// Your code
//String.prototype.isUpperCase = function() {  your logic }

// Some other library
//String.prototype.isUpperCase = function() { different logic!}
// Oops! One overwrites the other
//3. Unexpected behavior for other developers:
//javascript// Another dev sees this and thinks "Wait, since when do strings have isUpperCase?!"
//"hello".isUpperCase()
//4. Hard to control or remove:
//Once it's there, it's everywhere. You can't easily "turn it off" for certain parts of your code.
//That's why standalone functions are more flexible:
function isUpperCase(str) {
  return str === str.toUpperCase();
}

// You control exactly when and where it's used
// No surprises, no conflicts, easy to test

//HOWEVER that function is wrong, because of the === operator
//To apply a method to every instance of a type, you need to use prototype
//Now every string instance has the method isUpperCase
String.prototype.isUpperCase = function () {
  return this == this.toUpperCase(); //this refers to the String object instance
};
//this doesn't change - it's always the same String object
/*But toUpperCase() returns a new primitive string, not a String object
So you're comparing: String object == primitive string
The == operator converts the String object to primitive for comparison*/

//A function to get the average and determined score of a student:
function getGrade(s1, s2, s3) {
  const average = (s1 + s2 + s3) / 3;

  switch (
    true //I tried to pass average initially, but it didn't work bc JS takes literally the static value of average and it never matches any case, therefore it's never "true"
  ) {
    //When I pass True instead, it checks each case until it finds one that is true
    case average >= 90:
      return "A";
    case average >= 80:
      return "B";
    case average >= 70:
      return "C";
    case average >= 60:
      return "D";
    default:
      return "F";
  }
}
//Another great solution:
function getGrade(s1, s2, s3) {
  var s = (s1 + s2 + s3) / 3;
  return s >= 90 ? "A" : s >= 80 ? "B" : s >= 70 ? "C" : s >= 60 ? "D" : "F";
}

//--------------------------------------------------------------
//A function hat takes a more than 5 char string and reverses it, if its >= to 5:
//THIS ONE IS WRONG THO, BECAUSE:
//1.- split("") splits every character, not every word
//2.- Arrays don't have a .reverse() method you can call directly on strings
//MAP always need a function
//Reverse only works on arrays, so you need to split the word into an array of characters first
function spinWords(string) {
  return string.split("").map(word.length >= 5 ? word.reverse() : word);
}

//THE RIGHT WAY:
function spinWords(string) {
  return string
    .split(" ")
    .map((word) =>
      word.length >= 5 ? word.split("").reverse().join("") : word
    )
    .join(" "); //This join is to join the words back into a single string or phrase
  //that because i splitted them first
}

//-----------------------------------------------------------
//WHAT IS A PURE FUNCTION?
/*So this means a pure function always throws a predictable result, because it will always do the same. 
 But in some cases a function output can change depending on what it does or if the variable changes or is a dynamic content*/

//Example of a pure function:
function getXPosition(time, speed) {
  return time * speed;
}
//(It is a lot like a math or physics formula, it will always return the same result for the same inputs)

//What a not pure function looks like:
//Like using external data that can change:
let userScore = 100;

function calculateBonus(multiplier) {
  return userScore * multiplier; // ← Depends on userScore!
}

calculateBonus(2); // Returns 200
userScore = 50;
calculateBonus(2); // Returns 100 (same input, different output!)
