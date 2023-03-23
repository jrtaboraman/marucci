import React from "react";
import "../Styles/Hero.css";
import logo from "../assets/images/image_2023-03-21_145232999.png";
import volition from "../assets/images/image_2023-03-21_144830068.png";
import gloves from "../assets/images/maruccigloves.jpg";
import bg from "../assets/images/camouflage_blue.png";

const Hero = () => {
  return (
    <>
      <div className="hero__container">
        <div className="component-container">
          <div className="image-container">
            <img src={logo} alt="Image 1" className="first-image" />
            <img src={volition} alt="Image 2" className="first-image" />

            <div className="image-box">
              <p className="image-text">
                Marucci Sports is the latest partner to join
                <br /> Volition America's curated coalition of <br /> premium
                lifestyle brands, building towards <br />
                unity in our country and inspiring the
                <br /> power of choice.
              </p>
              <p className="image-text2">
                Marucci Sports is the latest partner
                <br /> to join Volition America's curated
                <br /> coalition of premium lifestyle brands,
                <br /> building towards unity in our country <br />
                and inspiring the power of choice.
              </p>
            </div>
          </div>
          <div className="large-image-container">
            <img src={gloves} alt="Image 3" className="large-image" />
          </div>
          <div className="marucci__volition">
            <img src={logo} alt="Image 1" className="first-image2" />
            <img src={volition} alt="Image 2" className="first-image2" />
          </div>
        </div>
        <div className="my-component-container">
          <div className="my-component-image"></div>
          <div className="my-component-content">
            <h2 className="my-component-title">PARTNER ROOTED IN PURPOSE</h2>
            <p className="my-component-description">
              Volition America is a movement changing the way we connect with
              America, through innovative apparel and accessories. Volition
              America is a collaboration of labels and a collective expression
              of love for America that transcends culture, gender, race, age and
              political beliefs. Empowering people to live through positive
              choices is the driving force of the company and its partnerships.
              Volition America is both a symbol and a catalyst for unity when
              you see the VA logo, you are part of a movement that cares. This
              alliance of brands and the consumers who engage with them are
              making a conscious choice to express the power to celebrate
              America and build strong communities.
            </p>
            <button className="my-component-button">Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
