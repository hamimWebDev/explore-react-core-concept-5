import React from "react";
import "./App.css";

const App = () => {
  const mobile1 = {
    name: "sam1",
    price: 12000,
    quantity: 1,
  };
  const mobile2 = {
    name: "sam2",
    price: 13000,
    quantity: 2,
  };
  const mobile3 = {
    name: "sam3",
    price: 14000,
    quantity: 3,
  };
  return (
    <div>
      <h1>Vite + React</h1>
      <Person></Person>
      <Student></Student>
      <Developer></Developer>
      <Mobile mobile={mobile1}></Mobile>
      <Mobile mobile={mobile2}></Mobile>
      <Mobile mobile={mobile3}></Mobile>
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

// Explore jsx
// Explore className
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

// Explore Object Style
const Developer = () => {
  const devStyle = {
    border: "2px solid tomato",
    padding: "20px",
    margin: "20px",
    borderRadius: "15px",
  };
  return (
    <div style={devStyle}>
      <h1>Dev DEv DeVo</h1>
      <p>Codding: Explore React</p>
    </div>
  );
};


// Explore Jsx props

const Mobile = ({ mobile }) => {
  console.log(mobile);
  const { name, price, quantity } = mobile;
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

export default App;
