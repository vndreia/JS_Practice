//PROMISES

const newPromise = new Promise(function (resolve, reject) {
  // determina aleatoriamente si la solicitud ha sido procesada o no
  const rand = Math.random() > 0.5 ? true : false;

  if (rand) {
    resolve("Solicitud procesada satisfactoriamente");
  } else {
    reject("Solicitud rechazada");
  }
});

//And how this works:
fetch('/api/data')  // Promise 1: "go get the data"
  .then(response => {
    // At this point, we have HEADERS but the BODY might still be streaming in
    return response.json();  // Promise 2: "parse the body as JSON" and this is an async operation bc parsing the response body can take time
  })
  .then(data => {
    // Now we finally have the parsed JSON data
  })


newPromise
  .then(function (value) {
    // se ejecuta si promise se ha resuelto

    /* el parámetro value almacena el valor pasado al
    método resolve() al crear el promise, es decir
    el string "Solicitud procesada satisfactoriamente"  */

    console.log(value);
  })
  .catch(function (value) {  //NOTE: You should tipically place CATCH() at the end of the chain to execute if any error happens in any of the previous thens
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

  //????????????????????????????????????????
/*
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
*/

//Example of a marriage proposal using Promise:
const propuestaMatrimonio = new Promise((resolve, reject) => {
  const respuesta = "sí"; // o "no"

  if (respuesta === "sí") {
    resolve("¡Dijo que sí!");
  } else {
    reject("Dijo que no 💔");
  }
});

//Then you chain multiple thens AS consequences of the first
//If the promise is resolved, the first then runs, and its return value is passed to the next then, and so on.
//If any promise in the chain is rejected, the catch block runs.
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


//FETCH
//Fetch is used to make network requests. It returns a promise that resolves to the Response object representing the response to the request.
//The Response object has various methods to handle the response data, such as .json(), .text(), .blob(), etc.
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


//Next thing we do is fetch the quote from the API and display it in the quoteElement
//If I only write data, it will show [object Object] because the API returns an object with a property 'quote'
const quoteElement = document.querySelector(".quote");
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

// BASIC SYNTAX: Just URL (defaults to GET request)
fetch("https://api.kanye.rest")
  .then((res) => res.json())
  .then((data) => console.log(data));

// ====================================================

// FULL SYNTAX: URL + Options object
fetch("https://api.example.com/users", {
  method: "POST", // HTTP method
  headers: {
    // Request headers
    "Content-Type": "application/json",
    Authorization: "Bearer token123",
  },
  body: JSON.stringify({
    // Request body (for POST/PUT/PATCH)
    name: "John",
    email: "john@example.com",
  }),
})
  .then((res) => res.json())
  .then((data) => console.log(data));

// ====================================================

// DIFFERENT HTTP METHODS EXAMPLES:

// GET request (default - no options needed)
fetch("https://api.example.com/users");

// GET with headers
fetch("https://api.example.com/users", {
  headers: {
    Authorization: "Bearer token123",
  },
});

// POST request
fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "John" }),
});

// PUT request
fetch("https://api.example.com/users/123", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name: "John Updated" }),
});

// DELETE request
fetch("https://api.example.com/users/123", {
  method: "DELETE",
});

// ====================================================
// CREATING THE OPTIONS OBJEC
// You can create it yourself:
const myOptions = {
  method: "POST",  //method type
  headers: {  //the required data about the data you're sending
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ name: "John" }) //the actual data you're sending, converted to a JSON string
};

fetch("https://api.example.com", myOptions);

// Or inline:
fetch("https://api.example.com", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ name: "John" })
});


  // HTTP METHOD
  method: "GET",        // "GET", "POST", "PUT", "DELETE", "PATCH"
  
  // HEADERS (another object)
  headers: {
    "Content-Type": "application/json",      // What type of data you're sending
    "Authorization": "Bearer your-token",    // Authentication
    "Accept": "application/json",            // What you expect back
    "User-Agent": "MyApp/1.0",              // Who's making the request
    "X-Custom-Header": "custom-value"       // Custom headers
  }

 //!!!!!!!!!  ALWAYS convert the body to a JSON string when using POST/PUT/PATCH  !!!!!!!!!!
  // WRONG - This won't work
fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: { name: 'John', email: 'john@example.com' }  // ← JavaScript object
})

// CORRECT - Convert to JSON string
fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'John', email: 'john@example.com' })  // ← JSON string
})

//WHEN to use return VS when not to use it in a .then() chain:

// Just making a request, not using the result elsewhere
function saveUser() {
  fetch('/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'John' })
  })  
  .then(response => response.json())  //Only showing the result in the console
  .then(data => console.log('Saved!', data))
  .catch(error => console.log(error));
}

//When you DO need return:
js// When you want to use the fetch result in other code
function getUser() {
  return fetch('/api/users/1')  // ← return the promise
    .then(response => response.json());
}

// Now you can use it elsewhere
getUser()
  .then(userData => {
    console.log('Got user:', userData);
  });

//AnALYZING a response object:
fetch("https://api.kanye.rest")
  .then(res => {
    console.log(res.status); // comprueba el estado de la respuesta
    console.log(res.headers.get("Content-Type")); // comprueba Content-Type
    return res.json();
  })
  .then((data) => {
    console.log(data); // ¿Qué ocurre en el cuerpo?
  });

  //THE WHOLE EXAMPLE:
  // crea el marcado del post
function createPostMarkup(post) {
  return `
    <div class="post">
      <p class="post__title">${post.title}</p>
      <p class="post__text">${post.body}</p>
    </div>
  `;
}

// inserta el marcado en el DOM
function addPostToDOM(container, markup) {
  container.insertAdjacentHTML("afterbegin", markup);
}
  

function createPost(newPost) {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST", // indica el método de solicitud
    // cuerpo de la solicitud
    body: JSON.stringify({
      title: newPost.title,
      body: newPost.body
    }),
    // y encabezados
    headers: {
      "Content-Type": "application/json; charset=UTF-8"
    }
  })
   .then(res => res.json())
     .then((post) => {
       console.log(post);
   });
  }

// controlador de eventos de envío de formularios
document.forms.post.addEventListener("submit", function (event) {
  event.preventDefault();

  const { title, text } = event.currentTarget.elements;

  createPost({
    title: title.value,
    body: text.value
  });
});

//And another example with literal templates and the Star Wars API to get a character by ID:
//This gets the name and their corresponding ID from the form and displays it in the result section
const form = document.forms.search;
const content = document.querySelector(".content");
const result = document.querySelector(".content__result");
const error = document.querySelector(".content__error");
const spinner = document.querySelector(".spinner");

form.addEventListener("submit", function submit(e) {
  e.preventDefault();
});

function search(entity, entityId) {
  return fetch(`https://swapi.nomoreparties.co/${entity}/${entityId}`)
    .then(res => res.json());
}

//JavaScript piensa: "El usuario quiere que busque literalmente la palabra 'entity' y la palabra 'entityId'"
//So we use template literals with backticks `` and ${} to insert the actual values of the variables

//GET Is the default method, so we don't need to specify it
form.addEventListener("submit", function submit(e) {
  e.preventDefault();
  search(form.elements.entity.value, form.elements.entityId.value)
  .then((res) => {
    if (res.ok) {
      console.log("Everything is okay");
    }
  });
});

function search(entity, entityId) {
  return fetch(`https://swapi.nomoreparties.co/${entity}/${entityId}/`)
}

//Same example but now we handle errors and display the data in the result section
const form = document.forms.search;
const content = document.querySelector(".content");
const result = document.querySelector(".content__result");
const error = document.querySelector(".content__error");
const spinner = document.querySelector(".spinner");

form.addEventListener("submit", function submit(e) {
  e.preventDefault();
  search(form.elements.entity.value, form.elements.entityId.value)
  .then((res) => {
    if (res.ok) {
      console.log("Everything is okay");
    }
  });
});

function search(entity, entityId) {
  return fetch(`https://swapi.nomoreparties.co/${entity}/${entityId}/`)
}

function renderResult(text){
  result.textContent = text;
  error.textContent = ""; 
}

function renderError(err){
  error.textContent = err;
  result.textContent = "";
}

//THE INTERESTING FLOW:
.then((res) => {
  if (res.ok) {
    return res.json();           // ← If good, return the data -->If response is OK (200-299): Return res.json() - this goes to the next .then()
  }
  return Promise.reject(res.status); // ← If bad, reject with status code -->If response is not OK: Reject the promise with the status code - this goes to .catch()
})

//THE FLOW EXPLAINED:
fetch() 
  .then((res) => {
    if (res.ok) {
      return res.json();     // → Goes to next .then()
    }
    return Promise.reject(404); // → Skips .then(), goes to .catch()
  })
  .then((data) => {
    // This only runs if res.ok was true
    console.log(data);
  })
  .catch((err) => {
    // This runs if Promise.reject() was called
    console.log(`Error: ${err}`); // "Error: 404"
  });

  //THIS WORKS  because in my search function I work with fetch and fetch returns a promise:
function search(entity, entityId) {
  return fetch(`https://swapi.nomoreparties.co/${entity}/${entityId}/`);
  //     ↑ fetch() returns a Promise
}

// So when you call search(), you get a Promise back:
search('people', '1')  // ← This returns a Promise
  .then((res) => {     // ← That's why you can use .then()
    // handle response
  })

  //I CHAINED CATCH AND THEN TO THAT PROMISE IN THE SEARCH FUNCTION!!!!!!!

  //Updating the code example:
  const form = document.forms.search;
const content = document.querySelector(".content");
const result = document.querySelector(".content__result");
const error = document.querySelector(".content__error");
const spinner = document.querySelector(".spinner");


//!!!!!!!!!!!!!!!!!!!!!!!!! AUNQUE NO ENTIENDO MUY BIEN ESTA SINTAXIS
form.addEventListener("submit", function submit(e) {
  e.preventDefault();
  search(form.elements.entity.value, form.elements.entityId.value)
  .then((res) => {
    if (res.ok) {
      return res.json();
    } //else
    return Promise.reject(res.status) //Catch the error status
  })
  .then((res) => {
    console.log(res)})
  .catch((err) => {
    console.log(`Error: ${err}`)
  })
});

function search(entity, entityId) {
  return fetch(`https://swapi.nomoreparties.co/${entity}/${entityId}/`)
}

function renderResult(text){
  result.textContent = text;
  error.textContent = ""; 
}

function renderError(err){
  error.textContent = err;
  result.textContent = "";
}

//Now adding a spinner: 
function renderLoading(isLoading){
  if (isLoading){
    spinner.classList.add('spinner_visible');
    content.classList.add('content_hidden');
  }
  else { 
    spinner.classList.remove('spinner_visible');
    content.classList.remove('content_hidden');
  }
  }

  //Now we call the renderLoading function in the submit event listener and in finally:
  const form = document.forms.search;
const content = document.querySelector(".content");
const result = document.querySelector(".content__result");
const error = document.querySelector(".content__error");
const spinner = document.querySelector(".spinner");

form.addEventListener("submit", function submit(e) {
  e.preventDefault();
  renderLoading(true); // calling the function to show the spinner when the form is submitted
  search(form.elements.entity.value, form.elements.entityId.value)
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status)
  })
  .then((res) => {
    renderResult(res.name);
    console.log(res)})
  .catch((err) => {
    renderError(`Error: ${err}`);
    console.log(`Error: ${err}`)
  })
  .finally(() => {
  renderLoading(false); // ← Add false here! Either way, whether the promise is resolved or rejected, we hide the spinner after it's done
})
});


function search(entity, entityId) {
  return fetch(`https://swapi.nomoreparties.co/${entity}/${entityId}/`)
}

function renderResult(text){
  result.textContent = text;
  error.textContent = ""; 
}

function renderError(err){
  error.textContent = err;
  result.textContent = "";
}

function renderLoading(isLoading){
  if (isLoading){
    spinner.classList.add('spinner_visible');
    content.classList.add('content_hidden');
  }
  else { 
    spinner.classList.remove('spinner_visible');
    content.classList.remove('content_hidden');
  }
  }
  //NOW the user gets visual feedback with the spinner while waiting for the fetch to complete
  //And the content is hidden while loading to avoid showing stale data

  //-------------------ANOTHER EXAMPLE----------------------------
  //We use id to get a specific user as a parameter, because if we wrote id without template literals,it would look for an actual
  //user with the name "id" which doesn't exist
  const getUserById = (id) => {  
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.ok ? res.json() : Promise.reject(`Uh oh! Error: ${res.status}`)) //the res object actually HAS a property called 'ok' which is true if the status code is 200-299
}
//is basically saying when the promise inside fetch is solved, and if this response is ok, then parse it now to json,
// otherwise, call the reject method of promise showing an error message

//A GOOD RULE TO REMEMBER: 
//If code depends on the server response, it MUST go inside .then() 
api.addNewCard(formattedValues)  // 🎲 Step 1: Send to server
  .then((newCardData) => {       // ⏳ Step 2: Wait for response
    // ↓ These dominoes can only fall AFTER server responds ↓
    const newCard = new Card(newCardData, cardTemplate);  // 🎲 Step 3
    const cardImage = newCard._renderCard();              // 🎲 Step 4
    Section.addItem(cardImage);                           // 🎲 Step 5
    addPlacePopup.close();                                // 🎲 Step 6
  });

// ❌ Anything here runs IMMEDIATELY, doesn't wait!