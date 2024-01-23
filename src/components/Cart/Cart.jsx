import React from "react";
import CartProductItem from "./CartProductItem";
import "./Cart.css";
import CartNoItem from "./CartNoItem";

function Cart(){
  // This is the main Cart page which will exported to homepage or app.jsx

  // This state will keep track if the cart is empty or not
  const [cartEmpty,setCart] = React.useState(true);

  // If cart is empty then emptycart page will be rendered else cart page will be renedered
  return cartEmpty ? <CartNoItem /> : (
    <div className="cart-container">
      <div className="cart-heading-tab">
        <h3>Product</h3>
        <h3>Quantity</h3>
        <h3 className="cart-heading-subtotal">Subtotal</h3>
      </div>
      <CartProductItem />
      <div className="cart-total-amount-outer">
        <div className="cart-total-amount">
          <hr></hr>
          <div>
            <h4>Gross Total</h4>
            <h4>₹90000</h4>
          </div>
          <button className="cart-checkout-button">Check Out</button>
        </div>
      </div>
    </div>
  )
}

export default Cart;