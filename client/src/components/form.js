import React, { useState } from "react";

function Form() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const imageData = new FormData();
    imageData.append("image", image);
    console.log(imageData);
    fetch("/wardrobe", {
      method: "POST",
      body: imageData,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="imageUpload"
          onChange={handleImageUpload}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Form;
