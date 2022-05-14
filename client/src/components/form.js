import res from "express/lib/response";
import React, { useState } from "react";
import "../App.css";

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
<<<<<<< HEAD
    });
||||||| merged common ancestors
    })
    .then(() => )
=======
    })
      .then(() => res.json())
      .catch((error) => console.log(error));
>>>>>>> aad1586d981fef83d4899bff1b7ecfe7445c3368
  };

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col justify-content"></div>
          <div class="col-8">
            <form class="row-cols-1" onSubmit={handleSubmit}>
              <div class="container">
                <div class="row row-cols-2">
                  <label class="col nav justify-content-end">
                    Clothes Category
                  </label>

                  <select
                    name={clothesCategory}
                    onChange={handleCategoryChange}
                    class="col-3"
                  >
                    <option>Jacket</option>
                    <option>Top</option>
                    <option>Trousers</option>
                    <option>Shoes</option>
                  </select>

                  <label class="col nav justify-content-end">
                    Upload Image
                  </label>

                  <input
                    type="URL"
                    name="imageUpload"
                    onChange={handleImageUpload}
                    class="col-3"
                  ></input>
                </div>
              </div>
              <div class="nav justify-content-center">
                <button class="btn btn-primary button-size">Submit</button>
              </div>
            </form>
          </div>
          <div class="col col-lg-2"></div>
        </div>
      </div>
    </div>
  );
}
export default Form;
