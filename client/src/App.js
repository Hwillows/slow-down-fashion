import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
    </div>
  );
}

export default App;
