import React from "react";
import "../Styles/Footer.css";
import { ImInstagram, ImTwitter, ImFacebook2 } from "react-icons/im";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="column">
        <h3 className="title">SHOP</h3>
        <ul className="list">
          <li>Wood Bats</li>
          <li>Metal Bats</li>
          <li>CATX</li>
          <li>CAT9</li>
          <li>Fielding Gloves</li>
          <li>Fastpitch</li>
          <li>Fastpitch Bats</li>
          <li>Apparel</li>
          <li>Protective Gear</li>
          <li>Batting Gloves</li>
          <li>Sunglasses</li>
          <li>Baseballs</li>
          <li>Bags</li>
          <li>Accessories</li>
          <li>Sale</li>
          <li>New Arrivals</li>
          <li>Gift Certificates</li>
        </ul>
      </div>
      <div className="column">
        <h3 className="title">EXPERIENCE</h3>
        <ul className="list">
          <li>Organizations</li>
          <li>Marucci World Series</li>
          <li>College Partners</li>
          <li>The Rundown</li>
          <li>Marucci Cares</li>
          <li>About Marucci</li>
          <li>Videos</li>
          <li>Honor the Game</li>
        </ul>
      </div>
      <div className="column">
        <h3 className="title">SOCIAL</h3>
        <ul className="list">
          <li>
            <ImInstagram /> @MarucciSports
          </li>
          <li>
            {" "}
            <ImTwitter /> @MarucciSports
          </li>
          <li>
            {" "}
            <ImFacebook2 /> Facebook
          </li>
          <li>
            <AiOutlineYoutube /> YouTube
          </li>
        </ul>
      </div>
      <div className="column">
        <h3 className="title">COMMUNITY</h3>
        <ul className="list">
          <li>Marucci Clubhouse</li>
          <li>Locker Room</li>
          <li>Custom Jerseys</li>
        </ul>
      </div>
      <div className="column">
        <h3 className="title">SERVICE</h3>
        <ul className="list">
          <li>Find a Store</li>
          <li>Sitemap</li>
          <li>FAQ</li>
          <li>Return Policy</li>
          <li>Warranty</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
