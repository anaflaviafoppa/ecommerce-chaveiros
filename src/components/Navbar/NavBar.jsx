import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { Link as LinkRoute } from 'react-router-dom';

import './style.scss';

const NavBar = (props) => {
  return (
    <Navbar
      expand="lg"
      className={
        props.onHidden ? 'navbar--hidden' : 'NavBar sticky-top navbar-showup shadow-sm  rounded'
      }
    >
      {props.onNotFoundPage ? (
        <LinkRoute to="/">
          <h3>BRANDLOGO</h3>
        </LinkRoute>
      ) : (
        <Link
          className="ml-3 NavBar__Brand"
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
          duration={1000}
        >
          <h3>BRANDLOGO</h3>
        </Link>
      )}
    </Navbar>
  );
};

export default NavBar;
