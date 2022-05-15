import "./App.css";
import React, { useState, useEffect } from "react";
import FormPage from "./components/Form";
import Wardrobe from "./components/Wardrobe";

function App() {
  const [allImages, setAllImages] = useState([]);
  const [myWardrobe, setMyWardrobe] = useState(false);

  useEffect(() => {
    fetch("/wardrobe")
      .then((res) => res.json())
      .then((results) => setAllImages(results))
      .catch((err) => console.log(err));
  }, []);

  const handleWardrobeView = (myWardrobe) => {
    setMyWardrobe(myWardrobe);
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col col-lg-2"></div>
          <div class="col-md-auto">
            <h1> Slow Down Fashion</h1>
          </div>
          <div class="col col-lg-2"></div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col justify-content"></div>
          <button
            class={
              myWardrobe ? "col-4 btn btn-success" : "col-4 btn btn-secondary"
            }
            onClick={() => handleWardrobeView(true)}
          >
            My Wardrobe
          </button>
          <button
            class={
              !myWardrobe ? "col-4 btn btn-success" : "col-4 btn btn-secondary"
            }
            onClick={() => handleWardrobeView(false)}
          >
            Add item
          </button>
          <div class="col justify-content"></div>
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col col-lg-2"></div>
          <div class="col-md-auto">
            <p>
              {" "}
              Slow down fashion by finding a new love for your existing clothes
            </p>
          </div>
          <div class="col col-lg-2"></div>
        </div>
      </div>

      {/* {allImages.map((images, index) => {
        return (
          <div key={index}>
            <img src={images.clothesImage} alt={images.clothesCategory} />
          </div>
        );
      })} */}
      {!myWardrobe ? <FormPage /> : <Wardrobe />}
      {/* <p>
        10,000 items of clothing are being sent to landfill every five minutes
      </p>
      <p>
        Cheap, toxic textile dyes make the fashion industry the one of the
        largest polluters of clean water globally
      </p> */}
    </div>
  );
}

export default App;
