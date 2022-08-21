import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div>
      <body className="bg-white">
        <div className="container">
          <div className="row">
            <div className="col justify-content-md-center ">
              <Link style={{ textDecoration: "none" }} to="/">
                <h1 className="heading-font mt-3 text-dark">
                  {" "}
                  Slow Down Fashion
                </h1>
              </Link>
            </div>

            <div className="col nav justify-content-end">
              <Link to="/sustainableclothes">
                <button className="btn btn-secondary my-3">
                  Sustainable Clothing
                </button>
              </Link>
              <Link to="/login">
                <button className="bi bi-person-circle bg-white border border-0 my-4 mx-2 "></button>
              </Link>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
export default Header;
