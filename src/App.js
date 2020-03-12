import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Pag2 from './components/Pag2';
import Pag1 from './components/Pag1';

function App() {
  
  return (
      <Router>
      <Nav></Nav>
        <Switch>
          <Route path="/" component={Pag2} exact>
             
          </Route>

          <Route path="/Pag1" component={Pag1}>

          </Route>
        </Switch>
      </Router>
  );
}

export default App;
