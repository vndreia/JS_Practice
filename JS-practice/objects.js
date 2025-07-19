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

//A beautiful code that creates a shallow copy with an empty object to turn fishes into frogs ONLY when the function is called:

function evolution(obj, key, value) {
  const newObj = Object.assign({}, obj);
  newObj[key] = value;
  return newObj;
}
const fish = {
  eggs: "huevas",
  eyes: 2,
  habitat: "agua",
};
const frog = evolution(fish, "legs", 4); //You call the function and use the const fish as the object to copy, and add the new key and value.

console.log("rana: ", frog);
// rana: {eggs: "huevas", eyes: 2, habitat: "agua", legs: 4}
console.log("pez: ", fish);
// pez: {eggs: "huevas", eyes: 2, habitat: "agua")

//A deep copy example:

const aladdinSane = {
  artist: "David Bowie",
  album: "Aladdin Sane",
  year: 1973,
  tracks: {
    // An object with the tracks of the album
    "Watch That Man": "4:30",
    "Aladdin Sane": "5:06",
    "Drive-In Saturday": "4:33",
    "Panic in Detroit": "4:25",
    "Cracked Actor": "3:01",
    Time: "5:15",
    "The Prettiest Star": "3:31",
    "Let's Spend the Night Together": "3:10",
    "The Jean Genie": "4:07",
    "Lady Grinning Soul": "3:54",
  },
};

const aladdinSaneCopy = Object.assign({}, aladdinSane, {
  //You open the object tracks with {}
  tracks: Object.assign({}, aladdinSane.tracks, {}), //You copy the actual object and extract the tracks object to copy it too
});
//Create a new object, copy all the key-value pairs from aladdinSane.tracks, and then (optionally) add or overwrite some of them with the third object

console.log(aladdinSane.tracks === aladdinSaneCopy.tracks); // false

//Functions are objects too, so you can add properties to them:
function counter() {
  // Si esta propiedad aún no existe, la inicializamos en 0
  if (!counter.times) {
    counter.times = 0;
  }
  // Incrementamos la propiedad times cada vez que se llama la función
  counter.times += 1;
  // Devolvemos el número actual de llamadas
  return counter.times;
}

//A function that creates a song object with a title, artist, and a like method
function createSong(title, artist) {
  // crea un objeto llamado newSong
  const newSong = {
    title,
    artist,
    isLiked: false,
    like: function () {
      newSong.isLiked = !newSong.isLiked;
    },
  };

  return newSong; // haz "return" en este objeto
}

const song1 = createSong("Chanel", "Frank Ocean");
const song2 = createSong("Circles", "Mac Miller");
const song3 = createSong(
  "Until I Walk Through The Flames",
  "Wicca Phase Springs Eternal"
);
//Although the function createSong works, it's not convenient for RAM memory, because it creates a new function every time you call it.

//So you optimize the function by using "this"
function like() {
  this.isLiked = !this.isLiked;
}

function createSong(title, artist) {
  return {
    title,
    artist,
    isLiked: false,
    like: like, // apunta a la misma función
  };
}

//  prueba cómo funcionan los datos y la funcionalidad conjuntamente/
console.log(song1.isLiked); // false
song1.like(); //This was a toggle
console.log(song1.isLiked); // true

//Example of a manual togggle:
let isLiked = false; //isLiked is initialized as false
isLiked = !isLiked; //If isLiked is false, then !isLiked willl be true, but now isLiked will be true
//Now isLiked is true, and !isLiked will be false


//CLASS 
//Ahora nuestros objetos de podcast se describen ellos mismos. 
class PodcastEpisode {
  constructor(title, artist, guest, duration) {
   this.title = title;
    this.artist = artist;
    this.isLiked = false;
    this.guest = guest;
    this.duration = duration;
  }
  like() {
    isLiked = !this.isLiked;
  }
  getEpisodeInfo() {
    return `${this.artist}. "${this.title}" - ${this.guest} (${this.duration} seconds)`;
  }
}

// Now let's get a complete version of the CLASS above, with an optimized version: 
class PodcastEpisode {
  constructor(title, artist, guest, duration) {
   this.title = title;
    this.artist = artist;
    this.isLiked = false;
    this.guest = guest;
    this.duration = duration;
  }
  like() {
    isLiked = !this.isLiked;
  }
  
  getEpisodeInfo() {  //Calling for the getFormattedDuration to put it in action 
    return `${this.artist}. "${this.title}" - ${this.guest} (${this.getFormattedDuration()} seconds)`;
  }
  
  getFormattedDuration() {
    const minutes = Math.floor(this.duration / 60); /*Math floor is like the strict teacher, you will always get a round number, no matter how high you get. This divides
    the duration between seconds to get the min*/
    const seconds = this.duration % 60; /*Then you get the division's residue to get the seconds left*/ 
    return `${minutes}:${seconds > 9 ? seconds : "0" + seconds};` //Ternary operator: condition ? expiftrue : expiffalse
  } 
}
//Now we indicate with "_" which parts of the code are private and aren't supposed to be manipulated

class Song {
  constructor(title, artist, releaseYear) {
    this._title = title;
    this._artist = artist;
    this._releaseYear = releaseYear;
    this.isLiked = false;
  }

  like() {
    this.isLiked = !this.isLiked;
  }

  getSongInfo() {
    return `${this._artist} - ${this._title} (${this._releaseYear})`
  }
}

class PodcastEpisode {
  constructor(title, artist, guest, duration) {
    this._title = title;
    this._artist = artist;
    this._guest = guest;
    this._duration = duration;
    this.isLiked = false;
  }

  like() {
    this.isLiked = !this.isLiked;
  }

  getEpisodeInfo() {
    return `${this._artist}. "${this._title}" - ${this._guest} (${this.getFormattedDuration()})`;
  }

  getFormattedDuration() {
    const minutes = Math.floor(this._duration / 60); // el número total de minutos
    const seconds = this._duration % 60; // el resto de la división por 60
    return `${minutes}:${seconds > 9 ?  seconds : 0 + seconds}`;
  }
}

//Now we turn the METHOD getFormattedDuration into private, because it´s not necessary.
//We implicitly take the duration inside getEpisodeInfo, that's why
//EXAMPLE:

getEpisodeInfo() {
    return `${this._artist}. "${this._title}" - ${this._guest} (${this._getFormattedDuration()})`;
  }

  _getFormattedDuration() {
    const minutes = Math.floor(this._duration / 60); // el número total de minutos
    const seconds = this._duration % 60; // el resto de la división por 60
    return `${minutes}:${seconds > 9 ?  seconds : 0 + seconds}`;
  }

  //If we want to optimize even more, we can use the SUPER() and EXTENDS() method from the new class AudioItem:
  class AudioItem {
  constructor(title, artist) {
    this._artist = artist;
    this._title = title;
    this.isLiked = false;
  }
  like() {
    this.isLiked = !this.isLiked;
  }
}

class Song extends AudioItem {
  constructor(releaseYear) {
    super(artist, title);
    this._releaseYear = releaseYear;
    this.isLiked = false;
  }

  like() {
    this.isLiked = !this.isLiked;
  }

  getSongInfo() {
    return `${this._artist} - ${this._title} (${this._releaseYear})`
  }
}

class PodcastEpisode extends AudioItem {
  constructor(guest, duration) {
    super(artist, title);
    this._guest = guest;
    this._duration = duration;
    this.isLiked = false;
  }

  like() {
    this.isLiked = !this.isLiked;
  }

  getEpisodeInfo() {
    return `${this._artist}. "${this._title}" - ${this._guest} (${this._getFormattedDuration()} seconds)`;
  }

  _getFormattedDuration() {
    const minutes = Math.floor(this._duration / 60); // el número total de minutos
    const seconds = this._duration % 60; // el resto de la división por 60
    return `${minutes}:${seconds > 9 ?  seconds : 0 + seconds}`;
  }
}
//Now we write a function to show which Audio Type is each one
function getAudioInfo(audioList) {
  audioList.forEach((audioItem) => {
    if (audioItem.getSongInfo) {
      console.log(audioItem.getSongInfo()); //We write console.log(audioItem.getSongInfo()) to now only show the function, but to execute it inside console.log
      //And display its return value in the console
    } else if (audioItem.getEpisodeInfo) {
      console.log(audioItem.getEpisodeInfo());
    }
  });
}
//An example of polimorphyds, which is a serie of classes with same methods reecting in different ways:
class Paciente {
  realizarTerapia() {
    console.log("Respuesta general a la terapia.");
  }
}

class PacienteConAnsiedad extends Paciente {
  realizarTerapia() {
    console.log("Me siento más tranquilo después de la sesión.");
  }
}

class PacienteConDepresion extends Paciente {
  realizarTerapia() {
    console.log("Me cuesta participar, pero empiezo a sentir alivio.");
  }
}

const pacientes = [new PacienteConAnsiedad(), new PacienteConDepresion()];

pacientes.forEach(p => p.realizarTerapia());

//POLIMORPHYSM EXAMPLE of different audios that share the same scheme, but react different to them:
class AudioItem {
  constructor(title, artist) {
    this._title = title;
    this._artist = artist;
    this.isLiked = false;
  }

  like() {
    this.isLiked = !this.isLiked;
  }
}

class Song extends AudioItem {
  constructor(title, artist, releaseYear) {
    super(title, artist);
    this._releaseYear = releaseYear;
  }

  getInfo() {
    return `${this._artist} - ${this._title} (${this._releaseYear})`
  }
}

class PodcastEpisode extends AudioItem {
  constructor(title, artist, guest, duration) {
    super(title, artist);
    this._guest = guest;
    this._duration = duration;
  }

  getInfo() {
    return `${this._artist}. "${this._title}" - ${this._guest} (${this._getFormattedDuration()} seconds)`;
  }

  _getFormattedDuration() {
    const minutes = Math.floor(this._duration / 60); // el número total de minutos
    const seconds = this._duration % 60; // el resto de la división por 60
    return `${minutes}:${seconds > 9 ?  seconds : '0' + seconds}`;
  }
}

const song1 = new Song("Start Over", "Any Given Day");
const song2 = new Song("Bitter End", "The Veer Union");
const episode1 = new PodcastEpisode("Panda Park", "Hello Internet", null, 5670);
const episode2 = new PodcastEpisode("We Are All Pioneers", "User Defenders", "Sophia Prater", 4752);

const list = [song1, episode1, song2, episode2];

function getAudioInfo(audioList) {
  audioList.forEach((audioItem) => {
          console.log(audioItem.getInfo());
  });
    }


getAudioInfo(list);
/*A partir de ahora, 
añadir una nueva clase solo requerirá
 implementar el método getInfo() dentro de esa clase,
 sin tener que modificar la función getAudioInfo(). */

 //AN EXAMPLE YOU CAN CREATE A PROPERTY ANYWHERE:
 generateCard() {
  this._element = this._getTemplate();
  // ...
  return this._element;
}

//Otro buen ejemplo para mensajes dinámicos en el que para el usuario no se muestra la imagen:
class Card {
  constructor(cardSelector) { // ahora aquí hay solo un parámetro - el selector
    this._cardSelector = cardSelector;
  }

  // todos los métodos de la clase van a continuación
}

class UserCard extends Card {
  constructor(data, cardSelector) {
    // la palabra clave super llama al constructor de la clase padre
    // con un solo argumento que es el selector de plantilla
    super(cardSelector);

    // la tarjeta de usuario solo tiene texto
    this._text = data.text;
  }

  // el método generateCard() va a continuación
}

class DefaultCard extends Card {
  constructor(data, cardSelector) {
    // llama al constructor del padre de la misma manera
    super(cardSelector);

    // la persona que está en el otro extremo tiene ahora un avatar y un texto
    this._text = data.text;
    this._image = data.image;
  }

  // generateCard() va a continuación
}
/*Código no optimizado:
Ahora tan solo tenemos que añadir una condición para iterar sobre nuestro array messageList. 
Recuerda que se pueden crear diferentes instancias de la clase en función del valor de la propiedad isOwner, así que vamos a utilizarla:
messageList.forEach((item) => {
  // Si el valor de isOwner === true,
  // se crea una instancia de UserCard,
  // en caso contrario se crea DefaultCard

  const card = item.isOwner
    ? new UserCard(item, ".card-template_type_user")
    : new DefaultCard(item, ".card-template_type_default");

  const cardElement = card.generateCard();

  document.body.append(cardElement);
});*/

//C+odigo anterior optimizado:
const renderElements = (isGrid) => {
  cardList.innerHTML = ""; // vacía el contenido del contenedor
  items.forEach((item) => {
 const card = isGrid
      ? new DefaultCard(item, ".default-card")
      : new HorizontalCard(item, ".horizontal-card");
    
    const cardElement = card.generateCard();
    cardList.append(cardElement);
  });
}
renderElements();

//Ejemplo de Horacio:
const obj = {};

// POO --> Plantilla -->

// 1. Definicion de clase
class Person {
  //   2. Definir contructor y sus propiedades
  constructor(name, age) {
    this._name = name;
    this.age = age;
  }
  // 3. Definir los metodos
  greet() {
    console.log(
      `Hello, my name is ${this._name} and I am ${this.age} years old.`
    );
  }

  _eat() {}

  walk() {}

  sayHi() {
    this.greet();
  }
}

// 4. Instanciar la clase
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25); 


// 5. Llamar metodos de la clase
person1.greet();
person1.sayHi();


//Segundo ejemplo con manipulación de DOM:
class Button {
  constructor(label, color) {
    this.label = label;
    this.color = color;
  }

  renderButton() {
    const button = document.createElement("button");
    button.textContent = this.label;
    button.style.backgroundColor = this.color;
    button.style.color = "#fff";
    button.style.border = "none";
    button.style.padding = "10px 20px";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";

    button.addEventListener("click", () => {
      alert(`Button ${this.label} clicked!`);
    });

    return button;
  }

  addButtonToDOM() {
    const button = this.renderButton();
    const container = document.querySelector(".container");
    container.appendChild(button);
  }
}

const button1 = new Button("Click Me", "blue");
const button2 = new Button("Submit", "green");
const button3 = new Button("Cancel", "red");

button1.addButtonToDOM();
button2.addButtonToDOM();
button3.addButtonToDOM();

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getAge = function() {
  const currentYear = new Date().getFullYear();
  const years = currentYear - this.year;
  return `${this.title} is ${years} years old`;
};

const book1 = new Book("1984", "George Orwell", 1949);
console.log(book1.getAge()); // "1984 is 76 years old" (en 2025)

//Polymorphydm example in class object:

// demos un método simple a nuestra sencilla clase Animal
class Animal {
  constructor(name, favFood, species) {
    this.name = name;
    this.species = species;
  }
  getInfo() {
    const info = {
      name: this.name,
      species: this.species
    }
    return info;
  }
}

class Parakeet extends Animal {
  constructor(name) {
    super(name);                
    this.species = 'parakeet';
  }
}

const parakeet = new Parakeet('Arlo');
// la clase hija tiene acceso a todos los métodos de la clase padre
console.log(parakeet.getInfo());  // { name: 'Arlo, species: 'parakeet' }

// crea una nueva clase hija
class Human extends Animal {
  // puedes tener argumentos adicionales para el constructor de la clase hija
  constructor(name, job) {     
     super(name);
     this.name = name;
     this.job = job;
     this.species = 'human';
  }
  // podemos hacer que getInfo sea más informativo
  getInfo() {  
    // también puedes llamar a otros métodos de la clase padre con super
    const info = super.getInfo();  // devuelve {name: this.name, species: 'human'}
    info.job = this.job;
    info.canFly = false;
    return info;
  }
}

const human = new Human('Kevin', 'summarizer');
human.getInfo();  // {name: 'Kevin', species: 'human', job: 'summarizer', canFly: false}


//DESESTRUCTURACIÓN DE OBJETOS:
//Ejem:
const formulario = {
  elements: {
    artist: "Lana Del Rey",
    song: "Young and Beautiful"
  }
};
//Desestructuración directa de artist y song:

const { artist, song } = formulario.elements;

//Working with objects and accessing to them:

const recipes = [];

const recipe1 = {
  name: 'Spaghetti Carbonara',
  ingredients: ['spaghetti', 'Parmesan cheese', 'pancetta', 'black pepper'],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 5, 4, 5],
  averageRating: null,
};

const recipe2 = {
  name: 'Chicken Curry',
  ingredients: ['chicken breast', 'coconut milk', 'curry powder', 'onion', 'garlic'],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 5, 5, 5],
  averageRating: null,
};

const recipe3 = {
  name: 'Vegetable Stir Fry',
  ingredients: ['broccoli', 'carrot', 'bell pepper'],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: '',
  ratings: [4, 3, 4, 5],
  averageRating: null,
};

recipes.push(recipe1, recipe2, recipe3);

function getAverageRating(ratings) {
  const total = ratings[0] + ratings[1] + ratings[2] + ratings[3];
  return total / ratings.length;
}

function getTotalIngredients(ingredients) {
  return ingredients.length;
}

function getDifficultyLevel(cookingTime) {
  if (cookingTime <= 30) {
    return 'easy';
  } else if (cookingTime <= 60) {
    return 'medium';
  } else {
    return 'hard';
  }
}

const recipe1AverageRating = getAverageRating(recipe1.ratings);
console.log(recipe1AverageRating);

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
console.log(recipe1TotalIngredients);

const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
console.log(recipe1DifficultyLevel);

recipe1.averageRating = getAverageRating(recipe1.ratings);
recipe1.totalIngredients = getTotalIngredients(recipe1.ingredients)
recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime)

recipe2.averageRating = getAverageRating(recipe2.ratings);
recipe2.totalIngredients = getTotalIngredients(recipe2.ingredients);
recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

recipe3.averageRating = getAverageRating(recipe3.ratings);
recipe3.totalIngredients = getTotalIngredients(recipe3.ingredients)
recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime)