import React, { useState, useEffect } from "react";

function Wardrobe() {
  const [jackets, setJackets] = useState([]);
  const [tops, setTops] = useState([]);
  const [trousers, setTrousers] = useState([]);
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:5005/wardrobe/item/jacket"
      );
      const results = await response.json();
      console.log(results);
      setJackets(results);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5005/wardrobe/item/top");
      const results = await response.json();
      console.log(results);
      setTops(results);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "http://localhost:5005/wardrobe/item/trousers"
      );
      const results = await response.json();
      console.log(results);
      setTrousers(results);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5005/wardrobe/item/shoes");
      const results = await response.json();
      console.log(results);
      setShoes(results);
    }
    fetchData();
  }, []);

  const [jacketsButton, setJacketsButton] = useState(false);

  const handleJacketsButton = (jacketsButton) => {
    setJacketsButton(jacketsButton);
  };
  const [topsButton, setTopsButton] = useState(false);

  const handleTopsButton = (topsButton) => {
    setTopsButton(topsButton);
  };
  const [trousersButton, setTrousersButton] = useState(false);

  const handleTrousersButton = (trousersButton) => {
    setTrousersButton(trousersButton);
  };
  const [shoesButton, setShoesButton] = useState(false);

  const handleShoesButton = (shoesButton) => {
    setShoesButton(shoesButton);
  };

  // when am image is clicked, the image should be added to an array
  const [chosenOutfit, setChosenOutfit] = useState([]);
  const handleOutfit = (chosenOutfit) => {
    setChosenOutfit(chosenOutfit);
    console.log(chosenOutfit);
  };

  return (
    <div>
      {/* Jacket Carousel */}
      {/* <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-4">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {jackets.map((oneJacket, index) => {
                  return (
                    <div
                      key={index}
                      className={`carousel-item ${index === 0 ? "active" : ""}`}
                    >
                      <img
                        className="d-block w-100"
                        src={oneJacket.clothesImage}
                        alt={oneJacket.id}
                      />{" "}
                      <button className="btn btn-outline-danger">X</button>
                    </div>
                  );
                })}
              </div>
              <button
                className="carousel-control-prev carousel-dark-control-icon-filter"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <button
        onClick={
          jacketsButton
            ? () => handleJacketsButton(false)
            : () => handleJacketsButton(true)
        }
      >
        Jacket
      </button>
      <button
        onClick={
          topsButton
            ? () => handleTopsButton(false)
            : () => handleTopsButton(true)
        }
      >
        Tops
      </button>
      <button
        onClick={
          trousersButton
            ? () => handleTrousersButton(false)
            : () => handleTrousersButton(true)
        }
      >
        Trousers
      </button>
      <button
        onClick={
          shoesButton
            ? () => handleShoesButton(false)
            : () => handleShoesButton(true)
        }
      >
        Shoes
      </button>

      {/* <img
        className="image-size rounded"
        src={featuredJacket.clothesImage}
        alt={featuredJacket.id}
      /> */}

      {jacketsButton ? (
        <div className="container">
          <div className="row row-cols-3">
            {jackets.map((oneJacket, index) => {
              return (
                <div key={index} className="col">
                  <img
                    className="image-size rounded"
                    src={oneJacket.clothesImage}
                    alt={oneJacket.id}
                    onClick={handleOutfit}
                  />
                  <button className="btn btn-outline-danger">X</button>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {topsButton ? (
        <div className="container">
          <div className="row row-cols-3">
            {tops.map((oneTop, index) => {
              return (
                <div key={index} className="col">
                  <img
                    className="image-size rounded"
                    src={oneTop.clothesImage}
                    alt={oneTop.id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div></div>
      )}
      {trousersButton ? (
        <div className="container">
          <div className="row row-cols-3">
            {trousers.map((oneTrousers, index) => {
              return (
                <div key={index} className="col">
                  <img
                    className="image-size rounded"
                    src={oneTrousers.clothesImage}
                    alt={oneTrousers.id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div></div>
      )}

      {shoesButton ? (
        <div className="container">
          <div className="row row-cols-3">
            {shoes.map((oneShoes, index) => {
              return (
                <div key={index} className="col">
                  <img
                    className="image-size rounded"
                    src={oneShoes.clothesImage}
                    alt={oneShoes.id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div> </div>
      )}
    </div>
  );
}
export default Wardrobe;
