// Sample data
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 28,
  city: "New York",
};

// Arrow function with destructuring and template literal
const greetPerson = ({ firstName, lastName, age }) => {
  console.log(`Hello, ${firstName} ${lastName}! You are ${age} years old.`);
};

greetPerson(person); // Output: Hello, John Doe! You are 28 years old.

// Using spread operator to clone and update the person object
const updatedPerson = { ...person, age: 29, city: "Los Angeles" };
console.log(updatedPerson);

// Function using rest operator to accept multiple hobbies
const showHobbies = (name, ...hobbies) => {
  console.log(`${name}'s hobbies are: ${hobbies.join(", ")}`);
};

showHobbies("John", "Reading", "Traveling", "Coding");
