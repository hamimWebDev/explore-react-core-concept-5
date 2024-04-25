import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Student></Student>
    </div>
  );
};

// JSX component

const Person = () => {
  const person = { name: "Hamim", age: 20 };
  const student = { name: "Asif", age: 21 };
  return (
    <div>
      <h3>
        I am {person.name} with age: {person.age}
      </h3>
    </div>
  );
};

// Explode jsx
// use className
const Student = () => {
  const student = { name: "Asif", age: 21 };
  return (
    <div className="student">
      <h3>This is a Student.</h3>
      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
    </div>
  );
};
export default App;
