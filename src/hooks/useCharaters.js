import { useState, useEffect } from "react";

const useCharaters = (url) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        await fetch(url)
          .then((response) => response.json())
          .then((data) => setCharacters(data.results));
      } catch (err) {
        console.log("Hubo un error al tratar de obtener los Characters", err);
      }
    };
    fetchInfo();
  }, [url]);

  return characters;
};

export default useCharaters;
