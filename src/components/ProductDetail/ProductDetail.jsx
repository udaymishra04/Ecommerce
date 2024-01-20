import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import images from "../../ImageArray";
import './ProductDetail.css';
import Carousel from 'react-material-ui-carousel';
import PDetailComp from "./PDetailComp";

function ProductDetail(){
  // For submit review popup
  const [isOpen,setState] = React.useState(false);

  // To Change review container state
  function handleChange(){
    if(!isOpen)
    {
      setState(true);
    }
    else{
      setState(false);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="product-detail-container">
        <div className="product-detail-images">
          <div className="product-detail-main-image">
          <Carousel
          autoPlay={false}
          >
            {
              images.map((image, index) => (
        <img className="CarouselImage" key={index} src={image} alt={`image-${index}`} />
      ))
            }
        </Carousel>
          </div>

        </div>
        <div className="product-details">
        {/* This component will display product title,rating...description */}
            <PDetailComp />
            <button onClick={handleChange} className="product-detail-review-button">
                Submit Review
            </button>
  </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductDetail;