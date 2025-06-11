import React from 'react';
import Slider from 'react-slick';

const Carousel = ({ children }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;