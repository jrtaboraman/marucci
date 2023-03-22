import React from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="marucci">
        <div>
          <input />
        </div>
        <div>
          <input />
        </div>
        <div>
          <input />
        </div>
      </div>
      <div className="navbar">
        <a href="/">Bats</a>
        <a href="/">Fielding Gloves</a>
        <a href="/">Apparel</a>
        <a href="/">Batting Gloves</a>
        <a href="/">Gear</a>
        <a href="/">Experience</a>
        <a href="/">Teams</a>
        <a href="/">Sale</a>
      </div>
    </>
  );
};

export default Navbar;
