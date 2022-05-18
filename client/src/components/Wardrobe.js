import React, { useState, useEffect } from "react";

function Wardrobe() {
  const [jackets, getJackets] = useState([
    {
      id: 4,
      clothesCategory: "jacket",
      clothesImage:
        "https://media.wired.com/photos/606ce52941bf976945513469/191:100/w_2086,h_1092,c_limit/Gear-Cloudburst-Jacket---Mandarin-Front-square-grey-back.jpg",
    },
    {
      id: 5,
      clothesCategory: "jacket",
      clothesImage:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c1ddc8b2-0f26-4074-a85d-916518ee2425/esc-bonded-jacket-3cJJ3W.png",
    },
    {
      id: 7,
      clothesCategory: "jacket",
      clothesImage:
        "https://www.fjallraven.com/49444d/globalassets/catalogs/fjallraven/f8/f816/f81698/f232/skogso_jacket_m_81698-232_a_main_fjr.jpg?width=680&height=680&mode=BoxPad&bgcolor=fff&quality=80",
    },
  ]);
  // const [top, getTop] = useState([]);
  // const [trousers, getTrousers] = useState([]);
  // const [shoes, getShoes] = useState([]);

  useEffect(() => {
    fetch("/wardrobe/item/jacket", {
      // headers: { "Content-Type": "application/json; charset=utf-8" },
    })
      .then((res) => {
        console.log(res);
        res.json();
      })
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
      <div>
        {jackets.map((oneJacket, index) => {
          return (
            <div key={index}>
              {oneJacket.clothesImage}
              <img src={oneJacket.clothesImage} alt={oneJacket.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Wardrobe;
