import React from 'react';
import HeroBg from '../../images/cover.jfif';
import './HeroSection.css';

function HeroSection(){
  function scrolldiv() {
    var elem = document.getElementById("featuredProduct");
    elem.scrollIntoView({behavior: "smooth"});
  }
  return (
    <div className='HeroBg-Container'>
    <img className='HeroBg' src={HeroBg} />
    <div className='HeroBg-text'>
    <h2>Welcome to Ecommerce</h2>
    <h1>FIND AMAZING PRODUCTS BELOW</h1>
    <button onClick={scrolldiv} className='HeroBg-button'>Scroll</button>
    </div>
  </div>
  )
}
export default HeroSection;