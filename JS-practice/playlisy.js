const songsContainer = document.querySelector(".songs-container");
const addButton = document.querySelector(".input__btn_action_add");
const form = document.forms.add;
const artist = form.elements.artist;
const title = form.elements.title;

function addSong(artistValue, titleValue) {
  const songTemplate = document.querySelector("#song-template").content;
  const songElement = songTemplate.cloneNode(true);

  songElement.querySelector(".song__artist").textContent = artistValue;
  songElement.querySelector(".song__title").textContent = titleValue;

  songsContainer.append(songElement);
}

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  addSong(artist.value, title.value);
  artist.value = "";
  title.value = "";
});
