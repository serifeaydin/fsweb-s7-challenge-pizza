import React from 'react'
import './App.css'
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import MainPage from './components/MainPage';


function App() {
  return (
    <div className='App'>
    <Router>
    <Home/>
    <MainPage/>
      
     <Footer/>
      
     </Router>
    </div>
  );
    
  
}            
export default App;
