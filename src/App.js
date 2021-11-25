import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Assesment from "./components/assesment/Assesment";

import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <div className='App'>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/assesment'>
          <Assesment />
        </Route>

        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </Router>
    <Footer />
  </div>
);

export default App;
