import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Img1 from "../../images/1.jpg"
import Img2 from "../../images/2.jpg"
import Img3 from "../../images/3.jpg"
import Img4 from "../../images/4.jpg"
import Img5 from "../../images/5.jpg"
import Img6 from "../../images/6.jpg"
import Img7 from "../../images/7.jpg"
import Img8 from "../../images/8.jpg"
import Img9 from "../../images/9.jpg"
import Img10 from "../../images/10.jpg"


function Main() {
  const imageObject = [
    Img1,
    Img2,
    {/*
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,*/}
  ];
  return (
    <Carousel
      autoPlay
      dynamicHeight
      emulateTouch
      infiniteLoop
      showThumbs={false}
    >
      {imageObject?.map((imgSrc, imgId) => (
        <div key={imgSrc}>
          <img
            className="carousel-im"
            // height={400}
            // width={700}
            style={{ objectFit: "cover"}}
            src={imgSrc}
          />
        </div>
      ))}
    </Carousel>
  );
}


export default Main;
