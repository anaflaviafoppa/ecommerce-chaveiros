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
  const [navBarPosition, setnavBarPosition] = useState({
    prevScrollpos: 600,
    visible: true,
  });

  //SET THE SPINNER
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 5000);

    window.addEventListener('scroll', handleScroll);
  }, []);

  function handleScroll() {
    const currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos);
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
      <NavBar onHidden={navBarPosition.visible} />
      <Header />
      <Section01 />
      <FooterPage />
    </div>
  );
};

export default Homepage;
