import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const name = {
  firstName: 'Masaharu',
  lastName:'Tahara '
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">こんにちは {name.lastName + name.firstName}さん。</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
