const container = document.querySelector(".container");
const songsContainer = container.querySelector(".songs-container");
const addButton = container.querySelector(".input__btn_action_add");
const resetButton = container.querySelector(".input__btn_action_reset");
const noSongsElement = container.querySelector(".no-songs");

function renderHasSongs() {
  resetButton.removeAttribute("disabled");
  resetButton.classList.remove("input__btn_disabled");
  noSongsElement.classList.add("no-songs_hidden");
}

function renderNoSongs() {
  resetButton.setAttribute("disabled", true);
  resetButton.classList.add("input__btn_disabled");
  noSongsElement.classList.remove("no-songs_hidden");
}

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector("#song-template").content; //Selecciona el contenido dentro de template
  const songElement = songTemplate.querySelector(".song").cloneNode(true); //Se hace un deep clone con true de todo lo que está dentro de template
  songElement.querySelector(".song__artist").textContent = artistValue; //Busca dentro del clon de tu template un elemento con la clase .song__artist
  songElement.querySelector(".song__title").textContent = titleValue;
  // Encuentra el botón de "me gusta"
  const likeButton = songElement
    .querySelector(".song__like")
    .addEventListener("click", function (evt) {});
  // 🟢 Crea el controlador de clics que muestra el evento en consola
  likeButton.addEventListener("click", function (evt) {
    evt.target.classList.toggle("song__like_active"); //Le agrega los styles de active al botón
  });
  // Añade la canción al contenedor
  songsContainer.append(songElement);
}

const artistElement = document.createElement("h4");
artistElement.classList.add("song__artist");
artistElement.textContent(artistValue);

const titleElement = document.createElement("p");
titleElement.classList.add("song__title");
titleElement.textContent(titleValue);

const likeButtonElement = document.createElement("button");
likeButtonElement.classList.add("song__like");

trackContainer.append(artistElement, titleElement, likeButtonElement);
//append agrega esos elementos al DOM.
//insertAdjacentHTML not needed anymore. Previous code makes it safer
/*
   songsContainer.insertAdjacentHTML("beforeend", `
    <div class="song">
      <h4 class="song__artist">${artistValue}</h4>
      <p class="song__title">${titleValue}</p>
      <button class="song__like"></button>
    </div>
  `);
*/

addButton.addEventListener("click", function () {
  const artist = document.querySelector(".input__text_type_artist");
  const title = document.querySelector(".input__text_type_title");

  addSong(artist.value, title.value);
  renderHasSongs();

  artist.value = "";
  title.value = "";
});

//Aquí hay un método addEventListener con una función como parámetro.

resetButton.addEventListener("click", function () {
  // ← ESTA es la función que se ejecutará cuando hagan click
  const songs = document.querySelectorAll(".song");
  songs.forEach((item) => {
    item.remove(); // ← ESTA es una función flecha dentro de otra
  });
});
/*La idea es decirle al navegador qué debe hacer cuando ocurra un evento, sin ejecutarlo de inmediato.
Le estás pasando una función para que la guarde y la ejecute después, cuando se dispare el evento*/

//<Template>

/*Así se selecciona una plantilla: 
function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector("#song-template").content;
}*/

//A SUPER TIP TO MAKE SOME ELEMENT DISAPPEAR AFTER 'SOME TIME':
setTimeout(() => {
  console.log("Hola después de 2 segundos");
}, 2000);

//Esto guarda el selector, no el string en sí:
export const filterListSelector = ".filter";
//Not selecting the element from the DOM, just saving the selector in a variable

//A BIG EXAMPLE OF A FUNCTION THAT SELECTS DIFFERENT OPTIONS FROM THE DOM:
const storyContainer = document.querySelector(".story-container");

const scaryStoryBtn = document.getElementById("scary-btn");
const funnyStoryBtn = document.getElementById("funny-btn");
const adventureStoryBtn = document.getElementById("adventure-btn");

const resultParagraph = document.getElementById("result");

const storyObj = {
  scary: {
    story: `In the dark woods, a group of friends stumbled upon an old, abandoned cabin. They enter the cabin and awaken something malevolent that had been dormant for centuries.`,
    borderColor: "#ee4b2b",
  },
  funny: {
    story: `During a camping trip, Mark decided to show off his culinary skills by cooking dinner over an open fire. However, his attempt caused him to burn the dinner as well as his eyebrows off.`,
    borderColor: "#f1be32",
  },
  adventure: {
    story: `Lost in the heart of the Amazon rain forest, Sarah and Jake stumbled upon an ancient temple. They braved deadly traps and encountered strange wildlife, all while deciphering cryptic clues left behind by a mysterious civilization.`,
    borderColor: "#acd157",
  },
};

function displayStory(genre) {
  if (storyObj[genre]) {
    //Check if the genre exists in the storyObj
    //The brackets assign a dynamic key called genre to the object, as it it was a parameter
    resultParagraph.textContent = storyObj[genre].story; //Set the text content of the result paragraph to the story of the selected genre
    storyContainer.style.borderColor = storyObj[genre].borderColor; //Set the border color of the story container to the color associated with the selected genre
  }
}

displayStory("scary"); //Calling the function to display the scary story by default

/*The error code:
caryStoryBtn.addEventListener("click", displayStory("scary")); 
funnyStoryBtn.addEventListener("click", displayStory("funny"));
 adventureStoryBtn.addEventListener("click", displayStory("adventure"));*/
//What happens here is that the function displayStory is called immediately, and it return undefined cuz it has not been processed yet.

//The right way to do it is to execute the function after the click event:
scaryStoryBtn.addEventListener("click", () => displayStory("scary"));
funnyStoryBtn.addEventListener("click", () => displayStory("funny"));
adventureStoryBtn.addEventListener("click", () => displayStory("adventure"));

//Obtaining a value of a selected element:
selectContainer.addEventListener("change", (evt) => {
  console.log(evt.target.value);
});

//The wrong code to filter the instrument dropdown list:
function instrumentCards(instrumentCategory) {
  instrumentCategory.filter(
    (instrumentCategory) => instrumentCategory === instrumentsArr.category
  );
  return instrumentCategory; //When the return is before, the if never gets executed, Return marks the end of the function
  if (instrumentCategory === "All") {
    return instrumentsArr;
  }
}

//-------------------------------------------------------------------------------
//The correct code to filter the instrument dropdown list:
//is filtering the list of instruments based on what you select from the dropdown (instrumentCategory):
//If you pick "all", it returns the whole instruments array (instrumentsArr).
//Otherwise, it returns only the instruments whose category matches the selected category.
const instrumentsArr = [
  { category: "woodwinds", instrument: "Flute", price: 500 },
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 },
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 },
];

const selectContainer = document.querySelector("select");
const productsContainer = document.querySelector(".products-container");

//The right code to filter the instrument dropdown list:
function instrumentCards(instrumentCategory) {
  if (instrumentCategory === "all") {
    return instrumentsArr; //Lets say we have an array called instrumentsArr, this will return the whole array
  }
  return instrumentsArr.filter(
    //You can use return straight away to return the processed array
    (instrument) => instrument.category === instrumentCategory //Instrument is just the parameter for the arrow function, doesn't
    //need brackets because it's just one parameter
  );
}

selectContainer.addEventListener("change", () => {
  //Calling the function when the event changes, better be said when customer selects a different option
  console.log(instrumentCards(selectContainer.value)); //This will log the filtered array based on the selected value
});

//Another way to write the instrumentCards function:
function instrumentCards(instrumentCategory) {
  //It's amazing. Sometimes I forget how many things you can save in a variable
  //You can save the value of the selected option in a variable:
  const instruments =
    instrumentCategory === "all" //condition ? doittrue : doitfalse
      ? instrumentsArr
      : instrumentsArr.filter(
          //Hey, this { category } is not a block, it’s an object destructuring pattern — so please parse it as a parameter
          ({ category }) => category === instrumentCategory //Category isn't the parameter, the object is.
          //it doesn´t really matter the name of the object being passed, but it matters the function knows that an object is expected to extract the property straight out of it
        );

  return instruments;
}

//In JS when you write a function (including an arrow function inside a map), the parameter names are "invented" in that context
function instrumentCards(instrumentCategory) {
  const instruments =
    instrumentCategory === "all"
      ? instrumentsArr
      : instrumentsArr.filter(
          ({ category }) => category === instrumentCategory
        );
  //Function that renders the HTML when iterating through each object of the instruments array with the map method: (Each object represents a card)
  return instruments
    .map(({ instrument, price }) => {
      //So intitially there were not any instrument nor price variables globally defined
      //But now you created them as parameters of the arrow function inside the map method
      return `<div class="card">  //So your map method expects to extract the instrument and price properties from each object in the instruments array
          <h2>${instrument}</h2>
          <p>$${price}</p>
        </div>`;
    })
    .join(""); //Join the array of HTML strings for the default array commas to be removed
}

selectContainer.addEventListener("change", (e) => {
  //E is the event object, target is the element that triggered the event, and value is the value of the selected option
  const category = e.target.value; // If I don't save the value selected for the container, I won't be able to reuse it later
  productsContainer.innerHTML = instrumentCards(category); //Selects the container where the cards will be rendered with the innerHTML property passing the instrumentCards function
});

//----------------------------------------------------------------------------------

//Function to create random options for a rock, paper, scissors game:
const options = ["Rock", "Paper", "Scissors"];
function getRandomComputerResult(arr) {
  const randomNumber = Math.floor(Math.random() * arr.length); //Math.floor rounds the array number of elements after Math.random is multiplied
  //for the number of items in the array with length property. Math.random is the one that gets a random number in decimals between 0 and 1
  return arr[randomNumber]; //randomNumber const saved the result as an array and this is like doing arr[1], because
  //When we call getRandomComputerResult(arr), inside the function option = ["Rock", "Paper", "Scissors"].
}

//When you define the const options inside the function:
//The const options then has local scope, and it makes it safer, in case someone else's call another var as options, so It doesn't break
//If there's a global options variable
function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * options.length);
  return options[randomNumber];
}
//Function to determine if the player won the round:
function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Rock" && computer === "Scissors") || //True
    (player === "Scissors" && computer === "Paper") || //True
    (player === "Paper" && computer === "Rock") //True
  );
}
//The || operator will always throw true, UNLESS both sides are false

//The function that shows the result of the game:
//BUT WRONG:
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
if (hasPlayerWonTheRound === true) {
  playerScore = 1;
 return 'Player wins! ${userOption} beats ${computerResult}';
}
else if (hasPlayerWonTheRound === false) {
computerScore = 1;
return 'Computer wins! ${computerResult} beats ${userOption}');
}
else if(userOption === computerResult){
 return "It's a tie! Both chose ${userOption}"
}
}

//It's wrong because in the template literals, you need to use backticks ``, not single quotes ''
//Not calling the function hasPlayerWonTheRound with the parameters player and computer, only referring to the function itself
//AND the order of the conditions is wrong, because if the player and computer choose the same option, it will never reach the tie condition
//The right way to do it:
function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
 
 if (hasPlayerWonTheRound(computerResult, userOption)) {
playerScore = 1;
return `Player wins! ${userOption} beats ${computerResult}`
 }
 else if (userOption === computerResult) {
return `It's a tie! Both chose ${userOption}`
 }
 else {
   return `Computer wins! ${computerResult} beats ${userOption}`;
 }
}
//CONTROL FLOW MATTERSS A LOT

//THE ACTUAL RIGHT WAY!!!!!!!!!:
function getRoundResults(userOption){
  const computerResult = getRandomComputerResult();
if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;  
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
}
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
//The show results function:
//Grabs the element from the DOM and sets its textContent to the result of the getRoundResults function
function showResults(userOption) {
roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;
};
//Adding the event listeners to the buttons:
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
rockBtn.addEventListener("click", () => {showResults("Rock")});
paperBtn.addEventListener("click",() => {showResults("Paper")});
scissorsBtn.addEventListener("click",() => {showResults("Scissors")});

// building out the winner message and reset button functionality:
function showResults(userOption) {
   roundResultsMsg.innerText = getRoundResults(userOption);//ORDER MATTERS: You get the result of the round first, THEN you update the scores
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;
  
  if (playerScore === 3) {
    winnerMsgElement.textContent = "Player has won the game!";
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
else if (computerScore === 3){
  winnerMsgElement.textContent = "Computer has won the game!";
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
}

};

function resetGame() {
  // Reset scores to 0
  playerScore = 0;
  computerScore = 0;
  
  // Update score displays
  playerScoreSpanElement.textContent = playerScore;
  computerScoreSpanElement.textContent = computerScore;
  
  // Hide reset button
  resetGameBtn.style.display = "none";
  
  // Show options so player can play again
  optionsContainer.style.display = "block";
  
  // Clear winner and round result messages
  winnerMsgElement.textContent = "";
  roundResultsMsg.textContent = "";
}
//Reset game function:
function resetGame() {
  // Reset scores to 0
  playerScore = 0;
  computerScore = 0;
  
  // Update score displays
  playerScoreSpanElement.textContent = playerScore;
  computerScoreSpanElement.textContent = computerScore;
  
  // Hide reset button
  resetGameBtn.style.display = "none";
  
  // Show options so player can play again
  optionsContainer.style.display = "block";
  
  // Clear winner and round result messages
  winnerMsgElement.textContent = "";
  roundResultsMsg.textContent = "";
}

//---------------------------------------------------------------
//An intrincate example with promises:
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

function getPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json()) //Converts the response to JSON, but still not the actual data
    .then((posts) => { //Now you have the actual data
      posts.forEach((post) => { //Iterates through each post object in the posts array
        addPostToDOM(
          document.querySelector(".container"), //calling the real container from the DOM
          createPostMarkup(post) //calling the previous method that creates the markup for each post as a parameter
        );
      });
    });
}

getPosts();

