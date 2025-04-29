import React, { useState, useEffect } from "react";
import { getDog } from "../services/api";
import { ClipLoader } from "react-spinners";

import DogSingle from "./DogSingle";
import { v4 as uuidv4 } from "uuid";
import DogList from "./DogList";
import DogImage from "./DogImage";

const MAX_DOGS = 100;

const Dog = () => {
  const [dogArray, setDogArray] = useState([]);
  const [picday, setPicDay] = useState([]);
  const [loadingType, setLoadingType] = useState(null); // 'initial' | 'another' | null
  const [error, setError] = useState(null);

  // const isLoading = loadingType !== null;
  const latestDog = dogArray[dogArray.length - 1];

  if (loadingType === "initial") {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <ClipLoader color="#3498db" size={100} />
      </div>
    );
  }

  if (error) {
    return <div>Error occurred! {error}</div>;
  }
  /*
  console.log(latestDog);
  console.log(typeof latestDog);
  console.log(latestDog);
  console.log(typeof dogArray);
  
  console.log(picday);
  */

  console.log(dogArray);

  return (
    <div className="dog-container">
      <DogImage />
      <div className="dog-content">
        <DogList dogsGuardados={dogArray} />
      </div>
    </div>
  );
};

export default Dog;
