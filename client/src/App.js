import "./App.css";
import React, { useState } from "react";
import FormPage from "./components/Form";
import Wardrobe from "./components/Wardrobe";

function App() {
  // const [allImages, setAllImages] = useState([]);
  const [myWardrobe, setMyWardrobe] = useState(false);

  // useEffect(() => {
  //   fetch("/wardrobe")
  //     .then((res) => res.json())
  //     .then((results) => setAllImages(results))
  //     .catch((err) => console.log(err));
  // }, []);

  const handleWardrobeView = (myWardrobe) => {
    setMyWardrobe(myWardrobe);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-2"></div>
          <div className="col-md-auto">
            <h1> Slow Down Fashion</h1>
          </div>
          <div className="col col-lg-2"></div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-2"></div>
          <div className="col-md-auto">
            <button
              className={myWardrobe ? "btn btn-success" : "btn btn-secondary"}
              onClick={() => handleWardrobeView(true)}
            >
              My Wardrobe
            </button>
            <button
              className={!myWardrobe ? "btn btn-success" : "btn btn-secondary"}
              onClick={() => handleWardrobeView(false)}
            >
              Add item
            </button>
          </div>
          <div className="col col-lg-2"></div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-2"></div>
          <div className="col-md-auto">
            <p>
              {" "}
              Slow down fashion by finding a new love for your existing clothes
            </p>
          </div>
          <div className="col col-lg-2"></div>
        </div>
      </div>
      {!myWardrobe ? <FormPage /> : <Wardrobe />}
      {/* {allImages.map((images, index) => {
        return (
          <div key={index}>
            <img src={images.clothesImage} alt={images.clothesCategory} />
          </div>
        );
      })} */}

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
