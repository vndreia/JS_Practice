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
  const songTemplate = document.querySelector("#song-template").content;  //Selecciona el contenido dentro de template
  const songElement = songTemplate.querySelector('.song').cloneNode(true); //Se hace un deep clone con true de todo lo que está dentro de template
  songElement.querySelector(".song__artist").textContent = artistValue; //Busca dentro del clon de tu template un elemento con la clase .song__artist
  songElement.querySelector(".song__title").textContent = titleValue; 
   // Encuentra el botón de "me gusta"
  const likeButton = songElement.querySelector(".song__like").addEventListener("click", function(evt){
  });
  // 🟢 Crea el controlador de clics que muestra el evento en consola
  likeButton.addEventListener('click', function(evt) {
     evt.target.classList.toggle("song__like_active");  //Le agrega los styles de active al botón 
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

 trackContainer.append(artistElement, titleElement, likeButtonElement)
//append agrega esos elementos al DOM.
}
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