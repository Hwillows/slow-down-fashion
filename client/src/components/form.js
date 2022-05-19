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
      <form className="col-4" onSubmit={handleSubmit}>
        <div className="container">
          <div className="row row-cols-2">
            <div className="col-4">
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
                <option value="trousers">Trousers</option>
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
                className="btn btn-primary button-size mt-4"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      {/* <form className="" onSubmit={handleSubmit}>
        <div className="container">
          <div className="row row-cols-2 mt-4 ps-0">
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

            <label className="col nav justify-content-end mt-4">
              Upload Image
            </label>

            <input
              type="URL"
              name="imageUpload"
              onChange={handleImageUpload}
              className="col-3 mt-4"
            ></input>
          </div>
        </div>
        <div className="nav justify-content-center">
          <button className="btn btn-primary button-size mt-4 mb-4">
            Submit
          </button>
        </div>
      </form> */}
    </div>
  );
}
export default Form;
