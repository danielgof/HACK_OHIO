import { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import BottomBar from "./components/BottomBar.jsx";
import TopBar from "./components/TopBar.jsx"
import './App.css';

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
