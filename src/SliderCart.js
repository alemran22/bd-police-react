import "./Slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { Component } from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ position:"absolute", top:"50%", right: "0", fontSize: "40px", background: "transparent" , display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ position:"absolute", top:"50%", left: "0", zIndex: "20", display: "block", background: "transparent" }}
      onClick={onClick}
    />
  );
}

function SliderCart() {
  const settings = {
    dots: false,
    fade:true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="main-container">
      <Slider {...settings} className="slider-container">
          {/* slider 1 */}
          <div className="slider">
            <img
              src="https://www.police.gov.bd/storage/upload/gallery/QBYZ7c6P75XVQ8u2MuhxFKCTXWYqzt9GhBR4nsyU.jpg"
              alt=""
            />
            <p className="">
              মহামান্য রাষ্ট্রপতির সাথে নবাগত আইজিপি মহোদয় সাক্ষাৎ করেন।
            </p>
          </div>
          {/* slider 2 */}
          <div className="slider">
            <img
              src="https://www.police.gov.bd/storage/upload/gallery/kdXeIE3xgKUnP4b4JzJb0PVDSwhPLIit3j3ernoR.jpg"
              alt=""
            />
            <p className="">নবাগত আইজিপি মহোদয়ের প্রেস বিজ্ঞপ্তি।</p>
          </div>
          {/* slider 3 */}
          <div className="slider">
            <img
              src="https://www.police.gov.bd/storage/upload/gallery/mJEp3QuzRWFVarbWomqwi70IZRqBmm0rGMcYN2MF.jpg"
              alt=""
            />
            <p className="">
            বাংলাদেশে জাতিসংঘের আবাসিক সমন্বয়কারী Ms. Gwyn Lewis পুলিশ হেডকোয়ার্টার্সে আইজিপি'র সাথে সৌজন্য সাক্ষাৎ করেন</p>
          </div>
          {/* slider 4 */}
          <div className="slider">
            <img
              src="https://www.police.gov.bd/storage/upload/gallery/saHpU1pGAUCC901w8LmHE0LQjgWvUM0cVYZZBcoZ.jpg"
              alt=""
            />
            <p className="">
            বাংলাদেশে চীন দূতাবাসের Minister Counsellor (Deputy Chief of Mission) Mr. Liu Yuyin পুলিশ হেডকোয়ার্টার্সে আইজিপি'র সাথে সৌজন্য সাক্ষাৎ করেন</p>
          </div>
        </Slider>
      </div>
  );
}

export default SliderCart;
