import { useState, createContext } from "react";

const DarkModeContext = createContext({ darkMode: false });

export function DarkModeContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeContext;
