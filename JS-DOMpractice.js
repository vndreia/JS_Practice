let container = document.querySelector('.container');
let songsContainer = container.querySelector('.songs-container');
let songs = songsContainer.querySelectorAll('.song');
let addButton = container.querySelector('.form__submit-btn_action_add');
let resetButton = container.querySelector('.form__submit-btn_action_reset');

if (songs.length === 0) {
  resetButton.setAttribute('disabled', 'true');
resetButton.classList.add('form__submit-btn_disabled'); //This is to write a new class outside HTML!!!!!
noSongsElement.classList.remove('no-songs_hidden');
}

else { //Else doesn't need a condition to run
  resetButton.removeAttribute('disabled');
  resetButton.classList.remove('form__submit-btn_disabled');
  noSongsElement.classList.add('no-songs_hidden');
}

function renderAdded() {
  let songs = songsContainer.querySelectorAll('.song');
  let noSongsElement = container.querySelector('.no-songs');
  if (songs.length === 0) {
    resetButton.setAttribute('disabled', true);
    resetButton.classList.add('form__submit-btn_disabled');
    noSongsElement.classList.remove('no-songs_hidden');
  } else {
    resetButton.removeAttribute('disabled');
    resetButton.classList.remove('form__submit-btn_disabled');
    noSongsElement.classList.add('no-songs_hidden');
    debugger;
  }
}

function addSong() {
  let artist = document.querySelector('.input__text_type_artist');
  let song = document.querySelector('.input__text_type_song');

  songsContainer.insertAdjacentHTML('beforeend', `
		<div class="song">
      <h4 class="song__artist">${artist.value}</h4>
      <p class="song__title">${song.value}</p>
		  <button class="song__like"></button>
		</div>
  `);

artist.value = "";
  song.value = "";
  
  renderAdded();
}

addButton.addEventListener('click', addSong);
renderAdded();
debugger;

//Este ahora es un ejemplo de un e.preventDefault en un form:

const form = document.querySelector('.popup__form');

function handleFormSubmit(event) {
  event.preventDefault();
  // la lógica de "enviar" va aquí
}
form.addEventListener('submit', handleFormSubmit);

//Este otro código hace lo mismo:

const form = document.querySelector('.popup__form');

function handleFormSubmit(e) {
  e.preventDefault();
  // la lógica de "enviar" va aquí
}
form.addEventListener('submit', handleFormSubmit);

/*Esto también es correcto, por las mismas razones que la respuesta anterior. 
El nombre que le des al objeto event es arbitrario, pero por convención, deberías
 utilizar event, evt o e. Y ser coherente*/