import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../Header";
import Menu from "../Menu";
function AllInOnes() {
  const [allInOnes, setAllInOnes] = useState([]);
  const [chosenAllInOne, setChosenAllInOne] = useState([]);

  useEffect(() => {
    getAllInOnes();
  }, []);

  const getAllInOnes = async () => {
    let token = localStorage.getItem("token");
    try {
      const { data } = await axios(
        "http://localhost:5005/wardrobe/item/allInOne",
        {
          method: "GET",
          header: {
            authorisation: `bearer ${token}`,
          },
        }
      );
      setAllInOnes(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = (event) => {
    const response = fetch(`http://localhost:5005/wardrobe/${event}`, {
      method: "DELETE",
    });
    setAllInOnes([...allInOnes]);
  };
  const handleAllInOne = (item) => {
    console.log(item, " is here");
    if (chosenAllInOne.length === 0) setChosenAllInOne([item]);
    else setChosenAllInOne([...chosenAllInOne, item]);
    console.log("all chosen jackets ", chosenAllInOne);
  };

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="row row-cols-3">
          {allInOnes.map((oneAllInOne, index) => {
            return (
              <div className="col">
                <div key={index}>
                  <div className="d-flex flex-column mb-3">
                    <img
                      className="image-size rounded p-2"
                      src={oneAllInOne.clothesImage}
                      alt={oneAllInOne.id}
                      onClick={() => handleAllInOne(oneAllInOne)}
                      chosenAllInOne={chosenAllInOne}
                    />
                    <button
                      className="btn btn-outline-danger remove-button p-2"
                      onClick={() => handleDelete(oneAllInOne.id)}
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

export default AllInOnes;
