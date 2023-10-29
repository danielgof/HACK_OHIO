import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BottomBar from "./components/BottomBar/BottomBar.jsx";
import TopBar from "./components/TopBar/TopBar.jsx";
import "./App.css";
import MainPage from "./pages/MainPage/MainPage.jsx";
import SearchPage from "./pages/SearchPage/SearchPage.jsx";
import MapPage from "./pages/MapPage/MapPage.jsx";
import BuildingMapPage from "./pages/BuildingMapPage/BuildingMapPage.jsx";
import BuildingRoomsPage from "./pages/BuildingRoomsPage/BuildingRoomsPage.jsx";
import RoomPage from "./pages/RoomPage/RoomPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/building_map/:id?" element={<BuildingMapPage />} />
          <Route path="/building_room/:id?" element={<BuildingRoomsPage />} />
          <Route path="/room/:id?" element={<RoomPage />} />
        </Routes>
        <BottomBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
