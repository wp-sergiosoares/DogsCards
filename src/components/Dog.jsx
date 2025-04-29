import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import DogImage from "./DogImage";
import DogList from "./DogList";
import { getDog } from "../services/api";

const MAX_DOGS = 100;

const Dog = () => {
  const [dogArray, setDogArray] = useState([]);
  const [picday, setPicDay] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Função para buscar uma nova imagem
  const fetchData = async () => {
    setLoading(true);
    try {
      const dog = await getDog();
      if (dog) {
        setPicDay(dog.message);
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // Busca a primeira imagem ao carregar o componente
  }, []);

  const handleAddToList = () => {
    const dogWithId = { message: picday, id: uuidv4() };
    setDogArray((prev) => {
      const updated = [...prev, dogWithId];
      return updated.slice(-MAX_DOGS); // Mantém apenas até o máximo de 100
    });
    fetchData(); // Busca nova imagem
  };

  const handleDiscard = () => {
    fetchData(); // Apenas busca nova imagem, sem salvar
  };

  return (
    <div className="dog-container">
      {picday && (
        <div className="dog-header">
          <DogImage pictureDog={picday} />
          <div className="dog-text">
            <div className="buttons">
              <button onClick={handleDiscard}>Descartar</button>
              <button onClick={handleAddToList}>Guardar</button>
            </div>
          </div>
        </div>
      )}

      <div className="dog-content">
        <DogList dogsGuardados={dogArray} />
      </div>

      {loading && <p>Carregando...</p>}
      {error && <p>Erro: {error}</p>}
    </div>
  );
};

export default Dog;
