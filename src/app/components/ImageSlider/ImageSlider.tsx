import React from "react";
import Image from "next/image";
import "./ImageSlider.css";
import wordPress from "../../assets/WordPress-logotype-alternative.png";
import shopify from "../../assets/shopify.png";

import woo from "../../assets/WooCommerce_logo.svg";
const images = [
  wordPress,
  woo,
  shopify,

  wordPress,
  woo,
  shopify,
  wordPress,
  woo,
  shopify,
];

const ImageSlider = () => {
  return (
    <div className="ImageSlider border-[#171717] h-20 mx-auto relative text-center imageSlider-container">
      <div>Our Partners</div>
      <div>
        <div className="ImageSlider-blur-left"></div>
        <div className="ImageSlider-blur-right"></div>
        <div className="ImageSlider-content w-[200%] h-20 flex items-center justify-around absolute left-0 gap-4 animate">
          {images.map((i, index) => (
            <div key={index} className="flex justify-center items-center img-container ">
              <Image src={i} alt="" className=" banner-logo" />
            </div>
          ))}
          {images.map((i, index) => (
            <div key={index} className="flex justify-center items-center img-container">
              <Image src={i} alt="" className="banner-logo" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
