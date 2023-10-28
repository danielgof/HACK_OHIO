import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BottomBar from "./components/BottomBar/BottomBar.jsx";
import TopBar from "./components/TopBar/TopBar.jsx";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage.jsx";
import InfoPage from "./pages/InfoPage/InfoPage.jsx";
import MapPage from "./pages/MapPage/MapPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/building/:id?" element={<BuildingPage />} />
        </Routes>
        <BottomBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
