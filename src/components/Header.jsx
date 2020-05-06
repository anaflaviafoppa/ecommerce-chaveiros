import React from 'react';
import './style.scss';
import { Link } from 'react-scroll';

const Header = (props) => {
  return (
    <header className="header d-flex align-items-center justify-content-center" id="home">
      <div className="container ">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col">
            <div>
              <h3>BrandLogo</h3>
              <h1>get your free </h1>
              <h1>ipsum lorem</h1>
              <h3>
                <span>
                  CHRISTMAS <br /> PROMOTION
                </span>
              </h3>
              <button className="btn__shop">
                <Link
                  activeClass="active"
                  to="section02"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={1000}
                >
                   <h3>GET YOURS NOW</h3>
                </Link>
               
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
