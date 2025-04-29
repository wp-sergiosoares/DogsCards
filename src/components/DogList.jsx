import React from "react";
import DogSingle from "./DogSingle";

const DogList = ({ dogsGuardados }) => {
  return (
    <ul className="dog-list">
      {dogsGuardados.map((dog) => (
        <DogSingle key={dog.id} dog={dog} />
      ))}
    </ul>
  );
};

export default DogList;
