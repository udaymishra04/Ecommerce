import React from "react";
import ProductObj from "../../ProductOjb";
import Rating from '@mui/material/Rating';

function PDetailComp(){
  const [totalCartItem,setItem] = React.useState(1);
  function handleChange(event){
    const name = event.target.name;
    if(name === "increment"){
      setItem(totalCartItem+1);
    }
    else if(totalCartItem > 1){
      setItem(totalCartItem-1);
    }
  }

  return (
    <div className="product-detail-component">
    <h1 className="product-detail-title">{ProductObj.title}</h1>
    <hr></hr>
    <div className="product-detail-rating-review">
    <Rating 
      className="product-detail-rating"
      name="simple-controlled"
      value={4}
      readOnly={ProductObj.rating}
    />
    <p>({ProductObj.totalReview} Review)</p>
  </div>
  <hr></hr>
  <span className="product-detail-price">₹{ProductObj.Price}</span>
  <div className="product-detail-cart">
    <button onClick={handleChange} name="decrement" className="product-cart-decrement-button">-</button>
    <span className="product-cart-total">{totalCartItem}</span>
    <button onClick={handleChange} name="increment" className="product-cart-increment-button">+</button>
    <button className="product-addtocart-button">Add to Cart</button>
  </div>
  <hr></hr>
  <p className="product-detail-stock">Status: <span style={{color: ProductObj.Instock?"green":"red", fontWeight: "700"}}>{ProductObj.Instock ? "Instock":"OutofStock"}</span></p>
  <hr></hr>
  <div className="product-detail-description">
    <h3>Description:</h3>
    <p>{ProductObj.Description}</p>
  </div>
  {/* <button className="product-detail-review-button">Submit Review</button> */}
</div>
  )
}

export default PDetailComp;