<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <script src="https://unpkg.com/react@16/umd/react.development.js"></script>  //This is the React library
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script> //This is the DOM library for React to render on the browser
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script> //This is Babel to compile JSX to the browser
</head>
<body>
<div id="root"></div> //Root is WHERE we want to RENDER our React code 
<script type="text/jsx"> //It's telling the browser (specifically Babel) to process this code differently.
//ReactDOM.render() es la función es responsable de procesar JSX y mostrar el resultado dentro del DOM. El primer parámetro de esta función es el código JSX que se va
// a renderizar, y el segundo indica el elemento del DOM en el que se mostrarán los resultados de la función.
  ReactDOM.render(
    <h1>¡Hola, mundo!</h1>,  //THE CODE THAT YOU WANT TO RENDER
    document.querySelector('#root'), //WHERE
  );
</script>
</body>
</html>

//EXAMPLE:
// la variable responsable del estado de la aplicación
let isClicked = false;

// esta función se encarga de renderizar la interfaz
// depende del valor de isClicked
function renderAll() {
  ReactDOM.render((
    <div>
      <button type="button">¡Haz clic sobre mí!</button>

      <div className={isClicked ? 'active' : ''}>
        <div>
          {isClicked ? '¡Se hizo clic!' : 'Esperando el clic...'}
        </div>
      </div>
    </div>
  ), document.querySelector('#root'));
}

// llama para realizar el renderizado inicial cuando se abre la página
renderAll();

// cuando se produce el evento, cambiamos el valor de las variables
// luego vuelve a renderizar la página
const element = document.querySelector('button');
element.addEventListener('click', () => {
  isClicked = true;
  renderAll();
});

//LISTAS EN REACT

  
  const list = [{
    id: 1,
    name: 'Pan',
    quantity: '1 rebanada',
  }, {
    id: 2,
    name: 'Ron',
    quantity: '3 botellas',
  }, {
    id: 3,
    name: 'Coca-cola',
    quantity: '3 botellas',
  }, {
    id: 4,
    name: 'Papel higiénico',
    quantity: 'Tanto como sea humanamente posible',
  }];

 ReactDOM.render(( 
   <div>
     <ul> 
  {list.map((item) => 
        <li key={item.id}>{item.name}</li>
      )}
     </ul>
   </div>
), document.querySelector('#root'));

// ✅ SI es el único elemento que retornas, NO necesitas wrapper:
ReactDOM.render((
  <ul>
    {list.map(...)}
  </ul>
), document.querySelector('#root'));

// ✅ SI retornas múltiples elementos, SÍ necesitas wrapper:
ReactDOM.render((
  <div>
    <h1>Mi Lista</h1>
    <ul>
      {list.map(...)}
    </ul>
  </div>
), document.querySelector('#root'));

// ❌ Esto NO funciona (dos elementos sin wrapper):
ReactDOM.render((
  <h1>Mi Lista</h1>
  <ul>
    {list.map(...)}
  </ul>
), document.querySelector('#root'));

//EVENTOS SINTÉTICOS

function handleKeyUp(e) {
  document.getElementById('title').innerText = e.target.value;
}

//La estructura real:
<input onKeyUp={handleKeyUp} type="text" />
//     ↑       ↑
//     |       └─ Esta es la función (el event listener)
//     └───────── Este es el atributo donde lo pones
```
//En español sería algo así como:
//"Cuando ocurra [onKeyUp], ejecuta [handleKeyUp]"
//-----------------------------------------------------------


//COMPONENTS:

// This is the DEFINITION (the recipe)

function User(props) {
  return (
    <div>
      <img src={`.../${props.id}.png`} />
      <p>{props.name}</p>
    </div>
  );
}

// This is USING the component (making the dish from the recipe)
ReactDOM.render((
  <>
    <h2>Mis amigos imaginarios:</h2>
    <User id="1" name="Gregory" />  // ← Creating an INSTANCE of User
    <User id="2" name="James" />     // ← Another INSTANCE
    <User id="3" name="Allison" />   // ← Another INSTANCE
  </>
), document.querySelector('#root'));


//-----------------------------------------------------------
//Props behind the scenes, example:
<CustomButton title="¡Haz clic sobre mí!" onClick={handleClick} />
//What React actually does behind the scenes:
// Step 1: React creates a props object from your attributes
const propsObject = {
  title: "¡Haz clic sobre mí!",
  onClick: handleClick,
};

// Step 2: React CALLS your component function with that object
const jsxToInsert = CustomButton(propsObject);

// Step 3: React takes the returned JSX and puts it in the DOM


//-----------------------------------------------------------//Another example of a component:
// Step 1: You define the Giraffe function (the blueprint)
function Giraffe() {
  return <div>...</div>;
}

// Step 2: ReactDOM.render takes JSX and puts it in the actual HTML DOM
ReactDOM.render((
  <>
    <h2>África</h2>
    <Giraffe />  // ← React calls Giraffe() behind the scenes
  </>
), document.querySelector('#root'));  // ← Find the HTML element with id="root"

// These do the same thing:
<Giraffe />
// vs
React.createElement(Giraffe)