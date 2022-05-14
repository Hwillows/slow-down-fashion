import res from "express/lib/response";
import React, { useState } from "react";

function Form() {
  const [image, setImage] = useState("");

  const [clothesCategory, setCategory] = useState();

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const imageData = new FormData();
    // imageData.append("image", image);
    // console.log(imageData);
    fetch("/wardrobe", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(clothesCategory),
      // imageData,
    })
      .then(() => res.json())
      .catch((error) => console.log(error));
  };

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  return (
    <div>
      <div class="container">
        <div class="row justify-content-md-centre">
          <div class="col col-lg-2"></div>
          <div class="col-md-auto">
            <form class="row-cols-1" onSubmit={handleSubmit}>
              <div class="container">
                <div class="row row-cols-2">
                  <label class="col">Clothes Category</label>

                  <select
                    name={clothesCategory}
                    onChange={handleCategoryChange}
                    class="col"
                  >
                    <option>Jacket</option>
                    <option>Top</option>
                    <option>Trousers</option>
                    <option>Shoes</option>
                  </select>

                  <label class="col">Upload Image</label>

                  <input
                    type="URL"
                    name="imageUpload"
                    onChange={handleImageUpload}
                    class="col"
                  ></input>
                </div>
              </div>
              <button class="btn btn-primary btn-sm">Submit</button>
            </form>
          </div>
          <div class="col col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}
export default Form;
