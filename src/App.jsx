import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
    </div>
  );
};

// JSX component

const Person = () => {
  const person = { name: "Hamim", age: 20 };
  return (
    <div>
      <h3>
        I am {person.name} with age: {person.age}
      </h3>
    </div>
  );
};

export default App;
