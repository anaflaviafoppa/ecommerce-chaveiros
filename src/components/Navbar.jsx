import React, { Fragment } from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { Link, animateScroll as scroll } from "react-scroll";


const NavBar = (props) => {
  console.log('props.onHidden',props.onHidden);

  return (
    <Navbar expand="lg" className={props.onHidden ? "navbar--hidden" : "NavBar sticky-top navbar-showup shadow-sm  rounded"}>
      <Link
                className="ml-3 NavBar__Brand"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
                duration= {1000}
            >
              <h3>BRANDLOGO</h3>
            </Link>
    </Navbar>
  );
};

export default NavBar;
