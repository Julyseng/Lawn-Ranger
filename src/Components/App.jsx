import React, { Component } from 'react';
import Nav from './Nav'
import '../App.css';

import Footer from './Footer'

class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Nav />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;


