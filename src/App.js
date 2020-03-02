import React, { Component } from 'react';
import Navigation from './component/Navigation/Navigation';
import Routes from './Routes';
import './App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Routes />
      </div>
    );
  }
}
export default App;

