import React from 'react';
import { FaBehance, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

const FooterPage = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Customer care</h1>

            <h2>Contact Us</h2>
            <h2>FAQ</h2>
            <h2>Product Information</h2>
            <h2>Product Instructions</h2>
          </div>
          <div className="col">
            <h1>Our Company</h1>
            <h2>About Us</h2>
            <h2>Corporate site</h2>
          </div>

          <div className="col">
            <h1>Follow us</h1>
            <FiInstagram />
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaBehance />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
