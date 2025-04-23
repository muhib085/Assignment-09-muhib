import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        dynamicHeight={true}
      >
        <div className="h-96">
          <img
            className="h-full"
            src="https://i.postimg.cc/x84Cw4pV/slider-01.jpg"
          />
        </div>
        <div className="h-96">
          <img
            className="h-full"
            src="https://i.postimg.cc/1XfRrKmC/slider-02.jpg"
          />
        </div>
        <div className="h-96">
          <img
            className="h-full"
            src="https://i.postimg.cc/zDcGX479/slider-03.jpg"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
