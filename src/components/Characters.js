import { useState, useEffect, useContext, useReducer, useMemo, useRef } from "react";
import Cart from "./Cart";
import DarkModeContext from "../context/DarkModeContext";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "./SearchBar";

const initialState = {
  favoritesId: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favoritesId: [...state.favoritesId, action.payload],
      };
    case "REMOVE_FROM_FAVORITE":
      return {
        ...state,
        favoritesId: state.favoritesId.filter((id) => id !== action.payload),
      };
    default:
      return state;
  }
};

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [searchByName, setSearchByName] = useState("");
  const [searchBySpecie, setSearchBySpecie] = useState("");
  const searchByNameInput = useRef(null);
  const searchBySpecieInput = useRef(null);

  const [state, dispatch] = useReducer(favoriteReducer, initialState);
  const { darkMode } = useContext(DarkModeContext);
  const charactersStyles = darkMode ? "Characters Dark transition" : "Characters transition";

  const fetchInfo = async () => {
    try {
      await fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((data) => setCharacters(data.results));
    } catch (err) {
      console.log("Hubo un error al tratar de obtener los Characters", err);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const filtered = useMemo(
    () =>
      characters
        .filter((user) => {
          return user.name.toLowerCase().includes(searchByName.toLowerCase());
        })
        .filter((user) => {
          return user.species.toLowerCase().includes(searchBySpecie.toLowerCase());
        }),
    [characters, searchByName, searchBySpecie]
  );

  return (
    <>
      <SearchBar
        values={{
          searchByName,
          searchBySpecie,
          setSearchByName,
          setSearchBySpecie,
          searchByNameInput,
          searchBySpecieInput,
          charactersStyles,
        }}
      />
      {filtered.length < 20 && (
        <>
          <h4>Results:</h4>
          <AnimatePresence>
            <motion.div className={charactersStyles}>
              {filtered.map((char) => (
                <Cart key={char.id + "fbn"} character={char} favoritesId={state.favoritesId} dispatch={dispatch} />
              ))}
            </motion.div>
          </AnimatePresence>
        </>
      )}
      {filtered.length === 0 && <h2>No results</h2>}
      {filtered.length >= 20 && (
        <AnimatePresence>
          <motion.div className={charactersStyles}>
            {characters &&
              characters.map((char) => (
                <Cart key={char.id} character={char} favoritesId={state.favoritesId} dispatch={dispatch} />
              ))}
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
