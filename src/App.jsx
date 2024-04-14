import React from 'react'
import './App.css'
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import OrderReceivedPage from './pages/OrderReceivedPage';

const history = createBrowserHistory();

const App = () => {
  const handlePageChange = (activePage) => {
    history.push(activePage);
  }

  return (
    <div className='App'>
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <HomePage onChange={handlePageChange} />
          </Route>
          <Route path="/OrderPage" exact>
            <OrderPage onChange={handlePageChange} />
          </Route>
          <Route path="/Order-received" exact>
            <OrderReceivedPage onChange={handlePageChange} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;