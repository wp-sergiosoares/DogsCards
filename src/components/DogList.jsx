import React from "react";
import DogSingle from "./DogSingle";
import { useState } from "react";

const DogList = ({ dogsGuardados }) => {
  const [dogArray, setDogArray] = useState([]);
  const removeDog = (id) => {
    setDogArray((prev) => prev.filter((dog) => dog.id !== id));
  };

  return (
    <ul className="dog-list">
      {dogsGuardados.map((dog) => (
        <DogSingle key={dog.id} dog={dog} onRemove={removeDog} />
      ))}
    </ul>
  );
};

export default DogList;
