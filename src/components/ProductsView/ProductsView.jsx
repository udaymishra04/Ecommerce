import React from "react";
import Navbar from "../Navbar/Navbar";
import Slider from "react-slider";
import './ProductsView.css';
import ProductItem from "../ProductItem/ProductItem";
import Footer from "../Footer/Footer";

function ProductView(){
  const [values,setValues] = React.useState({
    min: 0,
    max: 1000
  })
  function HandleChange(value,index){
    console.log(value)
    console.log(index)
    setValues(prevVal => {
      return {
        min: value[0],
        max: value[1]
      }
      })
  }

  return (
    <div>
      {/* <Navbar /> */}
      <h1 className="product-view-heading">Products</h1>
      <hr className="product-view-hr"></hr>
      <div className="container">
        <div className="product-filtering">
        <h3>Price Range</h3>
          <div className="product-slider">
          <Slider 
              className="customSlider"
              thumbClassName="customSlider-thumb"
              trackClassName="customSlider-track"
              markClassName="customSlider-mark"
              onChange={HandleChange}
              defaultValue={[values.min, values.max]}
              ariaLabel={['Lower thumb', 'Upper thumb']}
              ariaValuetext={state => `Thumb value ${state.valueNow}`}
              renderTrack={(props,state) => <div {...props} />}
              renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
              pearling
              marks={250}
              minDistance={250}
              min={0}
              max={1000}
          />
          </div>
          <p className="priceRangePara">₹{values.min} - ₹{values.max}</p>
          <h3>Categories</h3>
          <div className="product-categories">
            <a>Laptop</a>
            <a>Footwear</a>
            <a>Bottom</a>
            <a>Tops</a>
            <a>Attire</a>
            <a>Camera</a>
            <a>Smartphone</a>
          </div>
          <h3>Ratings</h3>
          <div className="product-rating">
            {/* <input type="checkbox" name="rating-checkbox"></input> */}
            <label className="product-rating-checkbox">
            <input type="checkbox" className="product-rating-input"></input>
            <div className="product-rating-label">4★ &amp; above</div>
            </label>
            <label className="product-rating-checkbox">
            <input type="checkbox" className="product-rating-input"></input>
            <div className="product-rating-label">3★ &amp; above</div>
            </label>
          </div>
        </div>
        <div className="product-cards">
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
      {/* <Footer /> */}
    </div>
  )
}

export default ProductView;