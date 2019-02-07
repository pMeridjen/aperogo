import React, { Component } from 'react';
import Home from './views/Home';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
       
          <Home/>

        </header>
      </div>
    );
  }
}

export default App;
