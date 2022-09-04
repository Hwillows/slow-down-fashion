import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../Header";
import Menu from "../Menu";

function Bottoms() {
  const [bottoms, setBottoms] = useState([]);
  const [chosenBottom, setChosenBottom] = useState([]);

  useEffect(() => {
    getBottoms();
  }, []);

  const getBottoms = async () => {
    let token = localStorage.getItem("token");
    try {
      const { data } = await axios(
        "http://localhost:5005/wardrobe/item/bottoms",
        {
          method: "GET",
          header: {
            authorisation: `bearer ${token}`,
          },
        }
      );
      setBottoms(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = (event) => {
    const response = fetch(`http://localhost:5005/wardrobe/${event}`, {
      method: "DELETE",
    });
    setBottoms([...bottoms]);
  };
  const handleBottom = (item) => {
    console.log(item, " is here");
    if (chosenBottom.length === 0) setChosenBottom([item]);
    else setChosenBottom([...chosenBottom, item]);
    console.log("all chosen Bottoms ", chosenBottom);
  };

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="row row-cols-3">
          {bottoms.map((oneBottom, index) => {
            return (
              <div className="col">
                <div key={index}>
                  <div className="d-flex flex-column mb-3">
                    <img
                      className="image-size rounded p-2"
                      src={oneBottom.clothesImage}
                      alt={oneBottom.id}
                      onClick={() => handleBottom(oneBottom)}
                      chosenBottom={chosenBottom}
                    />
                    <button
                      className="btn btn-outline-danger remove-button p-2"
                      onClick={() => handleDelete(oneBottom.id)}
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

export default Bottoms;
