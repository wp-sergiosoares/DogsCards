import React from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";

const MAX_DOGS = 100;

const DogImage = () => {
  const [dogArray, setDogArray] = useState([]);
  const [picday, setPicDay] = useState([]);
  const [loadingType, setLoadingType] = useState(null); // 'initial' | 'another' | null
  const [error, setError] = useState(null);

  const fetchData = async ({ type = "initial" }) => {
    setLoadingType(type);
    try {
      const dog = await getDog();
      if (dog) {
        setPicDay(dog.message);
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoadingType(null);
    }
  };

  useEffect(() => {
    fetchData("initial");
  }, []);

  const handleAddToList = () => {
    const dogWithId = { message: picday, id: uuidv4() };
    setDogArray((prev) => {
      const updated = [...prev, dogWithId];
      return updated.slice(-MAX_DOGS);
    });
    fetchData({ type: "another" }); // só busca nova imagem
  };
  return (
    <div>
      {picday && (
        <div className="dog-header">
          <div className="dog-pic-day">
            <motion.img
              src={picday}
              alt="Random Dog"
              className="dog-image"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <div className="dog-text">
              <div className="buttons">
                <button onClick={() => fetchData({ type: "another" })}>
                  Descartar
                </button>
                <button onClick={handleAddToList}>Guardar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DogImage;
