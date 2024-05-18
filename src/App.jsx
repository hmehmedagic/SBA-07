import "./style.css";
import { Route, Routes } from "react-router-dom";
import Characters from "./pages/Characters";
import Main from "./pages/Main";
import Nav from "./components/Nav";
import { useState } from "react";
import CharacterInfo from "./pages/CharacterInfo";
import Anime from "./pages/Anime";
import AnimeInfo from "./pages/AnimeInfo";

export default function App () {
  const [characterInfo, setCharacterInfo] = useState(null);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/anime/:name" element={<AnimeInfo />} />
        <Route path="/characters" element={<Characters setCharacterInfo={setCharacterInfo} />} />
        <Route path="/character/:name" element={<CharacterInfo characterInfo={characterInfo} />} />
      </Routes>
    </div>
  );
}
