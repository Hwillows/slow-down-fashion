import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "../Header";
import Menu from "../Menu";
import Outfit from "../ReusableComponents/Outfit";

function Jackets() {
  const [jackets, setJackets] = useState([]);
  const [chosenJacket, setChosenJacket] = useState([]);
  const [jacketId, setJacketId] = useState();
  const [clothesCategory, setClothesCategory] = useState("");
  const [clothesImage, setClothesImage] = useState("");
  const [url, setUrl] = useState("");

  const refresh = () => window.location.reload(true);

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

  // const handleJacket = (item) => {
  //   console.log(item, " is here");
  //   if (chosenJacket.length === 0) setChosenJacket([item]);
  //   else setChosenJacket([...chosenJacket, item]);
  //   console.log("all chosen jackets ", chosenJacket);
  // };

  let rehomeItem = {
    clothesCategory: clothesCategory,
    clothesImage: clothesImage,
  };

  const handleRehome = async () => {
    try {
      let token = localStorage.getItem("token");
      const { data } = await axios.post(
        "http://localhost:5005/rehome",
        rehomeItem,
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
  let outfitURL = {
    url: url,
  };
  const handleOutfit = async () => {
    console.log(url);
    try {
      let token = localStorage.getItem("token");
      const { data } = await axios.post(
        "http://localhost:5005/outfit",
        outfitURL,
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
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-8">
            <div className="container">
              <div className="row row-cols-3 gap-3">
                {jackets.map((oneJacket, index) => {
                  return (
                    <div className="col">
                      {/* Created a grid container with 2 rows, 1 column - row 1: image, row 2:buttons */}
                      <div className="container bg-light d-flex justify-content-center w-auto">
                        <div className="row row-cols-1">
                          <div className="col">
                            <div key={index}>
                              <div className="d-flex flex-column">
                                <img
                                  className="image-size rounded mt-3 pb-0"
                                  src={oneJacket.clothesImage}
                                  alt={oneJacket.id}
                                  // onClick={() => handleJacket(oneJacket)}
                                  // chosenJacket={chosenJacket}
                                  onClick={() => setUrl(oneJacket.clothesImage)}
                                  onDoubleClick={() => {
                                    handleOutfit();
                                    refresh();
                                  }}
                                />
                              </div>
                              <div className="col">
                                {/* rehome and delete buttons that go with each image */}
                                <div className="d-flex justify-content-center bg-light mx-4 mt-0">
                                  <div className="mt-0 mb-2">
                                    {/* Button to trigger rehome modal */}
                                    <button
                                      className="bi bi-house-heart bg-transparent border border-0"
                                      onClick={() => {
                                        setClothesCategory(
                                          oneJacket.clothesCategory
                                        );
                                        setClothesImage(oneJacket.clothesImage);
                                        setJacketId(oneJacket.id);
                                      }}
                                      type="button"
                                      data-bs-toggle="modal"
                                      data-bs-target="#rehome"
                                    ></button>
                                    {/* <!-- Modal --> */}
                                    <div
                                      className="modal fade"
                                      id="rehome"
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
                                              Rehome
                                            </h1>
                                            <button
                                              type="button"
                                              className="btn-close"
                                              data-bs-dismiss="modal"
                                              aria-label="Close"
                                            ></button>
                                          </div>
                                          <div className="modal-body">
                                            Clicking Rehome moves this image
                                            from your wardrobe to your Rehome
                                            page.
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
                                                handleRehome();
                                                handleDelete(jacketId);
                                              }}
                                              data-bs-dismiss="modal"
                                            >
                                              Rehome
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>{" "}
                                  <div className="mt-0 mb-2">
                                    {/* Button to trigger model */}
                                    <button
                                      type="button"
                                      className="bi bi-trash3 bg-transparent border border-0"
                                      data-bs-toggle="modal"
                                      data-bs-target="#exampleModal"
                                      onClick={() => setJacketId(oneJacket.id)}
                                    ></button>
                                    {/* <!-- Modal --> */}
                                    <div
                                      className="modal fade"
                                      id="exampleModal"
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
                                              Permanently remove from your
                                              wardrobe
                                            </h1>
                                            <button
                                              type="button"
                                              className="btn-close"
                                              data-bs-dismiss="modal"
                                              aria-label="Close"
                                            ></button>
                                          </div>
                                          <div className="modal-body">
                                            You will no longer see this item in
                                            your wardrobe
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
                                              onClick={() =>
                                                handleDelete(jacketId)
                                              }
                                              // onClick={() => console.log(jacketId)}
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
          <div class="col-sm-4">
            <Outfit />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jackets;
