import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BusinessCarousel.css'


const BusinessCarousel = ({ images }) => {
  const settings = {
    // dots: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images?.map((image, index) => (
        <div key={index} className="carousel-slide">
          <img src={image} height="426px" alt={`Slide ${index + 1}`} />
          <div className="gradient-overlay" />
        </div>
      ))}
    </Slider>
  );
};

export default BusinessCarousel;