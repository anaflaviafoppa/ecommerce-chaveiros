import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Section02 = () => {
  return (
    <section className="section02  pb-5">
    <Fade bottom>
      <div className="container">
        <div className="row">
          <div className="col d-flex align-items-container justify-content-center">
            <div>
              <h3 id="choose">Choose One:</h3>
              <div className="row">
                <div className="col-md col-12-sm">
                  <Link
                    to={{
                      pathname: '/single',
                      img: './images/keychain1.png',
                    }}
                  >
                    <img src="./images/keychain1.png" alt="Eleven" />
                  </Link>
                </div>
                <div className="col-md col-12-sm">
                  
                    <Link to="/single" params={{ img: './images/keychain2.png' }}>
                      <img src="./images/keychain2.png" alt="Eleven" />
                    </Link>
                  
                </div>
                <div className="col-md col-12-sm">
                  <img src="./images/keychain3.png" alt="Eleven" />
                </div>
              </div>

              <h3>Only Today!</h3>
              <h2>12 Units Left</h2>
              <button className="btn__shop__second">
                <h3>GET YOURS NOW</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
      </Fade>
    </section>
  );
};

export default Section02;
