console.log("Hi there!");

const botName = "teacherBot";

const greeting = `My name is ${botName}.`;
console.log(greeting);

const subject = "JavaScript";
const topic = "strings";

const lessonSentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(lessonSentence);

const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length);

console.log(
  `Here is an example of using the length property on the word ${topic}.`
);
console.log(topic.length);

console.log(
  `Here is an example of accessing the first letter in the word ${subject}.`
);

console.log(subject[0]);

console.log(
  `Here is an example of accessing the second letter in the word ${subject}.`
);
console.log(subject[1]);

console.log(
  `Here is an example of accessing the last letter in the word ${subject}.`
);

const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);

/*When you're accessing a character directly from a string (like with subject[subject.length - 1]), you don't need to use template literals (${}) because you're just directly assigning or referencing the value.

Template literals are used when you want to embed expressions or variables into a string.*/

const learningIsFunSentence = "Learning is fun.";

//Example Code
const sentence = "I love to learn.";

// returns index 2
console.log(sentence.indexOf("love"));

// returns -1
console.log(sentence.indexOf("hate"));

//Example of using an OBJECT with a FUNCTION
let employee = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

function getFullName(employee) {
  console.log(employee.firstName + " " + employee.lastName);
}
getFullName(employee); // Output: John Doe
