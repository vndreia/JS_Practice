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

//A form being manipulated and validated example:

const formElement = document.querySelector(".form");
const formInput = formElement.querySelector(".form__input");
const formError = formElement.querySelector(`.${formInput.id}-error`); //Generates a new CSS Dynamic class name ".email-input-error" because the ID of formElement is "Id= email-input"

const showError = (input, errorMessage) => { //By adding errorMessage as a parameter, the errorMessage will be in the right place
  input.classList.add("form__input_type_error");
  formError.textContent = errorMessage;
  formError.classList.add("form__input-error_active");
}; 

const hideError = (input) => {
  input.classList.remove("form__input_type_error");
};

const checkInputValidity = () => {
  if (!formInput.validity.valid) {  //Access to the form inpute properties: validity.valid, which in boolean returns true if it is true.
    showError(formInput, formInput.validationMessage); //Access to the default validation message set by the browser to show in the input when there´s a mistake
  } else { //Hides the error if the inpuit is valid
    hideError(formInput);  
  }
};


formElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

formInput.addEventListener("input", function () {
  checkInputValidity();
});
 
//The code but refactored:
const form = document.querySelector(".form");
const formInput = form.querySelector(".form__input");
const formError = form.querySelector(`.${formInput.id}-error`);

const showInputError = (formElement, inputElement, errorMessage) => {
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
};

const hideInputError = (formElement, inputElement) => {
  inputElement.classList.remove("form__input_type_error");
  formError.classList.remove("form__input-error_active");
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
};

const checkInputValidity = (formElement) => {
  if (!formInput.validity.valid) {
      showInputError(form, formInput, formInput.validationMessage);
  } else {
    hideInputError(form, formInput);
  }
};

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

formInput.addEventListener("input", function () {
  checkInputValidity();
});


//And now this is a refactored code to select all inputs in the form to iterate in each

const setEventListeners = (formElement) => {
  // Encuentra todos los campos dentro del formulario y
  // crea un array a partir de estos, utilizando el método Array.from()
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));

  // Itera sobre el array obtenido
  inputList.forEach((inputElement) => {
    // agrega el controlador de eventos de entrada a cada campo
    inputElement.addEventListener("input", () => {
      // Llama a la función isValid() dentro del callback
      // y pásale el formulario y el elemento a comprobar
      isValid(formElement, inputElement)
    });
  });
};

//And it continues:
const enableValidation = () => {
  // Encontrará todos los formularios con la clase especificada en el DOM y
  // creará un array, a partir de estos, utilizando el método Array.from()
  const formList = Array.from(document.querySelectorAll(".form"));
  // Itera sobre el array obtenido
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      // Cancela el comportamiento por defecto de cada formulario
      evt.preventDefault();
    });
    // Llama a la función setEventListeners() para cada formulario
    // tomando un elemento del formulario como argumento
    setEventListeners(formElement);
  });
};
// Llama a la función
enableValidation();

//This function checks whether any input element in the list is invalid by iterating over them and evaluating their validity property
function hasInvalidInput(inputList) { 
 return inputList.some((inputElement) => {
  return !inputElement.validity.valid; //This function returns true if at least one input element in the list does not pass its built-in validity check 
});
}

//My very last questtion: 

const formError = form.querySelector(`.${formInput.id}-error`);