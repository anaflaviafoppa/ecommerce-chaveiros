import React from 'react';

const Section02 = () => {
  return (
    <section className="section02">
      <div className="container">
        <div className="row">
          <div className="col d-flex align-items-container justify-content-center">
            <div>
              <h3>Choose One</h3>
              <div className="row">
                <div className="col-md col-12-sm">
                  <img src="./images/keychain1.png" alt="Eleven" />
                </div>
                <div className="col-md col-12-sm">
                  <img src="./images/keychain2.png" alt="Eleven" />
                </div>
                <div className="col-md col-12-sm">
                  <img src="./images/keychain3.png" alt="Eleven" />
                </div>
              </div>

              <h3>Only Today!</h3>
              <h2>12 Units Left</h2>
              <button className="btn__shop">
                <h3>GET YOURS NOW</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section02;
