import React from "react";
import DogListSingle from "./DogListSingle";

const DogList = ({ dogsGuardados }) => {
  return (
    <ul className="dog-list">
      {dogsGuardados.map((dog) => (
        <DogListSingle key={dog.id} dog={dog} />
      ))}
    </ul>
  );
};

export default DogList;
