import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';

const Hello = (props) => {
  return(
    <div>
      <h2>Hello!{props.name}</h2>
      <p>functionalコンポーネントを作成した</p>
    </div>
  )
}

Hello.propTypes = {
  name: PropTypes.string
}

class App extends Component {
  constructor(props){
		super(props)
		this.state = {name:"Haidoro"}
	}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Hello!{this.state.name}</h1>
          <p>functionalコンポーネントを作成した</p>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello name="Tahara"/>
      </div>
    );
  }
}

export default App;
