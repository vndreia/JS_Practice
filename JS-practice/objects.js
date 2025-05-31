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

windowNumber = windows[yourNumber] || 0; // If yourNumber is not found, windowNumber will be set to 0

//How to delete a property from an object:
const right = {
  right1: "⇸",
  right2: "→",
  notLeft: "⇍",
  right3: "⇛",
  right4: "⇉",
  left: "⇐",
};

delete right["left"];
//Examples of how to create a function that deletes properties from an object:

const welcomeMessages = {
  english: "Welcome",
  french: "Bienvenue",
  italian: "Benvenuto",
  spanish: "Bienvenido",
  russian: "Добро пожаловать",
  chinese: "歡迎",
  finnish: "Tervetuloa",
  portuguese: "Bem-vindo",
};

function deleteWelcomeMessages(propsArr) {
  propsArr.forEach(function (key) {
    delete welcomeMessages[key];
  });
}

//AND the arrow function way:

function deleteWelcomeMessages(propsArr) {
  propsArr.forEach((key) => {
    delete welcomeMessages[key];
  });
}

//For in loop in an object:
const emojis = {
  smile: "😃",
  kiss: "😚",
  smirk: "😏",
  disappointment: "😞",
  astonishment: "😲",
  dizziness: "😵",
};

for (let emotion in emojis) {
  console.log(`${emotion} - ${emojis[emotion]}`);
}
/* la consola mostrará:

  smile - 😃
  kiss - 😚
  smirk - 😏
  disappointment - 😞
  astonishment - 😲
  dizziness - 😵

*/
//In each iteration the variable emotion will take the value of eack key.

//Example of an object with reduce:
const yogaMinutes = {
  lunes: 30,
  martes: 45,
  miercoles: 0,
  jueves: 60,
  viernes: 40,
  sabado: 20,
  domingo: 0,
};

const totalPractica = Object.values(yogaMinutes).reduce((min, totalMin) => {
  return min + totalMin;
}, 0);

console.log("Total de práctica:", totalPractica);

//Iteration of properties:
//Another example, this is how filters are made under the hood:const tion = {
const tion = {
  fruition: "la realización o cumplimiento de un plan o proyecto",
  depreciation: "el proceso de pérdida de valor",
  microseismicity: "un débil temblor de tierra causado por fenómenos naturales",
  alienation: "la transmisión de la propiedad",
  bifurcation:
    "el punto o la zona en la que algo se divide en dos ramas o partes",
  locomotion: "la capacidad de moverse",
  fusion: "proceso de unificar o juntar dos objetos",
};

Object.keys(tion).forEach(function (key) {
  if (!key.endsWith("tion")) {
    delete tion[key];
  }
});
console.log(tion);

//This is how I learn const in objects don't save the object, but they reference it;
const firstPirate = {
  name: "Jack",
  nickName: "Sparrow",
};

const secondPirate = firstPirate; //So this means firstPirate and secondPirate are referencing or matching the same object in memory.
secondPirate.rank = "Capitán"; //This addds the new property to both firstPirate and secondPirate because they are referencing the same object.

console.log(firstPirate);
// { name: "Jack", nickName: "Sparrow", rank: "Capitán" }  por qupe se le agrega el rank a la const firstPirate si es a secondPirate al que se le agrega la propiedad de rank?

console.log(secondPirate);
// { name: "Jack", nickName: "Sparrow", rank: "Capitán" }

/*//Una función que toma un objeto, lo copiará y devolverá uno nuevo.  Este nuevo objeto debe tener el mismo conjunto de métodos y propiedades y cuando
//  se cambie el objeto inicial el nuevo deberá seguir intacto.  Object.keys() devuelve un array con las keys del objeto.*/
function copy(obj) {
  const res = {}; //Crea un objeto vacío almacenar key y value del nuevo objeto.
  Object.keys(obj).forEach((key) => {
    //Accede a las keys del objeto y las recorre con forEach.
    res[key] = obj[key]; //Obtiene el valor de cada key del objeto original y lo asigna al nuevo objeto res.
    //Esto crea una copia superficial del objeto original con las mismas propiedades y valores.
  });
  return res;
}

//Function that comnpares two objects keys and values (wow, it was hard)

function isEqual(firstObj, secondObj) {
  const keys1 = Object.keys(firstObj);
  const keys2 = Object.keys(secondObj);
  if (keys1.length !== keys2.length) {
    return false;
  }
  return keys1.every(function (key) {
    return firstObj[key] === secondObj[key];
  });
}

//A shallow copy example:
function shallowCopy(obj) {
  return Object.assign({}, obj);
}

const myObj = {
  one: 1,
  two: 2,
  three: 3,
};

const myObjCopy = shallowCopy(myObj); //Call the function to create a shallow copy of myObj
console.log(myObjCopy); // { one: 1, two: 2, three: 3 }

console.log(myObjCopy === myObj); // false
