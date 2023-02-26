import axios from "axios";
import React, { useState, useEffect } from "react";

function RehomeButton({ oneItem }) {
  const [clothesCategory, setClothesCategory] = useState("");
  const [clothesImage, setClothesImage] = useState("");
  const [itemId, setItemId] = useState("");

  const setStates = (e) => {
    // e.preventDefault();
    setClothesCategory(e.clothesCategory);
    setClothesImage(e.clothesImage);
    setItemId(e.id);
    console.log(clothesCategory, clothesImage, itemId);
  };
  useEffect(() => {
    console.log(
      "clothesCategory state: " +
        clothesCategory +
        " clothesImage state: " +
        clothesImage +
        " Item Id is: " +
        itemId
    );
  });

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
  const handleDelete = (event) => {
    fetch(`http://localhost:5005/wardrobe/${event}`, {
      method: "DELETE",
    });
    window.location.reload();
  };

  return (
    <div>
      {/* Button to trigger rehome model */}
      <button
        className="bi bi-house-heart bg-transparent border border-0"
        // onClick={() => {
        //   setStates(oneItem);
        // }}
        onClick={() => console.log(oneItem)}
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
              <h1 className="modal-title fs-5" id="exampleModalLabel">
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
              Clicking Rehome moves this image from your wardrobe to your Rehome
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
                  // handleRehome();
                  // handleDelete(itemId);
                  setStates(oneItem);
                }}
                data-bs-dismiss="modal"
              >
                Rehome
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RehomeButton;
