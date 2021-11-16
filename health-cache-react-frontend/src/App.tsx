import React, { Component } from 'react';
import 'reset-css';
import NavbarScroller from './components/Navbar'

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
        <NavbarScroller brand={brand} links={links} />
        
        
      </div>
    );
  }
}