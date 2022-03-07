import { useState, useEffect, useContext } from "react";
import Cart from "./Cart";
import DarkModeContext from "../context/DarkModeContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const { darkMode } = useContext(DarkModeContext);
  const charactersStyles = darkMode
    ? "Characters Dark transition"
    : "Characters transition";
  useEffect(() => {
    const fetchInfo = async () => {
      try {
        await fetch("https://rickandmortyapi.com/api/character")
          .then((response) => response.json())
          .then((data) => setCharacters(data.results));
      } catch (err) {
        console.log("Hubo un error al tratar de obtener los Characters", err);
      }
    };
    fetchInfo();
  }, [characters]);
  return (
    <AnimatePresence>
      <motion.div className={charactersStyles}>
        {characters &&
          characters.map((char) => <Cart key={char.id} character={char} />)}
      </motion.div>
    </AnimatePresence>
  );
}
