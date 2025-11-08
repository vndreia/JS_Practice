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