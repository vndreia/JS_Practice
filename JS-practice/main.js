//These are comments that are great for debugging
/*So the ain purpose of using console methods and 
comments is to help other developers (and sometimes yourself) understand
 what the code is doing, especially when working in a team or revisiting 
 code after a long time.*/

{console.log('Hello World');
console.error("This is an error");
console.warn('This is a warning');}

/* With numbers there´s this interesting operator for division fact:
20 / 3 gives you the result
20 % 3 gives you the residue = 2. */
// variables: let and const 
// They have a block level scope (only accesible in their blocks)
Cualquier conjunto de caracteres encerrados entre comillas simples o dobles es un string:

console.log('palabra');
console.log('No solo una palabra, sino una oración completa.');
console.log('1984'); // un número que aparece entre comillas es un string 

Blocks in JavaScript (denoted by curly braces {} are used to group statements
    together in various situations, such as in functions, conditionals, loops, 
    or any control structure. 

/* 
Loops are used when you want to repeat actions multiple times.
Functions are blocks of code that run when called, typically in response to user interactions.
*/

// let
let age = 30;  // with allow you to reasign values
 age = 31;   
let name = 'Alice';
console.log('name');  // This will print "Alice" to the console

 // const
 let age = 30;  // don´t allow you to reasign values, recommended to use the most unless you reasign variables
 age = 31; 

 //datatypes: string, numbers, boolean, null, undefined, NaN as some "errors"

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

  //Another method

  const s = "Hello world";
  console.log(s.split(""));

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

console.log(fruits); 
// Now the array is: ["blueberries", "apples", "oranges", "pears", 10, "mangos"]

 const numbers = new Array(1, 2, 3, 4, 5);
  console.log(numbers);
nummbers[5] = "12"; //This should show 12 in the console as the 5th value


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
//The function func
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



const 
function andreasBf () {
  if 
}