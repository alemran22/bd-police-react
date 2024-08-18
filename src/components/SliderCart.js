import "./SliderCart.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import SliderContentData from "../sliderData";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
function SliderCart() {
  // for slider arrow
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  //
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="main-container">
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
        className="slider-container"
      >
        {/* slider */}
        {SliderContentData.map((item) => (
          <div key={item.id} className="slider">
            <img src={item.img} alt="" />
            <p className="">{item.title}</p>
          </div>
        ))}
      </Slider>
      {/* arrows */}
      <div className="arrows">
        <button className="button" onClick={previous}>
          <MdArrowBackIos/>
        </button>
        <button className="button" onClick={next}>
          <MdArrowForwardIos/>
        </button>
      </div>
    </div>
  );
}

export default SliderCart;
