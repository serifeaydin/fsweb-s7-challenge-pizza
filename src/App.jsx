import React from 'react'
import './App.css'

import {BrowserRouter, Route,Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import SuccessPage from './pages/SuccessPage';
import { useEffect } from 'react';



function App() {
  useEffect(()=>{},[]);

  

  return (
    <div className='App'>
    

<Switch>
  <Route path="/" exact ><HomePage/></Route>
  <Route path="/OrderPage"  exact ><OrderPage/></Route>
  <Route path="/SuccessPage"  exact ><SuccessPage/></Route>
</Switch>

 
 
    </div>
  );
    
  
}            
export default App;
