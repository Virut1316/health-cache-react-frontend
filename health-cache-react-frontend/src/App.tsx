import React, { Component } from 'react';
import 'reset-css';
import NavbarScroller from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Claims from './components/claims/Claims';

const navigation = {
  brand: { name: 'HealthCache', to: '/' },
  links: [
    { name: 'Profile', to: '/Profile' },
    { name: 'File Claim', to: '/FileClaim' },
    { name: 'Discussion Board', to: '/Discussion' }
  
  ]
};

export default class App extends Component {
  public render() {
    const { brand, links } = navigation;

    return (
      <div className="App">
        <Router>
        <NavbarScroller brand={brand} links={links} />
        <Routes>
          <Route  path="/Profile" ></Route>
          <Route path="/FileClaim" element={<Claims></Claims>}></Route>
          <Route path="/Discussion" ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}