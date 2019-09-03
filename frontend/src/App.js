import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Variants from './pages/Variants'
import Header from './components/Header';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Variants />
      </div>
    );
  }
}

export default App;
