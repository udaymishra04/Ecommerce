import React from "react";
import logo from '../../images/shopify.svg';
import searchIcon from '../../images/search.svg';
import shopBag from '../../images/shopBag.svg';
import profilePic from '../../images/profilePic.svg';
import './Navbar.css';

function Navbar(){
  return <div className="nav-bar">
  <img className='logo' src={logo} width="70" height="70"/>
  <div className='navigations'>
    <a>Home</a>
    <a>Product</a>
    <a>Contact</a>
    <a>About</a>
  </div>
  <div className='profile-navigation'>
    <a><img className='searchIcon' src={searchIcon} width="30" height='30'></img></a>
    <a><img className='shopBag' src={shopBag} width="25" height='25'></img></a>
    <a><img className='profilePic' src={profilePic} width="27" height='27'></img></a>
  </div>
  </div>
}
export default Navbar;