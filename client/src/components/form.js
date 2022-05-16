import React, { useState } from "react";
import "../App.css";

function Form() {
  const [category, setCategory] = useState();

  const [image, setImage] = useState("");

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  const handleImageUpload = (event) => {
    setImage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newItem = {
      clothesCategory: category,
      clothesImage: image,
    };
    fetch("/wardrobe", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(newItem),
    });
    //.then(push newItem into wardrobe array on database)
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col justify-content"></div>
          <div className="col-8">
            <form className="row-cols-1" onSubmit={handleSubmit}>
              <div className="container">
                <div className="row row-cols-2">
                  <label className="col nav justify-content-end">
                    Clothes Category
                  </label>

                  <select
                    name={category}
                    onChange={handleCategoryChange}
                    className="col-3"
                  >
                    <option>Jacket</option>
                    <option>Top</option>
                    <option>Trousers</option>
                    <option>Shoes</option>
                  </select>

                  <label className="col nav justify-content-end">
                    Upload Image
                  </label>

                  <input
                    type="URL"
                    name="imageUpload"
                    onChange={handleImageUpload}
                    className="col-3"
                  ></input>
                </div>
              </div>
              <div className="nav justify-content-center">
                <button className="btn btn-primary button-size">Submit</button>
              </div>
            </form>
          </div>
          <div className="col col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}
export default Form;
