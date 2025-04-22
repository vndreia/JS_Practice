let container = document.querySelector(".container");

let songsContainer = container.querySelector(".songs-container");

let songs = songsContainer.querySelectorAll(".song");

let addButton = container.querySelector(".form__submit-btn_action_add");
let resetButton = container.querySelector(".form__submit-btn_action_reset");

if (songs.length === 0) {
  resetButton.setAttribute("disabled", "true");
  ///This is 4 some reason a function
  resetButton.classList.add("form__submit-btn_disabled"); //This is to write a new class outside HTML!!!!!
} else {
  //Else doesn't need a condition to run
  resetButton.removeAttribute("disabled");
  resetButton.classList.remove("form__submit-btn_disabled");
}

function addSong(songsContainer) {
  //Esto le dice que agregue canciones al container de canciones
  songsContainer.innerHTML = `<div class="song">
    <h4 class="song__artist">Selena Gomez</h4>
    <p class="song__title">Love Song</p>
    <button class="song__like"></button>
  </div>`; //Esto con innerHTML es un string, que modifica el HTML sin modificar el HTML
}
addButton.addEventListener("click", addSong); //This is to add the event listener to the button, so when you click it, it adds a song

function renderAdded(songs) {
  //This new function is to render the added songs
  let songs = songsContainer.querySelectorAll(".song");
  if (songs.length === 0) {
    resetButton.setAttribute("disabled", true);
    resetButton.classList.add("form__submit-btn_disabled");
  } else {
    resetButton.removeAttribute("disabled");
    resetButton.classList.remove("form__submit-btn_disabled");
  }
}
