import React from 'react';
import { FaBehance, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

const FooterPage = () => {
  return (
    <footer>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md mb-3 text-md-left text-sm-center">
            <h2>Customer care</h2>
            <p>Contact Us</p>
            <p>FAQ</p>
            <p>Product Information</p>
            <p>Product Instructions</p>
          </div>
          <div className="col-md mb-3 text-md-left text-sm-center">
            <h2>Our Company</h2>
            <p>About Us</p>
            <p>Corporate site</p>
          </div>
          <div className="col-md text-md-right text-sm-center">
            <h2>Follow us</h2>
            <div className="social-media" >
              <div className="d-flex align-items-center justify-content-between">
                <FiInstagram />
                <FaFacebookF />
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <FaTwitter />
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
