import { Route, Routes } from "react-router-dom";
import Episode from "./Episode";
import Navbar from './Navbar';
import Sites from "./Sites";
import Character from './Character';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/episode" element={<Episode />} />
        <Route path="/sites" element={<Sites />} />
        <Route path="/character" element={<Character />} />
      </Routes>
    </>

  );
}

export default App;