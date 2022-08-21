import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../Header";
import Menu from "../Menu";

function Shoes() {
  const [shoes, setShoes] = useState([]);
  const [chosenShoe, setChosenShoe] = useState([]);

  useEffect(() => {
    getShoes();
  }, []);

  const getShoes = async () => {
    let token = localStorage.getItem("token");
    try {
      const { data } = await axios(
        "http://localhost:5005/wardrobe/item/shoes",
        {
          method: "GET",
          header: {
            authorisation: `bearer ${token}`,
          },
        }
      );
      setShoes(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDelete = (event) => {
    const response = fetch(`http://localhost:5005/wardrobe/${event}`, {
      method: "DELETE",
    });
    setShoes([...shoes]);
  };

  const handleShoe = (item) => {
    console.log(item, " is here");
    if (chosenShoe.length === 0) setChosenShoe([item]);
    else setChosenShoe([...chosenShoe, item]);
    console.log("all chosen shoe ", chosenShoe);
  };

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="row row-cols-3">
          {shoes.map((oneShoes, index) => {
            return (
              <div className="col">
                <div key={index}>
                  <div className="d-flex flex-column mb-3">
                    <img
                      className="image-size rounded p-2"
                      src={oneShoes.clothesImage}
                      alt={oneShoes.id}
                      onClick={() => handleShoe(oneShoes)}
                      chosenShoe={chosenShoe}
                    />
                    <button
                      className="btn btn-outline-danger remove-button p-2"
                      onClick={() => handleDelete(oneShoes.id)}
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

export default Shoes;
