import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div>
      {" "}
      {/* List button on page */}
      <button
        className="bi bi-list bg-white mt-4"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
      ></button>{" "}
      {/* Pop out menu */}
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header">
          <h4 className="offcanvas-title" id="offcanvasScrollingLabel">
            Hello User
          </h4>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <Link to="/wardrobe">
            <h5>My Wardrobe</h5>
          </Link>
          <Link to="/jackets">
            <p>Jackets</p>
          </Link>
          <Link to="/tops">
            <p>Tops</p>
          </Link>
          <Link to="/bottoms">
            <p>Bottoms</p>
          </Link>
          <Link to="/allinones">
            <p>All In Ones</p>
          </Link>
          <Link to="/shoes">
            <p>Shoes</p>
          </Link>
          <Link to="/form">
            <h5 className="mt-5">Add to Wardrobe</h5>
          </Link>
          <Link to="/rehome">
            <h5 className="mt-5">To Rehome</h5>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
