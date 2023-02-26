import axios from "axios";
import React, { useState, useEffect } from "react";

function Outfit() {
  const [outfit, setOutfit] = useState([]);
  const refresh = () => window.location.reload(true);

  useEffect(() => {
    getOutfit();
  }, []);

  const getOutfit = async () => {
    try {
      let token = localStorage.getItem("token");
      const { data } = await axios("http://localhost:5005/outfit", {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setOutfit(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const handleDelete = (event) => {
    fetch(`http://localhost:5005/outfit/${event}`, {
      method: "DELETE",
    });
    setOutfit([...outfit]);
  };

  return (
    <div>
      <h1>Outfit</h1>
      {outfit.map((oneItem, index) => {
        return (
          <div key={index}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <img
                    className="image-size rounded mt-3 pb-0"
                    src={oneItem.url}
                    onClick={() => handleDelete(oneItem.id) & refresh()}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Outfit;
