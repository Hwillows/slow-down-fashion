import React, { useState } from "react";

function Wardrobe() {
  const [jacket, getJacketURL] = useState("");
  const [top, getTopURL] = useState("");
  const [trousers, getTrousersURL] = useState("");
  const [shoes, getShoesURL] = useState("");

  getJacketURL(() => {
    // fetch("/wardrobe/item/jacket", {
    //   headers: { "Content-Type": "application/json; charset=utf-8" },
    //   body: jacket, // is this how i retrieve the URL
    // });
  });
  getTopURL(() => {
    // fetch("/wardrobe/item/top", {
    //   headers: { "Content-Type": "application/json; charset=utf-8" },
    //   body: top, // is this how i retrieve the URL
    // });
  });
  getTrousersURL(() => {
    // fetch("/wardrobe/item/trousers", {
    //   headers: { "Content-Type": "application/json; charset=utf-8" },
    //   body: trousers, // is this how i retrieve the URL
    // });
  });
  getShoesURL(() => {
    // fetch("/wardrobe/item/shoes", {
    //   headers: { "Content-Type": "application/json; charset=utf-8" },
    //   body: shoes, // is this how i retrieve the URL
    // });
  });
  return (
    <div>
      {jacket.map((oneJacket, index) => {
        return (
          <div key={index}>
            <img src={oneJacket.clothesImage} alt={oneJacket.id} />
          </div>
        );
      })}
      {/* <div>map jacket url into image src </div> */}
      {/* <div>map top url into image src </div> */}
      {/* <div>map trousers url into image src </div> */}
      {/* <div>map shoes url into image src </div> */}
    </div>
  );
}
export default Wardrobe;
