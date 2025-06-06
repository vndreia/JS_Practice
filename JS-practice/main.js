
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


//Reduce() method example
/*  At its most basic, the reduce() method is often used to sum all the elements in an array 
(or combine them in some other way). It takes all the items and "reduces" them to a single value—whether
 that's a sum, product, or some other transformation.  */

const practicaSemanal = [20, 30, 25];

const suma = practicaSemanal.reduce(function(acumulador, minutos) {
  console.log(`Acumulador: ${acumulador}, Minutos: ${minutos}`);
  return acumulador + minutos;  
}, 0);   //¿Qué significa }, 0); en reduce?
//Ese 0 es el valor inicial del acumulador

//Another reduce() example:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const sum = arr.reduce(function (previousValue, item) {s
});
console.log(`sum: ${sum}`);

/*
 sum: 45
*/

//Another reduce example with -negative numbers
/* Crea un array para registrar las ganancias y pérdidas de un jugador.  */ 
const winsAndLosses = [190, 117, -381, -394, -36, 137, -473, 372, -383];

/* Calculemos cuánto dinero le quedará al jugador al final de la noche si empezó con 1.000 dólares.*/ 
const total = winsAndLosses.reduce(function (previousValue, item) {
    return previousValue + item;
}, 1000); // El valor inicial que se quiere establecer se pasa a través del método reduce() como segundo argumento.

console.log(total); // 149. ¿Qué esperabas? Así son los juegos de azar.

//Ejemplo de reduce con conditionals:

const order = ["manzana", "banana", "naranja", "banana", "manzana", "banana"];
const result = order.reduce(function (prevVal, item) {
    if (!prevVal[item]) {
        // Si no tienes esa cosa (manzana, banana, etc.) en la caja, la pones con 1
        prevVal[item] = 1;
    } else {
        // Si ya tienes esa cosa, la cuentas una vez más (sumando 1)
        prevVal[item] += 1;
    }
    return prevVal;
}, {});  //Aquí es donde se pone un objeto vacío: {} 


//Duda con: 
const acrostic = [
  "Stars up in the sky",  
  "They sparkle with love",  
  "All so glorious",  
  "Radiant above."
];
const cipherWord = acrostic.reduce(function (prevVal, item) {
  return prevVal + item[0];  //Por qué se están sumando los argumentos???
}, "");   //¿En qué casos se necesita el objeto vacío y por qué se escribe al final?
  
console.log(cipherWord);
//Respuesta:
//prevVal: Es el acumulador, es el valor que "acumula" los resultados mientras avanzamos en el array.

/*item[0]: Es el primer carácter de cada cadena de texto en el array. Como estás usando item[0], accedes a la
 primera letra de cada elemento del array acrostic.
 En la primera iteración, el acumulador (prevVal) empieza como una cadena vacía "" porque así lo has inicializado en el reduce(). Y item será "Stars up in the sky".

1---->En esta primera iteración, prevVal = "" y item = "Stars up in the sky", entonces prevVal + item[0] sería "" + "S", lo que resulta en "S".
2----->En la segunda iteración, el acumulador ahora es "S", y item será "They sparkle with love".
3------>Entonces prevVal = "S" y item = "They sparkle with love", lo que resulta en "S" + "T", es decir, "ST".
4------>Esto sigue sucediendo para todas las demás frases en el array. Al final, prevVal tendrá la concatenación de las primeras letras de todas las cadenas, formando la palabra "STAR".
5---->El proceso de "sumar" las letras es simplemente concatenarlas. Si hubieras estado trabajando con números, entonces en vez de prevVal + item[0] habrías hecho algo como prevVal + item.
*/

//Un ejercicio práctico
const yogaOk = actividades.every(function(min >= 30) {
return yogaOk.)};
//La corrección: 
const yogaOk = actividades.yoga.every(function(min) { //Function establece los argumentos y parámetros
  return min >= 30; //A partir de return le dices qué ejecutar (o qué valor devolver)
});

//Esta función hace que se imprima una la palabra word al buscarla en el documento
function findTheWord(word) {
  const documentBody = document.body.textContent;
 return documentBody.search(word);  
}
 /*.search(word) busca la primera coincidencia de la palabra 
 (puede ser una expresión regular) y devuelve el índice (posición) donde la encontró.
Si no la encuentra, devuelve -1.
*/
//Y esta función encuentra cuántas veces se repite
let wordsCounter = 0;
for (let i = 0; i < words.length; i++) {
if (words)
}

//SORT method example:

const chessChampions = [
	"Wilhelm Steinitz",
  "Emanuel Lasker",
  "Jose Capablanca",
  "Alexander Alekhine",
  "Machgielis Euwe",
  "Mikhail Botvinnik",
  "Vasily Smyslov",
  "Mikhail Tal",
  "Tigran Petrosian",
  "Boris Spassky",
  "Robert Fischer",
  "Anatoly Karpov",
  "Garry Kasparov",
  "Vladimir Kramnik",
  "Viswanathan Anand",
  "Magnus Carlsen"
];

chessChampions.sort(function (a, b) {
const aSecondName = a.split(" ")[1].toLowerCase();  /*split(" " ) escrito de esa forma, está indicando que en cada espacio
 se haga la separación para que me devuelva el segundo elemento completo,  y no sólo la primera letra
*/
  const bSecondName = b.split(" ")[1].toLowerCase();

if (aSecondName > bSecondName) return 1;  //This puts the bigger element after
if (aSecondName < bSecondName) return -1; //This puts the element first

return 0; //If they have the same value the order remains the same
console.log(chessChampions);

});

//Another SORT example:

const chessChampions = [
  ["Alexander Alekhine", 1927],
  ["Alexander Alekhine", 1937],
  ["Viswanathan Anand", 2007],
  ["Mikhail Botvinnik", 1948],
  ["Mikhail Botvinnik", 1958],
  ["Mikhail Botvinnik", 1961],
  ["Magnus Carlsen", 2013],
  ["Max Euwe", 1935],
  ["Robert Fischer", 1972],
	["Jose Raul Capablanca y Graupera", 1921],
  ["Anatoly Karpov", 1975],
  ["Garry Kasparov", 1985],
  ["Vladimir Kramnik", 2006],
  ["Emanuel Lasker", 1894],
  ["Tigran Petrosian", 1963],
  ["Vasily Smyslov", 1957],
  ["Boris Spassky", 1969],
  ["Wilhelm Steinitz", 1886],
  ["Mikhail Tal", 1960]
];

chessChampions.sort(function(a, b) {
return a[1] - b[1];

});

console.log(chessChampions);

//why this works?
const a = ["Kasparov", 1985];
const b = ["Carlsen", 2013];

a[1] - b[1] // → 1985 - 2013 → -28 ✅

//This is a loop example with a function to count the number of vowels in a sentence:

function getVowelCount(sentence) {
  const vowels = "aeiou";  // This defines the characters we consider vowels.
  let count = 0;  // This initializes a counter to track the number of vowels.
  for (const char of sentence.toLowerCase()) {
    // The .toLowerCase() ensures that we match both uppercase and lowercase vowels.
    if (vowels.includes(char)) {
      count++;  // If the character is a vowel, increment the counter.
    }
  }
  return count;  // After checking all characters, return the final vowel count.
}

//And this is a loop with a function to get the count of consonants with a number:

function getConsonantCount(sentence) {
  const vowels = "aeiou";
  let count = 0;
  for (const char of sentence.toLowerCase()) {
    if (char >= 'a' && char <= 'z' && !vowels.includes(char)) {  /*THE tricky part with a>= 'a' && char <= 'z' is that
      each character in UNICODE has a value, so you can actually compare its value, even tho they're not numbers*/
      count++;
    }
  }
  return count;
}


//Function to get any special character count.
function getPunctuationCount(sentence) {
const punctuation = /[^a-zA-Z0-9 ]/; //regex to match any character that is not a letter, number, or space
let counter = 0;
  for (const char of sentence) {
if (punctuation.test(char)) { //test() checks if the character matches the regex
  counter++;
}
  }
  return counter;
}

//Function to count the number of words in a sentence.

function getWordCount(sentence) {  
  const words = sentence.trim().split(/\s+/);  /*  //\s+/ means:
"Find one or more spaces, tabs, newlines, or any other kind of space character!"*/
  if (words[0] === '') { //"If the first item in the words array (which is words[0]) is empty (''), then that means there are no words — so we should return 0
  return 0;
}
}
//Trim is a method that deletes any space only at the beginning or end of the string.
//Split is the method that created a division between each element, uses "," by default.


//Scope: context in which a function appears
//si declaras una variable dentro de una función, sólo se puede acceder a ella desde esa función
//No podrás acceder a una variable que está dentro de una función
//Las variables y las funciones se reconocen como identificadores
//Ejemplo:

let batteriesNumber = 12;
let batteriesInTetris = 4;

function findBatteries() {
    const batteriesNumber = 8;

    console.log(batteriesNumber); // 8
/* el identificador batteriesNumber existe dentro de la función,
    por lo que este es el valor que se registrará en la consola */

    console.log(batteriesInTetris); // 4
/* no existe tal identificador dentro de la función,
 así que el motor lo recuperó de fuera de esa función */
}

//Scope global: una variable definida fuera de una función que puedes integrar en otras piezas de código
//Scope anidado: funciona de adentro hacia afuera. Si el motor de JS no lo encuentra dentro, lo buscará fuera

//Función: 
function procrastinate() {
  dogElement.style.backgroundImage = `url(${dogs[getRandomArrId(dogs.length)]})`;
}

//Expresión de función: 

const procrastinate = function() {
   dogElement.style.backgroundImage = `url(${dogs[getRandomArrId(dogs.length)]})`;
}

//Valores predeterminados: 
function makeBeastArray(a = "Koala", b = "Wómbat", c = "Perezoso") {
  return [a, b, c];
}

//Una función que encuentra el menor valor de un array:
function findSmallestInt(arr) {
  const smallest = Math.min(...arr);
  return smallest;
}

//Ejemplo de función en DOM: 
function openPopup(popupElement) {
    popupElement.classList.add("popup_is-opened");
}
popupButton.addEventListener("click", function () {
    openPopup(popup);
});

//Ejemplo de una función que saca el promedio (se puede hacer un if en cadena):
function getGrade (s1, s2, s3) {
  const average = (s1 + s2 + s3) / 3;

  if (average >= 90) return 'A';
  if (average >= 80) return 'B';
  if (average >= 70) return 'C';
  if (average >= 60) return 'D';
  if (average >= 0) return 'F';
}

//Same tho:
function getGrade (s1, s2, s3) {
  avg = (s1+s2+s3)/3;
  if (avg < 60)  return "F";
    else if (avg < 70) return "D";
    else if (avg < 80) return "C";
    else if (avg < 90) return "B";
    else return "A";
}


titleInput.addEventListener("keydown", function (evt) {
  if (evt.key === "Enter") {
    addSong(artistInput.value, titleInput.value); //You get the values written by the user with the property .value
  }
}); 

artistInput.addEventListener("keydown", function (evt) {
if (evt.key === "Enter") {
  addSong(artistInput.value, titleInput.value);
}
});

//Ahora lo mismo, refactorizado:
function keyHandler(evt) {
  if (evt.key === "Enter") {
    addSong(artistInput.value, titleInput.value);
  }
}

titleInput.addEventListener("keydown", keyHandler);
artistInput.addEventListener("keydown", keyHandler);

//A beautiful function to get a random element from an array:
const coverHeading = document.querySelector(".cover__heading");
const playListTitles = [
  "Música clásica de ascensor - Volumen IV",
  "Canciones para hacer calceta",
  "Mis canciones de gaita favoritas"
];

function getRandomElement(arr) {
  const randomId = Math.floor(Math.random() * arr.length);
  return arr[randomId];
}

coverHeading.addEventListener("dblclick", () => {
  coverHeading.textContent = getRandomElement(playListTitles);
});

//First removeEventListener that makes the code run only once:
function doubleClickHandler(evt) {                            
  coverHeading.textContent = getRandomElement(playListTitles);
  coverHeading.removeEventListener("dblclick", doubleClickHandler); //Inside the function, you remove the event listener, this way it only runs once
}

coverHeading.addEventListener("dblclick", doubleClickHandler);

//An oulipian function that prevents the user to write the letter "e" or "E" in the input fields:
function keyHandler(evt) {
  if (evt.key === "Enter") {
    addSong(artistInput.value, titleInput.value);
  }
  else if (evt.key === "e" || evt.key === "E") 
  {
    evt.preventDefault(); // This prevents the default action of the key press, which is to type the letter "e" or "E"
  }
  console.log(evt.key); //Registers any key pressed
}

//Now this is the same function as above, but refactored:
function keyHandler(evt) {
  if (evt.key === "Enter") {
    addSong(artistInput.value, titleInput.value);
  }
   if (evt.key.toLowerCase() === "e") {
     evt.preventDefault();
   }
}

//This is a very powerful yet simple function that toggles the class "song__like_active" on the clicked song element:
  songsContainer.addEventListener("click", function (evt){  //I selected the container to avoid adding an event listener to each song individually
    evt.target.classList.toggle("song__like_active");  //The evt.target references the element that was clicked without needing to specify it
  });
  //Conclusion: evt.target is my best friend 
  
  //But now there's a problem: if you click aywhere in the container, it will toggle the class on that element, not just on the song like button.
  //So this is how you fix the bug:
    songElement.querySelector(".song__artist").textContent = artistValue;
  songElement.querySelector(".song__title").textContent = titleValue;
  songsContainer.addEventListener("click", function (evt){
    if (evt.target.classList.contains("song__like")){ //Appplied a condition to check if the clicked element has the class "song__like"
      evt.target.classList.toggle("song__like_active");
    }
  });

  //A function to add a song to the playlist:
  form.addEventListener("submit", (evt) => {
  addSong(artistInput.value, titleInput.value);
  artistInput.value = ""; //The "" cleans up the input field after adding the song
  titleInput.value = "";
});

//Another way to clean up a form (which I prefer):
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  addSong(artistInput.value, titleInput.value);
  form.reset(); //cleaner 
});