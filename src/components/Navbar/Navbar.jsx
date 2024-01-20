import React from "react";
import logo from '../../images/shopify.svg';
import searchIcon from '../../images/search.svg';
import shopBag from '../../images/shopBag.svg';
import profilePic from '../../images/profilePic.svg';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './Navbar.css';
import HomePage from "../HomePage";
import Contact from "../Contact/Contact";
import ProductView from "../ProductsView/ProductsView";

function Navbar() {
    return (
        <BrowserRouter forceRefresh={true}>
            <div className="nav-bar">
                <img className='logo' alt="Logo" src={logo} width="70" height="70" />
                <div className='navigations'>
                    <Link to="/">
                        <h2>Home</h2>
                    </Link>
                    <Link to="product">
                        <h2>Product</h2>
                    </Link>
                    <Link to="contact">
                        <h2>Contact</h2>
                    </Link>
                    <Link to="about">
                        <h2>About</h2>
                    </Link>
                </div>
                <div className='profile-navigation'>
                        <div className="searchBox">
                    <Link to="search">
                            <a><img className='searchIcon' src={searchIcon} width="30" height='30'></img></a>
                    </Link>
                            <input type="text" name="search" placeholder="Search Your Product here"></input>
                        </div>
                    <Link to="cart">
                        <img className='shopBag' src={shopBag} alt="Shop Bag" width="25" height='25' />
                    </Link>
                    <Link to="profile">
                        <img className='profilePic' src={profilePic} alt="Profile Pic" width="27" height='27' />
                    </Link>
                </div>
            </div>

            <Routes>
                <Route exact path="/" element={<HomePage/>} />
                <Route exact path="/product" element={<ProductView />} />
                <Route exact path="/contact" element={<Contact/>} />
                <Route exact path="/about" element={"About Section"} />
                <Route exact path="/search" element={"Search Box"} />
                <Route exact path="/cart" element={"Cart Bag Page"} />
                <Route exact path="/profile" element={"Profile page"} />
            </Routes>
        </BrowserRouter>
    )
}
export default Navbar;