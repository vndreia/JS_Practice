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