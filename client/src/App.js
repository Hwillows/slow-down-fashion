import "./App.css";
import React, { useState, useEffect } from "react";
import FormPage from "./components/form";

function App() {
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    fetch("/wardrobe")
      .then((res) => res.json())
      .then((results) => setAllImages(results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <FormPage></FormPage>
    </div>
  );
}

export default App;
