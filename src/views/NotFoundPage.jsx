import React, {  useState, useEffect } from 'react';
import NavBar from '../components/Navbar/NavBar';

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
    <div className="">
      <NavBar onHidden={navBarPosition.visible} onNotFoundPage={true} />

      <div className="pageNotFound d-flex align-items-center justify-content-center">
        <h1> 404 - Ops.. I did again! </h1>
      </div>
    </div>
  );
};

export default NotFoundPage;
