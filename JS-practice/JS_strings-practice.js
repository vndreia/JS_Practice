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

//Example of using an OBJECT with a FUNCTION
let employee = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

function getFullName(employee) {
  console.log(employee.firstName + " " + employee.lastName);
}
getFullName(employee); // Output: John Doe

//A function that orders books by information example:
const library = [
  {
    title: "Your Next Five Moves: Master the Art of Business Strategy",
    author: "Patrick Bet-David and Greg Dinkin",
    about: "A book on how to plan ahead",
    pages: 320,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    about:
      "A practical book about discarding bad habits and building good ones",
    pages: 320,
  },
];

function displayBooks(arr) {
  return arr
    .map(
      (book) =>
        `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}`
    ) // Using map to create a new array of formatted strings
    .join("\n"); // Joining the array into a single string with line breaks
}

// \n es un carácter especial en programación que significa "salto de línea" o "nueva línea" (new line).

//Y luego para obtener sólo el about:

function getBookSummaries(library) {
  return library.map((book) => book.about);
}

//La arrow function (=>) es lo que le dice a .map() qué hacer con cada elemento del array.

//Getting the books only by author with filter:
function getBooksByAuthor(catalog, author) {
  return catalog.filter((book) => book.author === author);
}

//A function that returns the total number of pages in the books from the array;
function getTotalPages(catalog) {
  return catalog.reduce((total, book) => total + book.pages, 0);
}

//0 is the initial value
//Total is the accumulator that keeps track of the total number of pages as we iterate through the array.
//book.pages is the current value that we're adding to the total.

//Dynamic ojbect example:

const obj = {};
const clave = "nombre";
obj[clave] = "Juan";
console.log(obj); // { nombre: "Juan" }

//Another dynamic object example:
const persona = {};
const propiedad = "profesion";
const valor = "Ingeniera";
persona[propiedad] = valor;
console.log(persona); // { profesion: "Ingeniera" }

//An example of an object and a function
const phonebook = {
  //A directory of contacts with their phone numbers
  Lily: {
    mobile: "+16235554420",
    work: "+12445552374",
    home: "+19775552223",
  },
  "Tim's brother Kyle": {
    mobile: "+4235555616",
  },
};

function addPhoneNumber(name, numberType, number) {
  if (!phonebook[name]) {
    //Si el contacto no existe
    phonebook[name] = {}; //Se crea su objeto vacío
  }
  // Añadimos o actualizamos el número del tipo dado para ese contacto
  phonebook[name][numberType] = number;
}

//An example of an object replacing switch statements
const yourNumber = "D135";
let windowNumber;

switch (yourNumber) {
  case "D133":
    windowNumber = 1;
    break;
  case "D134":
    windowNumber = 2;
    break;
  case "D135":
    windowNumber = 3;
    break;
  case "D136":
    windowNumber = 4;
    break;
  case "D137":
    windowNumber = 5;
    break;
}
console.log(windowNumber); // 3

//The beautiful object way to do the same thing:
const yourNumber = "D135";
let windowNumber;

const windows = {
  D133: 1,
  D134: 2,
  D135: 3,
  D136: 4,
  D137: 5,
};

windowNumber = windows[yourNumber];

console.log(windowNumber); // 3
