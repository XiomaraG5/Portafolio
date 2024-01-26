"use client"
import React, { useEffect, useState } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  console.log(images);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    console.log("entró1");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    console.log("entró2");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="custom-carousel">
      <img className="d-block w-100" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <button className="custom-nav prev" type="button" onClick={prevSlide}>
        &lt; 
      </button>
      <button className="custom-nav next" type="button" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  )
};

export default Carousel;
