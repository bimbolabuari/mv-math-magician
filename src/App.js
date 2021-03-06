import Calculator from './components/Calculator';
import React from 'react';
import Home from './components/Home';
import Quote from './components/Quote';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';

 const App = () => {
    return (
      <Router>
          <Header/>
          <div className="Section">
          <Switch>
            <Route exact path="/Home">
              <Home />
            </Route>
            <Route path="/Calculator">
              <Calculator />
            </Route>
            <Route path="/Quote">
              <Quote />
            </Route>
          </Switch>
        </div>
        <Footer/>
      </Router>
    );
  }
  export default App;