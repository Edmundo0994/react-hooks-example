import { motion } from "framer-motion";

export default function Cart({ character, dispatch, favoritesId }) {
  const handleAddToFavorites = (id) => {
    dispatch({ type: "ADD_TO_FAVORITE", payload: id });
  };
  const handleRemoveFromFavorites = (id) => {
    dispatch({ type: "REMOVE_FROM_FAVORITE", payload: id });
  };
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="Cart">
      <img src={character.image} alt="character" />
      <h4>
        #{character.id}: {character.name}
        <motion.span
          whileHover={{ scale: 1.4 }}
          onClick={() => {
            favoritesId.includes(character.id)
              ? handleRemoveFromFavorites(character.id)
              : handleAddToFavorites(character.id);
          }}
        >
          {favoritesId.includes(character.id) ? "💛" : "🖤"}
        </motion.span>
      </h4>
      <p>
        Alive:
        {character.status === "Alive" ? <span>💚</span> : <span>💔</span>}
      </p>
      <p>
        Species:
        <span>{character.species}</span>
      </p>
      <p>
        Gender:
        <span>{character.gender}</span>
      </p>
    </motion.div>
  );
}
