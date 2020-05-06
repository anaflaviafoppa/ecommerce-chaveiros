import React, { useEffect, useState } from 'react';

/*Components*/
import NavBar from '../components/Navbar/NavBar';
import Header from '../components/Header';
import Section01 from '../components/Section02';
import FooterPage from '../components/Footer';
import Spinner from '../components/Spinner';

import './style.scss';

const Homepage = () => {
  const [loading, setloading] = useState(true);
  const [navBarPosition, setnavBarPosition] = useState({
    prevScrollpos: 600,
    visible: true,
  });

  
  useEffect(() => {
    //SET THE SPINNER
    setTimeout(() => {
      setloading(false);
    }, 3000);

    //SET SCROLL NAV BAR
    window.addEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    const currentScrollPos = window.pageYOffset;
    const visible = navBarPosition.prevScrollpos > currentScrollPos;

    setnavBarPosition({
      prevScrollpos: currentScrollPos,
      visible,
    });
  }

  return loading ? (
    <div className="SpinnerPage">
      <Spinner />
    </div>
  ) : (
    <div className="HomePage">
      <NavBar onHidden={navBarPosition.visible}  onNotFoundPage={false}/>
      <Header />
      <Section01 />
      <FooterPage />
    </div>
  );
};

export default Homepage;
