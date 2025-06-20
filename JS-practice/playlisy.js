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
const formInput = form.querySelector(".form__input");
const formError = form.querySelector(`.${formInput.id}-error`);

const showInputError = (formElement, inputElement, errorMessage) => {  //By adding errorMessage as a parameter, the errorMessage will be in the right place
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
      toggleButtonState(inputList, buttonElement);
    });
    toggleButtonState(inputList, buttonElement);
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
    // Select all fieldsets inside the form and set up event listeners for each
    const fieldsetList = Array.from(formElement.querySelectorAll(".form__set"));
    fieldsetList.forEach((fieldset) => {
      setEventListeners(fieldset);
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

//A function to deactivate the button is some of the inputs are invalid:
function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
      buttonElement.classList.add("button_inactive");
  } else {
    buttonElement.classList.remove("button_inactive");
  }
}
