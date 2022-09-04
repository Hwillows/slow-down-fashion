import React from "react";
import "../App.css";
import Hannah from "./HannahPic.jpg";

function Homepage() {
  return (
    <div>
      <div className="homepage-background"></div>
      <div className="container">
        <div className="row row-cols-2">
          <div className="col-7">
            <div className="container ">
              <div className="row row-cols-1">
                <div className="col">
                  <h2 className="mt-3 mb-3">
                    Finding a new love for your existing wardrobe
                  </h2>
                </div>
                <div className="col">
                  <p>
                    Slow Down fashion aims to reduce fast fashion. Here you can
                    visualise your clothes in a new combination, giving you a
                    whole new outfit from your existing wardrobe. You can help
                    to keep your wardrobe organised by marking items you want to
                    re-home. Slow Down Fashion also includes a platform to share
                    and find more sustainable fashion brands, to help make your
                    next purchase a more planet and people friendly one.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-5 ">
            <div className="d-flex justify-content-end text-center">
              <div>
                <img
                  src={Hannah}
                  alt="Hannah Willows"
                  className="img-thumbnail w-25 rounded-5 mx-4 mt-4 "
                />
                <p className="mx-5">
                  Created by <br></br>Hannah Willows
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
