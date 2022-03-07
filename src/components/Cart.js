import { motion } from "framer-motion";

export default function Cart({ character }) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="Cart">
      <img src={character.image} alt="character" />
      <h3>
        #{character.id}: {character.name}
      </h3>
      <p>
        Alive:
        {character.status === "Alive" ? <span>💚</span> : <span>💔</span>}
      </p>
      <p>
        Specie:
        <span>{character.species}</span>
      </p>
      <p>
        Gender:
        <span>{character.gender}</span>
      </p>
    </motion.div>
  );
}
