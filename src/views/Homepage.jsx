import React, { Fragment } from 'react';

/*Components*/
import NavBar from '../components/Navbar';
import Header from '../components/Header';
import Section01 from '../components/Section02';
import FooterPage from '../components/Footer';

import './style.scss';

const Homepage = () => {
  return (
    <div className="HomePage">
     
       <NavBar />
      <Header />
      <Section01 />
      <FooterPage /> 
    </div>
  );
};

export default Homepage;
