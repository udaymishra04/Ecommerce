import React from "react";
import "./Checkout.css";

const images = require.context("../../images/checkoutImg", true);
const imageList = images.keys().map(image => images(image));

function CheckoutDetail()
{
  return (
    <div className="checkout-detail-container">
      <div className="checkout-detail-timeline">
        <img className="checkout-detail-shipping" src={imageList[0]} alt="timeline images"></img>
        <div className="checkout-line"></div>
        <img className="checkout-detail-confirm" src={imageList[1]} alt="timeline images"></img>
        <div className="checkout-line"></div>
        <img className="checkout-detail-bank" src={imageList[2]} alt="timeline images"></img>
      </div>
      <div className="checkout-detail-content">
        <h1 className="checkout-detail-heading">Shipping Details</h1>
        <hr className="checkout-detail-hr"></hr>
        <div className="checkout-detail-form">
          <div className="checkout-detail address">
            <img src={imageList[3]} alt="address-icon"></img>
            <input className="checkout-detail-address" name="address" placeholder="Address"></input>
          </div>
          <div className="checkout-detail city">
            <img src={imageList[4]} alt="city-icon"></img>
            <input className="checkout-detail-city" name="city" placeholder="City"></input>
          </div>
          <div className="checkout-detail pincode">
            <img src={imageList[3]} alt="pincode-icon"></img>
            <input className="checkout-detail-pincode" name="pincode" placeholder="Pin Code"></input>
          </div>
          <div className="checkout-detail phone">
            <img src={imageList[3]} alt="phone-icon"></img>
            <input className="checkout-detail-phone" name="phone" placeholder="Phone"></input>
          </div>
          <div className="checkout-detail country">
            <img src={imageList[3]} alt="country-icon"></img>
            <input className="checkout-detail-country" name="country" placeholder="Country"></input>
          </div>
          <button className="checkout-detail-button">Continue</button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutDetail;