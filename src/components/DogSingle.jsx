import React from "react";

const DogSingle = ({ dog }) => {
  return (
    <li className="dog-single">
      <img src={dog.message} alt="Dog" />
    </li>
  );
};

export default DogSingle;
