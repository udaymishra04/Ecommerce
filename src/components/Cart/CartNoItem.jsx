import React from "react";
import NoItemImg from "../../images/emptycart.png";

// If the cart is empty then this page will be rendered

function CartNoItem(){
  return(
    <div className="emptyCart-container">
      <div className="emptyCart-content">
        <img src={NoItemImg} alt="empty cart icon"></img>
        <h1>No Product in Your Cart</h1>
        <button className="emptyCart-button" name="view-products">View Products</button>
      </div>
    </div>
  )
}

export default CartNoItem;