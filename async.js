// crear un promise
const newPromise = new Promise(function (resolve, reject) {
  // determina aleatoriamente si la solicitud ha sido procesada o no
  const rand = Math.random() > 0.5 ? true : false;

  if (rand) {
    resolve("Solicitud procesada satisfactoriamente");
  } else {
    reject("Solicitud rechazada");
  }
});

newPromise
  .then(function (value) {
    // se ejecuta si promise se ha resuelto

    /* el parámetro value almacena el valor pasado al
    método resolve() al crear el promise, es decir
    el string "Solicitud procesada satisfactoriamente"  */

    console.log(value);
  })
  .catch(function (value) {
    // se ejecuta si promise ha sido rechazado

    /* en este caso, el parámetro value almacena el valor
    pasado al método reject(), es decir
    el string "Solicitud rechazada" */

    console.log(value + ". Sentimos las molestias.");
  })
  .finally(function () {
    // se ejecuta en ambos casos
    console.log("Prometemos que recibimos tu solicitud");
  });

const newPromise = new Promise(function (resolve, reject) {
  resolve("Un Mississippi"); // obtiene inmediatamente el promise resuelto
});

function firstAction(value) {
  /* el parámetro value recibirá lo que le pasamos
  al método resolve() al crear el promise,
 es decir, el string "Un Mississippi" */

  return `${value}, dos Mississippis`;
}

function secondAction(value) {
  /* el valor será igual al valor retornado
  por el método then() anterior, es decir, el string "Un Mississippi, dos Mississippis" */

  return `${value}, tres Mississippis`;
}

function thirdAction(value) {
  console.log(value);
}

newPromise.then(firstAction).then(secondAction).then(thirdAction);
/* veremos lo siguiente en la consola: "Un Mississippi, dos Mississippis, tres Mississippis"  */

// crea el primer promise
const firstPromise = new Promise((resolve, reject) => {
  if (someCondition) {
    resolve("Primer promise");
  } else {
    reject();
  }
});

// crea el segundo promise
const secondPromise = new Promise((resolve, reject) => {
  if (secondCondition) {
    resolve("Segundo promise");
  } else {
    reject();
  }
});

// crea un array de promises
const promises = [firstPromise, secondPromise];

// pasa el array de promises al método Promise.all()
Promise.all(promises).then((results) => {
  console.log(results); // ["Primer promise", "Segundo promise"]
});

//Example:
function wait(ms) {
  //Remember promise is an object, which is why we use 'new', to instantiate it
  const newPromise = new Promise((resolve, reject) => {
    setTimeout(resolve, ms); // ✅ setTimeout (capital T)
  });
  return newPromise;
}
wait(2000).then(() => console.log("2000ms pasados"));

//Another example:
function handleLoadError() {
  console.log("Image not loaded. ERROR! ERROR!");
}

function handleImageLoad(evt) {
  document.body.append(evt.target);
}

// Corrected loadImage function
function loadImage(imageUrl) {
  return new Promise((resolve, reject) => {
    const image = document.createElement("img");
    image.src = imageUrl;

    // When image loads successfully
    image.onload = (evt) => {
      //We pass an evt because when calling the function .then expects an evt
      resolve(evt); // Pass the event to resolve
    };

    // When image fails to load
    image.onerror = () => {
      reject(new Error("Image failed to load"));
    };
  });
}

//-----Another way to write the same function:
function loadImage(imageUrl) {
  //<------ It looks a lot like a class
  return new Promise((resolve, reject) => {
    const image = document.createElement("img");
    image.src = imageUrl;
    image.onerror = reject;
    image.onload = resolve;
  });
}

// Usage - this will now work correctly:
loadImage(
  "https://practicum-content.s3.us-west-1.amazonaws.com/frontend-developer/functions/moved_dog-1.jpg"
)
  .then((evt) => {
    // evt is the load event
    document.body.append(evt.target);
  })
  .catch(() => {
    console.log("Image not loaded. ERROR! ERROR!");
  });

//???????????????????????
doSomething().then(function () {
  return doSomethingElse();
});

doSomething().then(function () {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);

//Example 4 is equivalent to:
javascriptdoSomething().then(function (value) {
  return doSomethingElse(value); // Passes the resolved value from doSomething()
});
//Most common mistake: Example 3. People accidentally add () which calls the function immediately instead of passing it as a callback.

//Example of a marriage proposal using Promise:
const propuestaMatrimonio = new Promise((resolve, reject) => {
  const respuesta = "sí"; // o "no"

  if (respuesta === "sí") {
    resolve("¡Dijo que sí!");
  } else {
    reject("Dijo que no 💔");
  }
});

//Then you chain multiple thens:
propuestaMatrimonio
  .then((mensaje) => {
    console.log(mensaje); // "¡Dijo que sí!"
    return "Planear la luna de miel 💕"; // ← se crea otra promesa con este valor
  })
  .then((siguientePaso) => {
    console.log(siguientePaso); // "Planear la luna de miel 💕"
  })
  .catch((error) => {
    console.log("Error:", error); // "Dijo que no 💔"
  })
  .finally(() => {
    console.log("Pensando en el futuro... 🤔");
  });

fetch("https://tripleten.com")
  .then((res) => res.json()) // Return the promise from json() but it´s not the actual parsed object yet. Step 1: "I'm holding the response, starting to parse it"
  .then((data) => {
    console.log(data.user.name); // Now data is the actual parsed object! Step 2: "Now I actually have the parsed data!"
  })
  .catch((err) => {
    console.log("Error. Solicitud fallida");
  });

//A way to do a deep copy of an object:
//JSON parse Takes that string and creates completely new objects from scratch
//JSON stringify takes an object and turns it into a string
const userDeepCopy = JSON.parse(JSON.stringify(user));
//Although this method has limitations, for example, it won't copy functions or special object types like Date or RegExp correctly.
//But for simple objects, it works well.

//Some other example:
fetch("https://api.kanye.rest")
  .then((res) => res.json()) //res.json() turns the response into a json object and returns a promise
  .then(
    (
      data //this executes after the promise is resolved, giving us the actual data from the API
    ) => console.log(data)
  );

const quoteElement = document.querySelector(".quote");

//Next thing we do is fetch the quote from the API and display it in the quoteElement
//If I only write data, it will show [object Object] because the API returns an object with a property 'quote'
fetch("https://api.kanye.rest")
  .then((res) => res.json())
  .then((data) => {
    // The API returns an object like: { "quote": "Some quote text" }
    // You need to access the 'quote' property specifically
    quoteElement.textContent = data.quote; // ← Fixed: access data.quote instead of data
  })
  .catch((error) => {
    console.error("Error fetching quote:", error);
    quoteElement.textContent = "Failed to load quote";
  });
