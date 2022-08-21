import React, { useState, useEffect } from "react";

function chosenOutfit({
  chosenJacket,
  chosenTop,
  chosenBottom,
  chosenAllInOne,
  chosenShoe,
}) {
  const [chosenOutfit, setChosenOutfit] = useState([]);
  useEffect(() => {
    handleOutfit();
  }, []);

  const handleOutfit = (outfit) => {
    if (chosenOutfit.length === 0) setChosenOutfit([outfit]);
    else
      setChosenOutfit([
        ...chosenOutfit,
        ...chosenJacket,
        ...chosenTop,
        ...chosenBottom,
        ...chosenAllInOne,
        ...chosenShoe,
      ]);

    const handleRemoveItem = (event) => {
      console.log(chosenOutfit, " is my original outfit array");

      for (let i = 0; i < chosenOutfit.length; i++) {
        if (chosenOutfit[i] === event) {
          chosenOutfit.splice(i, 1);
          setChosenOutfit([...chosenOutfit]);
        }
      }
      console.log(chosenOutfit, " is the new array");
    };

    return (
      <div>
        <div className="container">
          <div className=" justify-content-center">
            <div className="col">
              {chosenOutfit.map((oneOutfit, index) => {
                return (
                  <div key={index}>
                    <img
                      className="chosenOutfit-size rounded"
                      src={oneOutfit.clothesImage}
                      alt={oneOutfit.id}
                      onClick={() => handleRemoveItem(oneOutfit)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  };
}
export default chosenOutfit;
