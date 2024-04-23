
import React from 'react'
import './App.css'

import { Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import SuccessPage from './pages/SuccessPage';




const App = () => {
  

  return (
    <div className='App'>
     
        <Switch>
          <Route path="/" exact>
            <HomePage  />
          </Route>
          <Route path="/OrderPage" exact>
            <OrderPage  />
          </Route>
          <Route path="/Order-received" exact>
            <SuccessPage  />
          </Route>
        </Switch>
     
    </div>
  );
}

export default App;
