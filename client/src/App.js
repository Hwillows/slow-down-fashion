import "./App.css";
import "./index.css";
import React, { useState } from "react";
import FormPage from "./components/Form";
import Wardrobe from "./components/Wardrobe";

function App() {
  
  const [myWardrobe, setMyWardrobe] = useState(true);

  const handleWardrobeView = (myWardrobe) => {
    setMyWardrobe(myWardrobe);
  };

  return (
    <div className="App">
      <body className="minimal-background">
        <div className="container">
          <div className="row">
            <div className="col justify-content-md-center ">
              <h1 className="heading-font mt-3"> Slow Down Fashion</h1>
            </div>

            <div className="col nav justify-content-end">
              <button
                className={myWardrobe ? "btn btn-success" : "btn btn-secondary"}
                onClick={() => handleWardrobeView(true)}
              >
                My Wardrobe
              </button>
              <button
                className={
                  !myWardrobe ? "btn btn-success" : "btn btn-secondary"
                }
                onClick={() => handleWardrobeView(false)}
              >
                Add item
              </button>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-md-center">
            {/* <div className="col col-lg-2"></div> */}
            {/* <div className="col-md-auto"> */}
            <div className="d-flex flex-row">
              <p className="mt-2 text-center heading-font">
                {" "}
                Slow down fashion by finding a new love <br></br>for your
                existing clothes
              </p>
            </div>
            {/* </div> */}
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
      </body>
    </div>
  );
}

export default App;
