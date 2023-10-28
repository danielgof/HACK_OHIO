import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BottomBar from "./components/BottomBar/BottomBar.jsx";
import TopBar from "./components/TopBar/TopBar.jsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <div className="App">
        <BottomBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
