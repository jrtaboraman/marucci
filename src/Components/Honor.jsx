import React from "react";
import "../Styles/Honor.css";
import foldofhonor from "../assets/images/image_2023-03-21_145555978.png";
import honorthegame from "../assets/images/image_2023-03-21_145617682.png";

const Honor = () => {
  return (
    <>
      <div className="honor-component-container">
        <div className="honor__div">
          <h1 className="honor__title">
            Honor their sacrifice. <br /> Educate their Legacy
          </h1>
          <p className="honor__description">
            By donating part of our profits to empower the families of our
            nation's fallen heroes through educational scholarships, Volition
            America helps ensure no family is left behind on the field of battle
          </p>
          <img src={foldofhonor} className="honor__image" />
          <p className="honor__description">
            Since 2007, the Folds of Honor Foundation has carried forth this
            singular, noble mission. It has provided over 29,000 education
            scholarships to spouses and children of fallen and disabled
            service-members and raised over $120 million to-date.
          </p>
          <button className="my-component-button">FIND OUT MORE</button>
        </div>
      </div>
      <div className="honor2-component-container">
        <div className="honor2__div">
          <p className="honor2__description">
            We owe it to the game to challenge convention and leverage
            technology to power a new level of performance. We know what is
            takes because we've stood where you stand
          </p>
          <p className="honor2__description">
            Embrace the game, show your style, add your flare, put in hours,
            stay dedicated and most importantly
          </p>

          <img src={honorthegame} className="honor2__image" />
          <p className="honor2__description"></p>
          <button className="my-component-button2">LEARN MORE</button>
        </div>
      </div>
      <div className="honor3-component-container">
        <h3 className="honor3__title">STAY UP TO DATE ON EVERYTHING MARUCCI</h3>
        <div className="honor3__div">
          <input
            className="my-component-input"
            placeholder="Enter Your Email"
          />
          <button className="my-component-button3">SUBSCRIBE</button>
        </div>
      </div>
    </>
  );
};

export default Honor;
