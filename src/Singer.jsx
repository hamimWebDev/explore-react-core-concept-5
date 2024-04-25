// Explore Jsx dynamic props
import React from "react";

const Singer = ({ singer }) => {
  console.log(singer);
  const { name, age } = singer;
  return (
    <div>
      <h3>Name: {name}</h3>
      <h4>Age: {age}</h4>
    </div>
  );
};

export default Singer;
