import React, { useState } from "react";
import "../App.css";

function Form() {
  const [category, setCategory] = useState("jacket");

  const [image, setImage] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    console.log(event.target.value);
  };

  const handleImageUpload = (event) => {
    setImage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newItem = { clothesCategory: category, clothesImage: image };

    fetch("http://localhost:5005/wardrobe", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(newItem),
    }).then(() => {
      console.log("new item added");
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-md-center mt-4 mb-4">
          <div className="d-flex flex-row">
            <form className="col-4" onSubmit={handleSubmit}>
              <div className="container">
                <div className="row row-cols-2">
                  <div className="col-5">
                    <label className="d-flex justify-content-start mt-4 ms-0">
                      Clothes Category
                    </label>
                  </div>
                  <div className="col">
                    <select
                      value={category}
                      onChange={handleCategoryChange}
                      className="mt-4"
                    >
                      <option value="jacket">Jacket</option>
                      <option value="top">Top</option>
                      <option value="bottoms">Bottoms</option>
                      <option value="allInOne">All In One</option>
                      <option value="shoes">Shoes</option>
                    </select>
                  </div>
                  <div className="col-4">
                    <label className="d-flex justify-content-start mt-4">
                      Upload Image
                    </label>
                  </div>
                  <div className="col">
                    <input
                      type="URL"
                      name="imageUpload"
                      // onChange={(e) => setImage(e.target.value)}
                      onChange={handleImageUpload}
                      className="mt-4"
                    ></input>
                  </div>
                  <div className="d-flex justify-content-start">
                    <button
                      type="submit"
                      className="btn btn-dark button-size mt-4"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Form;
