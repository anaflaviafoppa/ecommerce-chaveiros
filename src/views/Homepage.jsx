import React, { useEffect, useState } from 'react';

/*Components*/
import NavBar from '../components/Navbar';
import Header from '../components/Header';
import Section01 from '../components/Section02';
import FooterPage from '../components/Footer';
import Spinner from '../components/Spinner';

import './style.scss';

const Homepage = () => {
  const [loading, setloading] = useState(true);

  //SET THE SPINNER 
  useEffect(() => {
    
    setTimeout(() => {
      setloading(false);
    }, 3000);
    
  });

  return (
    loading ? <Spinner /> : (
    <div className="HomePage">
      <NavBar />
      <Header />
      <Section01 />
      <FooterPage />
    </div>)
  );
};

export default Homepage;
