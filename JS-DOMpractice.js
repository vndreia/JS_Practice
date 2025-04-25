let container = document.querySelector('.container');

let songsContainer = container.querySelector('.songs-container');

let songs = songsContainer.querySelectorAll('.song');

let addButton = container.querySelector('.form__submit-btn_action_add');
let resetButton = container.querySelector('.form__submit-btn_action_reset');

if (songs.length === 0) {
  resetButton.setAttribute('disabled', 'true');
  ///This is 4 some reason a function
resetButton.classList.add('form__submit-btn_disabled'); //This is to write a new class outside HTML!!!!!
}

else { //Else doesn't need a condition to run
  resetButton.removeAttribute('disabled');
  resetButton.classList.remove('form__submit-btn_disabled');

}