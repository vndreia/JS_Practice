//If you just have a single parameter and one single return action in a function, you can write id like:

const addNums = num1 => num1 + 5; //Arrow simple funct
console.log(addNums(5, 5));

//'This' keyword:
const person = {
  name: "Andrea",
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
};
person.greet(); // "Hi, I'm Andrea"
//Here 'this' refers to the object that owns the method (person)
//It's not recommended to use 'this' keyword for arrow functions, because they don't have that property
//It's better when you write explicitlly the kind of var you extract properties from

//OMG functions CAN have MORE than 1 return:
function getInfoList(students) {
  if (!Array.isArray(students)) return []; // 1️⃣ primer caso: NO es un array
  return students.map(student => student.getInfo()); // 2️⃣ segundo caso: SÍ es un array
}