import React from "react";

const DogSingle = ({ dog, onRemove }) => {
  // console.log(dog);

  return (
    <li className="dog-single">
      <img src={dog.message} />
      <button onClick={() => onRemove(dog.id)}>remove</button>
    </li>
  );
};

export default DogSingle;
