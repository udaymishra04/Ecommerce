import React from "react";
import Footer from './Footer/Footer.jsx';
import Navbar from "./Navbar/Navbar.jsx";
import HeroSection from "./HeroSection/HeroSection.jsx";
import ProductItem from "./ProductItem/ProductItem";

function HomePage(){
  return (    
  <div>
    <Navbar />
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
    <Footer />
  </div>)
}

export default HomePage;