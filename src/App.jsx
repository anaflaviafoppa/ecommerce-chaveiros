import React from 'react';
import logo from './logo.svg';
import './App.css';

/*VIEWS*/
import HomePage from './views/Homepage';

/*COMPONENTS*/
import NavBar from './components/Navbar';

/*ROUTERS*/
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
    
       <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch> 
    </div>
  );
}

export default App;
