import React from "react";
import "../Styles/Products.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css";
import "swiper/css/pagination";

const Products = () => {
  return (
    <>
      <div className="swiper__container">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <SwiperSlide>
            <div className="product-div">
              <div className="product-image4"></div>
              <div className="product-info">
                <h3 className="product-name">M-71 PRO MODEL</h3>
                <p className="product-price">$159.99</p>
                <button className="product-button">Shop Now</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product-div">
              <div className="product-image5"></div>
              <div className="product-info">
                <h3 className="product-name">M-71 PRO MODEL</h3>
                <p className="product-price">$159.99</p>
                <button className="product-button">Shop Now</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="product-div">
              <div className="product-image6"></div>
              <div className="product-info">
                <h3 className="product-name">M-71 PRO MODEL</h3>
                <p className="product-price">$159.99</p>
                <button className="product-button">Shop Now</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
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
    </>
  );
};

export default Products;
