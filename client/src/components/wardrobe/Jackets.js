import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../Header";
import Menu from "../Menu";

function Jackets() {
  const [jackets, setJackets] = useState([]);
  const [chosenJacket, setChosenJacket] = useState([]);

  useEffect(() => {
    getJackets();
  }, []);

  const getJackets = async () => {
    try {
      let token = localStorage.getItem("token");
      const { data } = await axios(
        "http://localhost:5005/wardrobe/item/jacket",
        {
          method: "GET",
          header: {
            authorisation: `Bearer ${token}`,
          },
        }
      );
      setJackets(data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = (event) => {
    const response = fetch(`http://localhost:5005/wardrobe/${event}`, {
      method: "DELETE",
    });
    setJackets([...jackets]);
  };

  const handleJacket = (item) => {
    console.log(item, " is here");
    if (chosenJacket.length === 0) setChosenJacket([item]);
    else setChosenJacket([...chosenJacket, item]);
    console.log("all chosen jackets ", chosenJacket);
  };

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="row row-cols-3">
          {jackets.map((oneJacket, index) => {
            return (
              <div className="col">
                <div key={index}>
                  <div className="d-flex flex-column mb-3">
                    <img
                      className="image-size rounded p-2"
                      src={oneJacket.clothesImage}
                      alt={oneJacket.id}
                      onClick={() => handleJacket(oneJacket)}
                      chosenJacket={chosenJacket}
                    />
                    <button
                      className="btn btn-outline-danger remove-button p-2"
                      onClick={() => handleDelete(oneJacket.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Jackets;
