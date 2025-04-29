import React from "react";

const DogListSingle = ({ dog }) => {
  return (
    <li className="dog-single">
      <img src={dog.message} alt="Dog" />
    </li>
  );
};

export default DogListSingle;
