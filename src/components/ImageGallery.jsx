import React from 'react';
import Slider from "react-slick";
import spree_theme from "../assets/spree_theme.jpg";
import spree_theme_mobile from "../assets/spree_theme_mobile.jpg";
import aftermovie from "../assets/aftermovie.jpg";
import aftermovie_mobile from "../assets/aftermovie_mobile.jpg";
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

export default function SimpleSlider() {
  const redirectToLink = (link) => {
    window.location.href = link;
  };

  var settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    centerMode: true,
    adaptiveHeight: true,
    arrows: false,
    centerPadding: "0px",
    autoplay: true
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <div className="flex-grow"> 
      <Slider {...settings}>
        <div className="h-full hover:cursor-pointer">
          <img
            src={isMobile ? spree_theme_mobile : spree_theme} 
            alt="theme"
            className="ml-auto mr-auto"
            onClick={() => redirectToLink('https://www.instagram.com/bitsspree/reel/C27RG1kiG0h/?hl=en')}
          />
        </div>
        <div className="h-full hover:cursor-pointer">
          <img
            src={isMobile ? aftermovie_mobile : aftermovie} 
            alt="aftermovie"
            className="ml-auto mr-auto"
            onClick={() => redirectToLink('https://www.instagram.com/bitsspree/p/C30I9YrM7Y7/?hl=en')}
          />
        </div>
      </Slider>
    </div>
  );
}
