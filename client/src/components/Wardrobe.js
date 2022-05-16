import React, { useState, useEffect } from "react";

function Wardrobe() {
  const [jackets, getJackets] = useState([]);
  // const [top, getTop] = useState([]);
  // const [trousers, getTrousers] = useState([]);
  // const [shoes, getShoes] = useState([]);

  useEffect(() => {
    fetch("/wardrobe/item/jacket", {
      // headers: { "Content-Type": "application/json; charset=utf-8" },
    })
      .then((res) => res.json())
      .then((results) => {
        console.log(results);
        getJackets(results);
      })
      .catch((err) => console.log(err));
  }, []);

  // getTop(() => {
  // fetch("/wardrobe/item/top", {
  //   headers: { "Content-Type": "application/json; charset=utf-8" },
  //   body: top,
  // });
  // });
  // getTrousers(() => {
  // fetch("/wardrobe/item/trousers", {
  //   headers: { "Content-Type": "application/json; charset=utf-8" },
  //   body: trousers
  // });
  // });
  // getShoes(() => {
  // fetch("/wardrobe/item/shoes", {
  //   headers: { "Content-Type": "application/json; charset=utf-8" },
  //   body: shoes
  // });
  // });
  return (
    <div>
      <h1>My Wardrobe</h1>
      {jackets.map((oneJacket, index) => {
        return (
          <div key={index}>
            {oneJacket.clothesImage}
            <img src={oneJacket.clothesImage} alt={oneJacket.id} />
          </div>
        );
      })}
    </div>
  );
}
export default Wardrobe;
