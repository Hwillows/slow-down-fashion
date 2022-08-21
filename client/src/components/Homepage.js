import React from "react";
import "../App.css";

function Homepage() {
  return (
    <div>
      <div className="homepage-background"></div>
      <div className="container text-center">
        <div className="row row-cols-1">
          <div className="col">
            <h2>About</h2>
          </div>
          <div className="col">
            <p>
              Slow Down Fashion aims to reduce fast fashion. You can visualise a
              brand new outfit from your existing wardrobe. You can mark which
              clothes you want to re-home. You can share and find new
              sustainable clothing brands.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homepage;
