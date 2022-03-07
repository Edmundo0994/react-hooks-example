import { useContext } from "react";
import DarkModeContext from "../context/DarkModeContext";

export default function Header() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="Header">
      <h1>React Hooks</h1>
      <button type="button" onClick={handleClick}>
        {darkMode ? "Dark Mode" : "Ligth Mode"}
      </button>
    </div>
  );
}
