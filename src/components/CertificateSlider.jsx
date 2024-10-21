import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Navbar } from './Navbar/Navbar';

import c1 from "../certificates/c1.png";
import c2 from "../certificates/c2.png";
import c3 from "../certificates/c3.png";
import c4 from "../certificates/c4.png";
import c5 from "../certificates/c5.png";
import c6 from "../certificates/c6.png";
import c7 from "../certificates/c7.png";
import c8 from "../certificates/c8.png";
import c9 from "../certificates/c9.png";
import c10 from "../certificates/c10.png";
import "./CertificateSlider.css"
import Footer from './Footer/Footer';
const certificates = [
  c1,
  c2,
  c3,
  c4,
  c5,
  c6,
  c7,
  c8,
  c9,
  c10,

];

const CertificateSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Navbar/>
      <div className="slider-container">
        <Slider {...settings}>
          {certificates.map((certificate, index) => (
            <div key={index}>
              <img src={certificate} alt={`Certificate ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
      <Footer/>
    </>
  );
};

export default CertificateSlider;
