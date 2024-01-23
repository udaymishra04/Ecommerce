import React from "react";
import ProductObj from "../DataObj/ProductOjb";
import ProductImg from "../../images/productimg/camera1.jpg";

// this file is an individual product on cart 

function CartProductItem(){
  const [totalItem,setItem] = React.useState(1);
  function handleChange(event){
    const name = event.target.name;
    if(name === "increment"){
      setItem(totalItem+1);
    }
    else if(totalItem > 1){
      setItem(totalItem-1);
    }
  }

  return (
    <div className="cart-product-item">
        <div className="cart-product">
          <img src={ProductImg} className="cart-product-img"></img>
          <div className="cart-product-name">
            <h4>{ProductObj.title}</h4>
            <p>Price: ₹{ProductObj.Price}</p>
            <a className="cart-product-remove">Remove</a>
          </div>
        </div>
        <div className="cart-quantity">
          <button onClick={handleChange} className="cart-quantity-button" name="decrement">-</button>
          <span className="cart-quantity-item">{totalItem}</span>
          <button onClick={handleChange} className="cart-quantity-button" name="increment">+</button>
        </div>
        <div className="cart-product-subtotal">
          <span className="cart-product-price">
          ₹{ProductObj.Price}
          </span>
        </div>
      </div>
  )
}

export default CartProductItem;