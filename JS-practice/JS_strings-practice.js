//cuando haces:
console.log(window);
//Estás imprimiendo en la consola del navegador el objeto global window, que contiene prácticamente todas las propiedades y métodos del entorno del navegador.

console.log("Hi there!");

const botName = "teacherBot";

const greeting = `My name is ${botName}.`;
console.log(greeting);

const subject = "JavaScript";
const topic = "strings";

const lessonSentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(lessonSentence);

const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length);

console.log(
  `Here is an example of using the length property on the word ${topic}.`
);
console.log(topic.length);

console.log(
  `Here is an example of accessing the first letter in the word ${subject}.`
);

console.log(subject[0]);

console.log(
  `Here is an example of accessing the second letter in the word ${subject}.`
);
console.log(subject[1]);

console.log(
  `Here is an example of accessing the last letter in the word ${subject}.`
);

const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);

/*When you're accessing a character directly from a string (like with subject[subject.length - 1]), you don't need to use template literals (${}) because you're just directly assigning or referencing the value.
Template literals are used when you want to embed expressions or variables into a string.*/

const learningIsFunSentence = "Learning is fun.";

//Example Code
const sentence = "I love to learn.";

// returns index 2
console.log(sentence.indexOf("love"));

// returns -1
console.log(sentence.indexOf("hate"));

//A function that returns a double charactered string:
function doubleChar(str) {
  return str
    .split("")
    .map((letter) => letter.repeat(2))
    .join("");
}
// Example usage:
console.log(doubleChar("hello")); // "hheelllloo"

//Some practice function
function greet(name, owner) {
  const greeting = name === owner ? "Hello boss" : "Hello guest";
  return greeting;
}

//Now optimized:
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

//About export and import:
export const alphaWord = "άλφα";
export const LAMBDA_SYMBOL = "λ";

export let currentSymbol;
//The loop can't be exported directly, but the variable currentSymbol can be used outside this module after importing it.
for (let i = 0; i < alphaWord.length; i += 1) {
  currentSymbol = alphaWord[i];

  if (currentSymbol === LAMBDA_SYMBOL) {
    console.log(`${alphaWord} contains ${LAMBDA_SYMBOL}`);
    break;
  }
}
//The loop has ran, so when I import currentSymbol, it will have the value of the last character in alphaWord, which is "α".

//How to import everything from a module all at once:
//lib.js
export const alphaWord = "άλφα";
export const LAMBDA_SYMBOL = "λ";

export let currentSymbol;

for (let i = 0; i < alphaWord.length; i += 1) {
  currentSymbol = alphaWord[i];

  if (currentSymbol === LAMBDA_SYMBOL) {
    console.log(`${alphaWord} contains ${LAMBDA_SYMBOL}`);
    break;
  }
}
//index.js
import * as all from "./lib.js";
console.log(all.symbol);

//vowels
function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  return str.split("").filter((char) => vowels.includes(char)).length;
}

//function to only return the result if Robert is playing:
function areYouPlayingBanjo(name) {
  if (name.startsWith("r") || name.startsWith("R")) {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}
//Optimized:
function areYouPlayingBanjo(name) {
  return toLowerCase().startsWith("r")
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

//toLowerCase() method: doesn't have parameters because its a string method from the string object prototype
//It converts all the characters in a string to lowercase letters and returns a new string with the converted characters.
//Example:
const mixedCaseString = "HeLLo WoRLd!";
const lowerCaseString = mixedCaseString.toLowerCase();
console.log(lowerCaseString); // Output: "hello world!"
// The string IS the data being operated on
"HELLO".toLowerCase(); // "hello" - operates on "HELLO"
name.toLowerCase(); // operates on whatever 'name' contains

//Its like real wold objects:

// A car "knows" how to start itself
car.start(); // No parameters needed

// But needs to be told where to go
car.driveTo("store"); // Needs destination parameter

// A person "knows" how to stand up
person.standUp(); // No parameters needed

// But needs to be told what to say
person.say("hello"); // Needs the words parameter
