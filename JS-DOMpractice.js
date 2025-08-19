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
