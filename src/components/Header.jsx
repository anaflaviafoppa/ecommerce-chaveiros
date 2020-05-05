import React from 'react';
import './style.scss';

const Header = (props) => {
  return (
    <header className="header d-flex align-items-center justify-content-center">
      <div className="container ">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col">
            <div>
              <h3>Brands Logo</h3>
              <h1>get your free </h1>
              <h1>ipsum lorem</h1>
              <h3>
                <span>
                  CHRISTMAS <br /> PROMOTION
                </span>
              </h3>
              <button className="btn__shop">
                <h3>GET YOURS NOW</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
