import React, { Fragment, useState, useEffect } from 'react';
import NavBar from '../components/Navbar';

const NotFoundPage = () => {
  const [loading, setloading] = useState(true);
  const [navBarPosition, setnavBarPosition] = useState({
    visible: false,
  });

  useEffect(() => {
    //SET THE SPINNER
    setTimeout(() => {
      setloading(false);
    }, 3000);

    
  }, []);


  return (
    <Fragment>
      <NavBar onHidden={navBarPosition.visible} onNotFoundPage={true} />
      <h1> Page not found </h1>
    </Fragment>
  );
};

export default NotFoundPage;
