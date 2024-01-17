import React from 'react';
import AppstoreImg from '../../images/Appstore.png';
import PlaystoreImg from '../../images/playstore.png';
import logo from '../../images/shopify.svg';
import './Footer.css';

function Footer(){
  return (<div className='footer'>
  <div className='footer-left'>
    <h4>DOWNLOAD OUR APP</h4>
    <a><img className='AppstoreImg' src={AppstoreImg} /></a>
    <a><img className='PlaystoreImg' src={PlaystoreImg} /></a>
  </div>
  <div className='footer-center'>
    <img className='footer-logo' src={logo}></img>
    <p className='footer-copyright'>Copyright 2024 &copy; Uday&Priyansh</p>
  </div>
  <div className='footer-right'>
    <h3>FOLLOW US</h3>
    <a><p>Instagram</p></a>
    <a><p>Facebook</p></a>
    <a><p>Youtube</p></a>
  </div>
</div>)
}

export default Footer;