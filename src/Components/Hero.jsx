import React from "react";
import "../Styles/Hero.css";
import logo from "../assets/images/image_2023-03-21_145232999.png";
import volition from "../assets/images/image_2023-03-21_144830068.png";
import gloves from "../assets/images/maruccigloves.jpg";

const Hero = () => {
  return (
    <div className="component-container">
      <div className="image-container">
        <img src={logo} alt="Image 1" className="first-image" />
        <img src={volition} alt="Image 2" />
        <div className="image-box">
          <p className="image-text">
            Marucci Sports is the latest partner to join
            <br /> Volition America's curated coalition of <br /> premium
            lifestyle brands, building towards <br />
            unity in our country and inspiring the
            <br /> power of choice.
          </p>
        </div>
      </div>
      <div className="large-image-container">
        <img src={gloves} alt="Image 3" className="large-image" />
      </div>
    </div>
  );
};

export default Hero;
