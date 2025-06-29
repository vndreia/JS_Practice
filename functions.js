//If you just have a single parameter and one single return action in a function, you can write id like:

const addNums = (num1) => num1 + 5; //Arrow simple funct
console.log(addNums(5, 5));

//'This' keyword:
const person = {
  name: "Andrea",
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};
person.greet(); // "Hi, I'm Andrea"
//Here 'this' refers to the object that owns the method (person)
//It's not recommended to use 'this' keyword for arrow functions, because they don't have that property
//It's better when you write explicitlly the kind of var you extract properties from

//OMG functions CAN have MORE than 1 return:
function getInfoList(students) {
  if (!Array.isArray(students)) return []; // 1️⃣ primer caso: NO es un array
  return students.map((student) => student.getInfo()); // 2️⃣ segundo caso: SÍ es un array
}

// una función almacenada en una variable
const double = function (num) {
  return num * 2;
};

// una función pasada por un método
[1, 2, 3].map(function (item) {
  return item * 2;
});

//IFEE or Immediately Invoked Function Expression
//Es una función que se ejecuta inmediatamente después de ser definida
(function () {
  console.log("¡Hola, mundo!");
})(); // añadamos unos paréntesis al final del código para llamar a la función

/*Algo que puede ocurrir es que si otro desarrollador declara una variable button,
 no afectará a tu código ni al suyo. Tu variable permanece a salvo dentro del scope de tu IIFE.*/
