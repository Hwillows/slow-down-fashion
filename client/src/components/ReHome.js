import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Menu from "./Menu";

function ReHome() {
  const [rehome, setRehome] = useState([]);
  const [rehomeId, setRehomeId] = useState();
  const [clothesCategory, setClothesCategory] = useState("");
  const [clothesImage, setClothesImage] = useState("");

  useEffect(() => {
    getRehome();
  }, []);

  const getRehome = async () => {
    try {
      let token = localStorage.getItem("token");
      const { data } = await axios("http://localhost:5005/rehome", {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setRehome(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleDelete = (event) => {
    fetch(`http://localhost:5005/rehome/${event}`, {
      method: "DELETE",
    });
    setRehome([...rehome]);
  };

  let returnItem = {
    clothesCategory: clothesCategory,
    clothesImage: clothesImage,
  };

  const handleWardrobeReturn = async () => {
    try {
      let token = localStorage.getItem("token");
      const { data } = await axios.post(
        "http://localhost:5005/wardrobe",
        returnItem,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json; charset=utf-8",
          },
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Header />
      <Menu />

      <h1>Items to Rehome</h1>

      <div className="container">
        <div className="row row-cols-3 gap-3">
          {rehome.map((oneItem, index) => {
            return (
              <div key={index} className="col">
                {/* Created a grid container with 2 rows, 1 column - row 1: image, row 2:buttons */}
                <div className="container bg-light d-flex justify-content-center w-auto">
                  <div className="row row-cols-1">
                    <div className="col">
                      <div>
                        <div className="d-flex flex-column">
                          <img
                            className="image-size rounded mt-3 pb-0"
                            src={oneItem.clothesImage}
                            alt={oneItem.id}
                            // onClick={() => handleJacket(oneJacket)}
                            // chosenJacket={chosenJacket}
                          />
                        </div>
                        <div className="col">
                          {/* rehome and delete buttons that go with each image */}
                          <div className="d-flex justify-content-center bg-light mx-4 mt-0">
                            <div className="mt-0 mb-2">
                              {/* Button to trigger model */}
                              <button
                                className="bi bi-arrow-return-left bg-transparent border border-0"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#returnToWardrobe"
                                onClick={() => {
                                  setClothesCategory(oneItem.clothesCategory);
                                  setClothesImage(oneItem.clothesImage);
                                  setRehomeId(oneItem.id);
                                }}
                              ></button>
                              {/* <!-- Modal --> */}
                              <div
                                className="modal fade"
                                id="returnToWardrobe"
                                tabIndex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h1
                                        className="modal-title fs-5"
                                        id="exampleModalLabel"
                                      >
                                        Return to your wardrobe
                                      </h1>
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      ></button>
                                    </div>
                                    <div className="modal-body">
                                      Do now want to keep this item?
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => {
                                          handleWardrobeReturn();
                                          handleDelete(rehomeId);
                                        }}
                                        data-bs-dismiss="modal"
                                      >
                                        Return
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>{" "}
                            <div className="mt-0 mb-2">
                              {/* Button to trigger model */}
                              <button
                                className="bi bi-trash3 bg-transparent border border-0"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#removeItem"
                                onClick={() => setRehomeId(oneItem.id)}
                              ></button>
                              {/* <!-- Modal --> */}
                              <div
                                className="modal fade"
                                id="removeItem"
                                tabIndex="-1"
                                aria-labelledby="exampleModalLabel"
                                aria-hidden="true"
                              >
                                <div className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h1
                                        className="modal-title fs-5"
                                        id="exampleModalLabel"
                                      >
                                        Good job on rehoming your item
                                      </h1>
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                      ></button>
                                    </div>
                                    <div className="modal-body">
                                      You will no longer see this item on your
                                      account
                                    </div>
                                    <div className="modal-footer">
                                      <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                      >
                                        Close
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => handleDelete(rehomeId)}
                                        data-bs-dismiss="modal"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
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
export default ReHome;
