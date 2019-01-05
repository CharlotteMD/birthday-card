import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './components/header';
import Footer from './components/footer';
import Routes from './components/routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Routes />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
