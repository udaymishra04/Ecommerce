import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Contact.css';

function Contact(){
  return (
    <div>
      <Navbar />
      <div className="contactContainer">
        <form className="contactForm">
          <h1 className="heading">CONTACT US</h1>
          <input className="contactInput" type="text" name="name" placeholder="Your Name"></input>
          <input className="contactInput" type="text" name="email" placeholder="Your Email"></input>
          <textarea className="contactTextarea" style={{width: "600px", height: "100px"}} name="message" placeholder="Your Message..."></textarea>
          <button>Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Contact;