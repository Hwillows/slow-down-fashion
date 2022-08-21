import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../Header";
import Menu from "../Menu";

function Tops() {
  const [tops, setTops] = useState([]);
  const [chosenTop, setChosenTop] = useState([]);

  useEffect(() => {
    getTops();
  }, []);

  const getTops = async () => {
    let token = localStorage.getItem("token");
    try {
      const { data } = await axios("http://localhost:5005/wardrobe/item/top", {
        method: "GET",
        header: {
          authorisation: `bearer ${token}`,
        },
      });
      setTops(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = (event) => {
    const response = fetch(`http://localhost:5005/wardrobe/${event}`, {
      method: "DELETE",
    });
    setTops([...tops]);
  };
  const handleTop = (item) => {
    console.log(item, " is here");
    if (chosenTop.length === 0) setChosenTop([item]);
    else setChosenTop([...chosenTop, item]);
    console.log("all chosen Top ", chosenTop);
  };

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="row row-cols-3">
          {tops.map((oneTop, index) => {
            return (
              <div className="col">
                <div key={index}>
                  <div className="d-flex flex-column mb-3">
                    <img
                      className="image-size rounded p-2"
                      src={oneTop.clothesImage}
                      alt={oneTop.id}
                      onClick={() => handleTop(oneTop)}
                      chosenTop={chosenTop}
                    />
                    <button
                      className="btn btn-outline-danger remove-button p-2"
                      onClick={() => handleDelete(oneTop.id)}
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

export default Tops;
