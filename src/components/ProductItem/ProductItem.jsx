import React from 'react';
import productImg from '../../images/product.jpg';
import './ProductItem.css';

function ProductItem(){
  return (<a className='ProductItem'>
  <img className='productImg' src={productImg} />
  <h4 className='productTitle'>Apple MacBook Pro(8GB RAM, 256GB SSD, 33.78cm, Space Grey)</h4>
  <div className='productRating'>
    <div className="star-rating">
        {[...Array(5)].map((star) => {        
          return (         
            <span className="star">&#9733;</span>        
          );
        })}
      </div>
      <p className='productReview'>(1 Reviews)</p>
  </div>
  <h4 className='productPrice'>₹90000</h4>
</a>)
}
export default ProductItem;