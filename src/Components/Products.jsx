import React from "react";
import "../Styles/Products.scss";
import baseballbat from "../assets/images/MVE3AP5-VOL.png";

const Products = () => {
  return (
    <div className="product-component-container">
      <div className="product-div">
        <div className="product-image1"></div>
        <div className="product-info">
          <h3 className="product-name">M-71 PRO MODEL</h3>
          <p className="product-price">$159.99</p>
          <button className="product-button">Shop Now</button>
        </div>
      </div>
      <div className="product-div">
        <div className="product-image2"></div>
        <div className="product-info">
          <h3 className="product-name">M-71 PRO MODEL</h3>
          <p className="product-price">$159.99</p>
          <button className="product-button">Shop Now</button>
        </div>
      </div>
      <div className="product-div">
        <div className="product-image3"></div>
        <div className="product-info">
          <h3 className="product-name">M-71 PRO MODEL</h3>
          <p className="product-price">$159.99</p>
          <button className="product-button">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Products;
