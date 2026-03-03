const http = require("http"); //hace la importación del módulo http, que es parte de Node.js y se utiliza para crear servidores web.

// pasa un detector
const server = http.createServer((request, response) => {
  console.log("¡Aquí está la respuesta!");
  console.log(request);
  console.log(response);

  response.write("Hola desde el servidor!"); // ← Envía al navegador
  response.end(); // ← Cierra la conexión
});

server.listen(3006); //Esto establece el servidor para que escuche en el puerto 3006. Esto significa que el servidor estará disponible en la dirección http://localhost:3006.
console.log("Servidor escuchando en puerto 3006"); // ← Verás esto al ejecutar

//ANOTHER EXAMPLE:
const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end(markup);
});

//An example with a form which input name is "name=item", so the body
// // comes from the form response and it has name= "item" which becomes into item= "whatever user typed"
// //but I want only the part of "whatever the user typed"

const http = require("http");

const { PORT = 3000, BASE_PATH } = process.env;

const mainPageMarkup = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Lista de tareas pendientes</title>
    <style>
      html, body {
        font-family: Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        height: 100%;
        width: 100%;
        display: flex;
        margin: 0;
      }

      input, button {
        border: none;
      }

      .container {
        width: 468px;
        margin: 0 auto;
        padding-top: 100px;
      }

      h1 {
        font-weight: bold;
      }

      .input {
        display: flex;
        justify-content: space-between;
      }

      .input__text {
        font-size: 0.8em;
        width: 310px;
        height: 50px;
        border-bottom: 1px solid #f1f1f1;
        padding: 0 10px;
        box-sizing: border-box;
      }

      .input__text::placeholder {
        color: #d3d3d3;
      }

      .input__btn {
        font-size: 0.8em;
        width: 150px;
        height: 50px;
        background-color: #ffdb4d;
        border-radius: 2px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <form class="container" action="${BASE_PATH}/submit" method="POST" enctype="text/plain">
      <h1>Lista de tareas pendientes</h1>
      <div class="input">
        <input type="text" placeholder="Nueva tarea" class="input__text" name="item">
        <button class="input__btn input__btn_add">
          Agregar
        </button>
      </div>
    </form>
  </body>
  </html>
`;

const submitSuccessMarkup = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Lista de tareas pendientes</title>
    <style>
      html, body {
        font-family: Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        height: 100%;
        width: 100%;
        display: flex;
        margin: 0;
      }

      .container {
        width: 468px;
        margin: 0 auto;
        padding-top: 100px;
      }

      h1 {
        font-weight: bold;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Formulario enviado con éxito</h1>
      <a href="${BASE_PATH}">Volver</a>
    </div>
  </body>
  </html>
`;

const todos = [];

const server = http.createServer((req, res) => {
  if (req.url === "/submit" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      todos.push(body.split("=")[1]);

      res.writeHead(200, {
        "Content-Type": "text/html",
      });

      res.end(submitSuccessMarkup);
    });
  }

  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    res.end(mainPageMarkup);
  }
});

server.listen(PORT);

//ANOTHER COOL EXAMPLE WITH MORE LAYERED COMPLEXITY:
//This is supposed to be the App.js file, which is the entry point of the application. It creates the server and manages the routes, but it also reads a data file and generates the main view using a function from another module called "views.js". The main view is generated with an empty array for now, but it could be modified to pass the actual data from the file.
const http = require("http");
const fs = require("fs"); //for managing files
const path = require("path"); //for managing routes without concatenation
const { generateMainView } = require("./views");

const { PORT = 3000 } = process.env;

const server = http.createServer((req, res) => {
  const dataPath = path.join(__dirname, "data.json"); //getting the path of the data file, which is in the same directory as this file (App.js) and is called "data.json"

  fs.readFile(dataPath, { encoding: "utf8" }, (err, data) => {
    if (err) {
      console.log(err);
      return; //this return prevents the code from executing if there is an error reading the file, which could happen if the file does not exist or if there is a permission issue. By returning here, we avoid trying to generate the main view with undefined data, which would cause another error.
    } //pretty much like catch() in a promise, but here we are using a callback function for the readFile method, which is asynchronous. If there is an error, we log it and return to stop the execution of the rest of the code in the callback. If there is no error, we can proceed to generate the main view with the data we read from the file (after parsing it if necessary).
    //if i didnt return here, the next block code would run, sending an OK code response, even if it's not OK

    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    const markup = generateMainView([]);

    res.end(markup);
  });
});

server.listen(PORT);

//Now we add the array containing the songs, but the songs will be read as a string from the file, so we need to parse it with JSON.parse() to convert it into a JavaScript object (or array in this case) that we can use to generate the main view. The generateMainView function will then receive the songs array and can use it to create the HTML markup for the main view, which will be sent as the response to the client.

const path = require("path");
const http = require("http");

const { generateMainView } = require("./views");

const { PORT = 3000 } = process.env;

const server = http.createServer((req, res) => {
  const dataPath = path.join(__dirname, "data.json");

  fs.readFile(dataPath, { encoding: "utf8" }, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const songs = JSON.parse(data);

    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    const markup = generateMainView([songs]);

    res.end(markup);
  });
});

server.listen(PORT);

//Example using pipe with readCreateStream and writeHead to send a file as response to the client. This is a more efficient way to serve files, especially large ones, because it streams the file directly to the response without having to load the entire file into memory first.

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "war-and-peace.txt");

  const stream = fs.createReadStream(filePath, { encoding: "utf8" });

  stream.on("error", () => {
    res.statusCode = 500;
    res.end("Server Error");
  });

  res.setHeader("Content-Type", "text/plain");
  stream.pipe(res);
});

//same one but with error handling
const server = http.createServer(function (req, res) {
  const filePath = path.join(__dirname, "war-and-peace.txt");
  const fileReader = fs.createReadStream(filePath, { encoding: "utf8" });
  fileReader.pipe(res);
  res.writeHead(200, { "Content-Type": "text/plain" });
});
