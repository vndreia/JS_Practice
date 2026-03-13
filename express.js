//AN EXAMPLE OF EXPRESS.JS WITHOUT USING PARSING BODY MIDDLEWARES, JUST USING THE CORE HTTP MODULE

const { mainPageMarkup, submitSuccessMarkup } = require("./views");

const todos = [];

const postForm = (req, res) => {
  let body = "";
  //taking out item of the request body

  req.on("end", () => {
    todos.push(body.split("=")[1]);
    console.log(todos);
    //this does:
    // each result would be just the value (the right side of =):
    //"todo=Buy milk".split('=')[1]   // "Buy milk"
    //"email=john@gmail.com".split('=')[1]  // "john@gmail.com"
    //"name=John".split('=')[1]       // "John"
    res.send(submitSuccessMarkup);
  });
};

const getMainPage = (req, res) => {
  res.send(mainPageMarkup);
};

module.exports = {
  postForm,
  getMainPage,
};

//WITH MIDDLEWARE AND THE PARSING BODY YOU DON'T NEED REQ.ON BECAUSE EXPRESS HANDLES THE DATA CHUNKS AND THE END OF THE REQUEST FOR YOU, SO YOU CAN JUST ACCESS THE DATA DIRECTLY FROM REQ.BODY
//The middlware is in app.js and is called "express.urlencoded({ extended: true })", which is a built-in middleware that parses incoming requests with urlencoded payloads and is based on body-parser. It makes the data available in req.body as an object, so you can access the values directly by their keys, like req.body.todo or req.body.email.

//In app.js:
const express = require("express");
const path = require("path");
const routes = require("./routes");

const { PORT = 3000, BASE_PATH } = process.env;

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
//means each request will go through this middleware first
app.use("/", routes);

app.listen(PORT, () => {
  console.log("Enlace al servidor:");
  console.log(BASE_PATH);
});

//In helpers.js:
const { mainPageMarkup, submitSuccessMarkup } = require("./views");

const todos = [];

const postForm = (req, res) => {
  const { item } = req.body;

  todos.push(item);
  console.log(todos);

  res.send(submitSuccessMarkup);
};

const getMainPage = (req, res) => {
  res.send(mainPageMarkup);
};

module.exports = {
  postForm,
  getMainPage,
};
