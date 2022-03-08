import { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";
import { motion } from "framer-motion";

export default function Header() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="Header">
      <h1>React Hooks</h1>
      <motion.button
        whileHover={{ scale: 1.1 }}
        type="button"
        onClick={handleClick}
      >
        {darkMode ? "🌚" : "🌞"}
      </motion.button>
    </div>
  );
}
