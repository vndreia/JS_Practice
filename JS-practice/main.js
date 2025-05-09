
/* With numbers there´s this interesting operator for division fact:
20 / 3 gives you the result
20 % 3 gives you the residue = 2. */

/* 
Loops are used when you want to repeat actions multiple times.
Functions are blocks of code that run when called, typically in response to user interactions.
*/

 age = 31; 

 //primitive datatypes: string, numbers, boolean, null, undefined, NaN as some "errors"
 //They actually are immutable, only changes the reference

 const name = 'John';
 const age = 30;
 const isCool = true;
 const rating = 4.5; //there´s not float in Javascript, only number
 const x = null;
 const y = undefined;

 
  //Concatenation
  console.log("My name is" + name + "and I am" + age);

  //Template string
  const hello = 'My name is ${name} and I am ${age}';

  console.log(hello);

  //Arrays - Variables that hold multiple values
  //Arrays are CERO based, meaning they start from 0 onwards
   /*You can have multiple data type within an array in Javascript*/

const fruits = ["apples", "oranges", "pears", 10];  

console.log([1]);  
// ❌ This logs a NEW array containing just the number 1: [1]
// ✅ If you want to log "oranges", you need to reference the `fruits` array:

console.log(fruits[1]); 
// This actually logs: "oranges"

// Other ways to manipulate values

fruits.push("mangos"); 
// Adds "mangos" to the END of the array

fruits.unshift("blueberries"); 
// Adds "blueberries" to the BEGINNING of the array


//An OBJECT assigned to the person constant. 
const person = {
  firstName: 'John', 
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 main st',
    city: 'Boston',
    state: 'MA'
  }
}

//Pulling some of this out in the console looks like:

const {firstName, lastName, address: {city}} = person;
console.log(city); 
//This will show "Boston" in the console as a result
//This structure allows you to extract values from an object and assign them to variables

//If we want to add something else:

person.email = 'john@gmail.com';
console.log(person); //This should show the email in the console

let MeaningOfLife;

console.log(MeaningOfLife); // undefined 

//This is how you write an arrow function and call it 

const addThreeAndFour = () => 3 + 4; 
console.log(addThreeAndFour());

// The parameter is `name`
function greetUser(name) {
  return `Hello, ${name}!`;
}

//The arrow function
const calculateSum = (num1, num2) => num1 + num2;
console.log(calculateSum(2, 5)); // Calling the function, Output: 7

console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

/*Another example of a math.pox function vs arrow function*/
//The arrow function
const calculateSquare = (num) => Math.pow(num, 2); //Math.pow exponentiates the number
//The function execution
function calculateSquare(num) {
  return num ** 2;
}
//Same input tho
console.log(calculateSquare(2));

//To examine your document object:
console.log(document.domain);
console.log(document.url);
console.log(document.title);
document.title = 123;
console.log(document);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all); //This crawls everything in the DOM

// These are weird string methods:
const myName = prompt("¿Cómo te llamas?", ""); //PopUp
const firstLetter = myName[0].toUpperCase(); // Selects the first index letter and turns it into UpperCase
const restOfName = myName.slice(1); //This breaks up the last method to continue with lower case

console.log("Hola, " + firstLetter + restOfName);
//This finally shows "Hola, Andrea" despite I wrote my name in lower case
//Really cool method tho

//Now this is a goddamn function, jesus 

/* La función toma dos argumentos:
presión sistólica y diastólica
(arriba y abajo) */

function getNormal(sys, dia) {  //You start a function you open { 
  if (sys >= 100 && sys <= 135 && dia >= 60 && dia <= 85) { //You start a conditional you open another {
  return true;
  } /*You close it*/ else {  //Another conditional, so another {}
   return false;
 }
} //Closing }
//Help 
console.log(getNormal(110, 70)); // true
console.log(getNormal(140, 75)); // false
console.log(getNormal(98, 80)); // false


/*Termina el código que comprueba si una contraseña contiene o no un signo de interrogación. Si hay un signo de interrogación, registra su posición en la contraseña en la consola.*/

const password = prompt("Introduce la contraseña:", ""); //"" = Default vale

for (let i = 0; i <= password.length; i++) {
  if (password[i] === "?") {
    console.log("La contraseña contiene ? en el carácter" + (i + 1)); //i + 1 because the index starts from 0, so you add 1 to get the actual position
  }break;
}


//Arrays practice 
const shoppingList = [];

console.log("It will be nice to have some fruit to eat.");

shoppingList.push("Apples");

function getShoppingListMsg(arr) {
  return `Current Shopping List: ${arr.join(', ')}`;  //Join will combine all elements into a single string
}
//Join is mostly used to create a readble output
// mainly used to create a readable string from an array. 
console.log(getShoppingListMsg(shoppingList));

shoppingList.push("Grapes");
console.log(getShoppingListMsg(shoppingList));

//This is another way to hardcode the function:
function getShoppingListMsg() {
  return `Current Shopping List: ${shoppingList}`;
}
/*Now you don’t need to pass anything:
console.log(getShoppingListMsg());
But this makes the function less reusable, 
since it only works with one global variable: shoppingList.
You're locking the function to only work with one specific variable, instead of letting it work with any data you give it.*/



//Map example 
const words = [
  "Baden",
  "aye",
  "go",
  "agar"
];

var reduplications = words.map(function (elem) {
  return elem + "-" + elem;
});

console.log(reduplications); // Baden-Baden,aye-aye,go-go,agar-agar 


/*Ejemplo de forEach*/

const a = [
  "Harry Potter y la piedra filosofal",
  "Harry Potter y la cámara secreta",
  "Harry Potter y el prisionero de Azkaban",
  "Harry Potter y el cáliz de fuego",
  "Harry Potter y la Orden del Fénix",
  "Harry Potter y el misterio del príncipe",
  "Harry Potter y las Reliquias de la Muerte",   
  "Harry Potter y los métodos de racionalidad"
];

const b = [];

a.forEach(function (item) {  
  b.push(item.split(" y ")[1]); //Con push agregas un alimento al final 
  //Con split conviertes un string en un array a partir de "y"
  //El [1] toma el elemento indexado como 1, que es en este caso todo lo qeu va después de Harry Potter
  //[1] Selecciona el segundo elemento del array que se creó (los arrays comienzan en 0):
});

console.log(b); //Con varios títulos, b terminaría conteniendo:
/*
[
  "la piedra filosofal",
  "la cámara secreta",
  "el prisionero de Azkaban",
  ...
]
*/

//ForEach syntax:

array.forEach(function(currentValue, index, array) {
  // código que se ejecuta por cada elemento del array
});

//forEach example:

let fruits = ["apple", "banana", "orange"];
//Imprime ahora el nombre de cada fruta junto con su índice: 
fruits.forEach(function(currentValue, index, array) {
  console.log(`El índice ${index} tiene el valor: ${currentValue}`);
});

//A function that removes every space from strings: 
function noSpace(x){
  return x.replace(/\s+/g, '')
 }

 //1---> .replace is a method to replace
 //2---> /\s+/g finds all the blank spaces (4 some reason)
 //3---> '' It´s a way to say "no space"

 //Map example
 const characters = [
  "Luke Skywalker",
  "Obi-Wan",
  "Chewbacca",
  "Anakin Skywalker",
  "Han Solo",
  "Palpatine"
];

 const newCharacters = characters.map(function (character) {
  if (character === "Anakin Skywalker") {
    return "Darth Vader";  // Caso cuando el personaje es "Anakin Skywalker"
  }
  return character;  // Caso cuando el personaje no es "Anakin Skywalker"
});

/*Por qué dos return?
Resumen:
El primer return cambia sólo "Anakin Skywalker" por "Darth Vader".

El segundo return asegura que los demás personajes permanezcan sin cambios en el nuevo array.

Si solo tienes un return como en tu código:*/

const newCharacters = characters.map(function (character) {
  if (character === "Anakin Skywalker") {
    return "Darth Vader";
  }
});
/*El nuevo array newCharacters será algo así:

[undefined, undefined, undefined, "Darth Vader", undefined, undefined]

¿Por qué pasa esto?
Cuando el personaje no es "Anakin Skywalker", la función no devuelve nada, lo que resulta en undefined para esos elementos en el nuevo array.
Cuando el personaje sí es "Anakin Skywalker", se devuelve "Darth Vader" y se coloca correctamente en el nuevo array.*/

//Ejemplo simple de MAP()
const nums = [1, 2, 3];

const result = nums.map(function (num) {
  if (num > 1) {
    return num * 2;
  }
});

//Esto dará [undefined, 4, 6]
/*Porque:

1 no cumple la condición (num > 1) → no hay return → undefined

2 sí → devuelve 4

3 sí → devuelve 6*/

// tendría que poner 
const nums = [1, 2, 3];

const result = nums.map(function (num) {
  if (num > 1) {
    return num * 2;
  }  
  return num; 
});    
console.log(result);  // [1, 4, 6]


//Filter example:

const a = [1, 9, 2, 2, 3, 4, 1, 7, 8, 0, 9, 0, 1, 5, 3];

const b = a.filter(function (item, index, array) {  //Those same parameters for forEach, map, filter
    return array.lastIndexOf(item) === index; // “¿La posición actual (index) es igual a la última vez que este número aparece (lastIndexOf(item))?”s

console.log(a); // [1, 9, 2, 2, 3, 4, 1, 7, 8, 0, 9, 0, 1, 5, 3]
console.log(b); // [2, 4, 7, 8, 9, 0, 1, 5, 3]
});
//Why array.lastIndexOf works.
const a = [1, 2, 3, 1];
a.lastIndexOf(1); // devuelve 3, porque el 1 aparece por última vez en la posición 3

//Loops 
//For
for(let 1 = 0; i <= 10; i++) {
console.log(i); //1 2 3 4 5 6 7 8 9 10
}
//Also
for(let 1 = 0; i <= 10; i++) {
  console.log(`For loop Number: ${1}`); 
}

//While loops 
let i = 0;
while(i < 10); {
  console.log(`While Loop Number: ${i}`); 
  i++
}

//Weird sum loop
const arr = [2, 4, 6];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i]; // or sum = sum + arr[i];
}

console.log(sum); // Output: 12
