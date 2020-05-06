import React from 'react';
import './App.css';

/*VIEWS*/
import HomePage from './views/Homepage';
import NotFoundPage from './views/NotFoundPage';



/*ROUTERS*/
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
