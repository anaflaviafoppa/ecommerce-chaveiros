import React from 'react';

/*SOCIAL MEDIA ICONS:*/
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

/*FADE EFFECT:*/
import Fade from 'react-reveal/Fade';

const FooterPage = () => {
  return (
    <footer>
      <Fade bottom>
        <div className="container mt-5 mb-3">
          <div className="row">
            <div className="col-md text-md-left text-sm-center">
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
              <div className="social-media">
                <span>
                  <FiInstagram />
                </span>
                <span>
                  <FaFacebookF />
                </span>
                <span>
                  <FaTwitter />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </footer>
  );
};

export default FooterPage;
