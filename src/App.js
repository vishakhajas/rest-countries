import { useEffect, useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import SingleCountry from "./Pages/SingleCountry/SingleCountry";

export const myContext = createContext();

function App() {
  const [dark, setDark] = useState(false);

  const handleMode = () => {
    setDark(!dark);
  };

  return (
    <myContext.Provider value={{ dark: dark, darkFn: handleMode }}>
      <div
        className="App"
        style={{
          height: "fit-content",
          backgroundColor: `${dark ? "rgb(20, 19, 19)" : "white"}`,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<SingleCountry />} />
        </Routes>
      </div>
    </myContext.Provider>
  );
}

export default App;
