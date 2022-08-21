import React from "react";
import Header from "./Header";
import Menu from "./Menu";

function Wardrobe({ chosenJacket }) {
  // when an image is clicked, the object from my table should be added to an array
  return (
    <div>
      <Header />
      <Menu />
      <h1>My Wardrobe</h1>
    </div>
  );
}
export default Wardrobe;
