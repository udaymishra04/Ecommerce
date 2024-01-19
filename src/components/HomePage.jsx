import React from "react";
import HeroSection from "./HeroSection/HeroSection.jsx";
import ProductItem from "./ProductItem/ProductItem";

function HomePage(){
  return (    
  <div>
    <HeroSection />
    <div className='featuredProduct'>
      <h2>Featured Products</h2>
      <hr/>
      <div className='productItemList'>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </div>
  </div>)
}

export default HomePage;