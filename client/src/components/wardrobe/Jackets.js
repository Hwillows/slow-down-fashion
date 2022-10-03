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
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setJackets(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleDelete = (event) => {
    fetch(`http://localhost:5005/wardrobe/${event}`, {
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
        <div className="row row-cols-3 gap-3">
          {jackets.map((oneJacket, index) => {
            return (
              <div className="col">
                {/* Created a grid container with 2 rows, 1 column - row 1: image, row 2:buttons */}
                <div className="container bg-light d-flex justify-content-center w-auto">
                  <div className="row row-cols-1">
                    <div className="col">
                      <div key={oneJacket.id}>
                        <div className="d-flex flex-column">
                          <img
                            className="image-size rounded mt-3 pb-0"
                            src={oneJacket.clothesImage}
                            alt={oneJacket.id}
                            onClick={() => handleJacket(oneJacket)}
                            chosenJacket={chosenJacket}
                          />
                        </div>
                        <div className="col">
                          {/* rehome and delete buttons that go with each image */}
                          <div className="d-flex justify-content-center bg-light mx-4 mt-0">
                            <div className="mt-0 mb-2">
                              <button className="bi bi-house-heart bg-transparent border border-0"></button>
                            </div>{" "}
                            <div className="mt-0 mb-2">
                              <button
                                className="bi bi-trash3 bg-transparent border border-0"
                                onClick={() => handleDelete(oneJacket.id)}
                              ></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
