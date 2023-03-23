import React from "react";
import "../Styles/Navbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/images/image_2023-03-21_145232999.png";

const Navbar = () => {
  return (
    <>
      <div className="marucci">
        <div className="search-bar">
          <AiOutlineSearch className="search-bar__icon" />
          <input
            className="search-bar__input"
            type="text"
            placeholder="Search"
          />
        </div>
        <div>
          <GiHamburgerMenu className="hamburger" />
        </div>
        <div className="header__logo">
          <img src={logo} alt="Marucci Sports" />
        </div>
        <div className="header__account-cart">
          <span className="header__account">Account</span>
          <span className="header__account">Cart</span>
          <BsFillCartFill className="header__cart" />
        </div>
      </div>
      <div className="search-bar2">
        <AiOutlineSearch className="search-bar__icon2" />
        <input className="search-bar__input" type="text" placeholder="Search" />
      </div>
      <input111
        className="search-bar__input"
        type="text"
        placeholder="Search"
      />
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <a href="#">Bat</a>
          </li>
          <li className="menu__item">
            <a href="#">Fielding Glove</a>
          </li>
          <li className="menu__item">
            <a href="#">Apparel</a>
          </li>
          <li className="menu__item">
            <a href="#">Batting Gloves</a>
          </li>
          <li className="menu__item">
            <a href="#">Gear</a>
          </li>
          <li className="menu__item">
            <a href="#">Experience</a>
          </li>
          <li className="menu__item">
            <a href="#">Teams</a>
          </li>
          <li className="menu__item">
            <a href="#">Sale</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
