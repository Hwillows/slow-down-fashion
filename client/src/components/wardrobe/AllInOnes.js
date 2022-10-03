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
          headers: {
            authorization: `bearer ${token}`,
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
        <div className="row row-cols-3 gap-3">
          {allInOnes.map((oneAllInOne, index) => {
            return (
              <div className="col">
                {/* Created a grid container with 2 rows, 1 column - row 1: image, row 2:buttons */}
                <div className="container bg-light d-flex justify-content-center w-auto">
                  <div className="row row-cols-1">
                    <div className="col">
                      <div key={index}>
                        <div className="d-flex flex-column mb-3">
                          <img
                            className="image-size rounded mt-3 pb-0"
                            src={oneAllInOne.clothesImage}
                            alt={oneAllInOne.id}
                            onClick={() => handleAllInOne(oneAllInOne)}
                            chosenAllInOne={chosenAllInOne}
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
                                onClick={() => handleDelete(oneAllInOne.id)}
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

export default AllInOnes;
