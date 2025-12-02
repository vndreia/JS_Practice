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


//  -----------------------------------------------------------
//When PROPS IS literally anything:
/*
  Cambia estos tres componentes similares a un solo componente ‘Animal’ con props.
 */
function Animal(props) {
  return (
  <div className = "animal">
    <div className = "icon">{props.icon}</div>
    <div className = "info">
      <h3>{props.name}</h3>
      <span>Height: {props.height}</span>
    </div>
  </div>
    );
}


ReactDOM.render((
  <>
    <h2>África</h2>
<Animal icon = "🦒" name= "Jirafa" height= "5.2 metros"/>
    <Animal icon= "🦔" name= "Erizo" height ="15.2 centímetros"/> 
    <Animal icon = "🦨" name= "Zorrillo" height= "Demasiado maloliente para medirlo"/>
  </>
), document.querySelector('#root'));


//-----------------------------------------------------------
//And this version with DESTRUCTURING:
function Animal ({icon, name, height}) {
  return (<div className = "animal">
<div className = "icon">{icon}<div/>
<div className = "info">{info}
  <h3>{name}</h3>
  <span>{height}</span>
</div>
  </div>>);
}

//---------------
//Adding a new example:
function Animal(props) {
      // obtener la hora actual en horas
      const hours = new Date().getHours();
      // comprueba si es de noche
      const isNight = hours > 19 || hours < 6;
      // dependiendo de la hora del día, los diferentes animales deben estar dormidos o despiertos
  //tomando como la noche a partir de las 7 pm y el día a partir de las 6 am
      const isSleeping = (isNight && !isNocturnal) || (!isNight && isNocturnal);
    const isNocturnal = props.name = "Erizo" || props.name ="Zorrillo";  //THIS IS WRONG bc I am using this variable before defining it
//AND Is wrong because I am using assignment operator (=) instead of comparison operator (===)

// ❌ INCORRECTO - esto ASIGNA valores, no compara
const isNocturnal = props.name = "Erizo" || props.name = "Zorrillo";

// ✅ CORRECTO - esto COMPARA valores
const isNocturnal = props.name === "Erizo" || props.name === "Zorrillo";
 
return (
        <div className="animal">
          <div className="icon">{isSleeping ? "💤" : props.icon}</div>
          <div className="info">
            <h3>{props.name}</h3>
            <span>Altura: {props.height}</span>
          </div>
        </div>
      );
    }


    ReactDOM.render((
      <>
        <h2>Africa</h2>
        <Animal icon="🦒" name="Jirafa" height="5.2 metros" />
        <Animal icon="🦔" name="Erizo" height="15.2 centímetros" />
        <Animal icon="🦨" name="Zorrillo" height="Demasiado maloliente para medirlo" />
      </>
    ), document.querySelector('#root'));

    //-----------------------------------------------------------
    //FUNCTIONAL COMPONENTS VS CLASS COMPONENTS

    //Class components were used before React Hooks were introduced.
    //Class component example:
    
    class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rating: 0 }; // ← Set up state in constructor
  }
  
  handleLike = () => {
    this.setState({ rating: 1 }); // ← Update state with this.setState
  };
  
  render() { // ← Need a render() method
    return <div>{this.props.name}</div>; // ← Access props with this.props
  }
}
//Lots of boilerplate: constructor, super(props), this everywhere, render() method


//Functional component with Hooks:
function User({ id, name }) { // ← Props come as function parameters
  const [rating, setRating] = useState(0); // ← State with useState hook
  
  const handleLike = () => {
    setRating(1); // ← Update state directly
  };
  
  return <div>{name}</div>; // ← Just return JSX, no render() needed
}
//Much cleaner: No this, no constructor, no render() method

//Another components vs class example
class Switch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    // estamos utilizando expresiones de JavaScript para crear nuestras clases de CSS
    const className = `switch ${this.props.color} ${this.state.isActive ? 'on' : 'off'}`;

    return (
      <div className={className}>
        <button className="img" onClick={this.handleClick} />
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

ReactDOM.render((
  <Switch title="Happy" color="blue" isActive={false} />
), document.querySelector('#root'));

//FUNCTIONAL VERSION:
class Switch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
    };
  }

  handleClick = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    // estamos utilizando expresiones de JavaScript para crear nuestras clases de CSS
    const className = `switch ${this.props.color} ${this.state.isActive ? 'on' : 'off'}`;

    return (
      <div className={className}>
        <button className="img" onClick={this.handleClick} />
        <h3>{this.props.title}</h3>
      </div>
    );
  }
}

ReactDOM.render((
  <Switch title="Happy" color="blue" isActive={false} />
), document.querySelector('#root'));

//corrected version:

function Switch(props) {
  const [isActive, setIsActive] = React.useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  // estamos utilizando expresiones de JavaScript para crear nuestras clases de CSS
  const className = `switch ${props.color} ${isActive ? 'on' : 'off'}`;

  return (
    <div className={className}>
      <button className="img" onClick={handleClick} />
      <h3>{props.title}</h3>
    </div>
  );
}

ReactDOM.render((
  <Switch title="Happy" color="blue" isActive={false} />
), document.querySelector('#root'));

//-----------------------------------------------------------





//KEY
//Using key OUTSIDE the component:
function App() {
  const [selectedChatId, setSelectedChatId] = useState(10);
  
  return (
    <>
      <h2>Chats</h2>
      {chats.map(chat => (
        <Chat key={chat.id} onClick={() => setSelectedChatId(chat.id)} />
      ))}
      
      <h2>Mensajes</h2>
      <MessageList key={selectedChatId} />  {/* ← ¡Aquí está la magia! */}
    </>
  );

//This is when we want to change a whole chat and reset its state (like scroll position, etc.)

//AN EXAMPLE I LOVED: 


function GoodDeeds() {
	  const [deeds, setDeeds] = React.useState([]);
	
  function handleAddTask(e) {
	    const input = e.target.previousSibling;
	 setDeeds([...deeds, input.value ]);
input.value = '';
	  
	  }
	
	  return (
	    <>
	      <h3>Mis buenas acciones</h3>
	      <input type="text" />
	      <button onClick={handleAddTask}>+</button>
	      <ul>
	        {deeds.map((deed, i) => (
	          <li key={i}>{deed}</li>
	        ))}
	      </ul>
	    </>
	  );
	}
	
	ReactDOM.render((
	  <GoodDeeds />
	), document.querySelector('#root'));


  //An example of hooks with a cursor effect:

  function NeonCursor() {
  const [position, setPosition] = React.useState({ top: 0, left: 0 });

  React.useEffect(() => {
    function handleMouseMove(event) {
      setPosition({
        top: event.pageY,
        left: event.pageX,
      });
    }

   // lista de acciones dentro de un hook
    document.addEventListener('mousemove', handleMouseMove);
    document.body.classList.add('no-cursor');

    // estamos devolviendo una función que elimina nuestros efectos
    return () => {
      document.body.classList.remove('no-cursor');
      document.removeEventListener('mousemove', handleMouseMove);
    };
  });

  return (
    <img
      src="./cursor.png"
      width={30}
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        pointerEvents: 'none',
      }}
    />
  );
}


{/*A beautiful example where I use the audio object 4 the first time  */}
function playSound(fileName) {
  const audio = new Audio();
  audio.src = `https://code.s3.yandex.net/web-code/react/${fileName}`;
  audio.play();
}

function App() {
  const [isTimeShown, setIsTimeShown] = React.useState();

  function handleChange() {
    setIsTimeShown(!isTimeShown);
  }

  return (
    <>
      <label>
        <input type="checkbox" onChange={handleChange}/>
        — Habilitar tiempo
      </label>
      {isTimeShown && <Time/>}
    </>
  );
}

function Time() {
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);
  const [milliseconds, setMilliseconds] = React.useState(0);

  React.useEffect(() => {
    requestAnimationFrame(() => {
      const date = new Date();
      setMilliseconds(date.getMilliseconds());
      setSeconds(date.getSeconds());
      setMinutes(date.getMinutes());
      setHours(date.getHours());
    });
  });

  React.useEffect(() => {
    playSound('tick.mp3');
  }, [seconds]);

  React.useEffect(() => {
    playSound('gong.mp3');

    return () => {
      playSound('gong.mp3');
    };
  }, []);

  

  return (
    <h2>{hours}:{minutes}:{seconds}:{milliseconds}</h2>
  );
}

ReactDOM.render((
  <App/>
), document.querySelector('#root'));