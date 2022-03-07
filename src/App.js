import "./App.css";
import Characters from "./components/Characters";
import Header from "./components/Header";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <Header />
      <Characters />
    </div>
  );
}

export default App;
