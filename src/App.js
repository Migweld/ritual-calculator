import React, { Component } from 'react';
import logo from './wiz.png';
import './App.css';
import rituals from './rituals';

class App extends Component {
  state = {
    realm: null,
  };

  changeRealm = realm => {
    this.setState({
      realm: realm.target.name,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ritual Calculator</h1>
        </header>
        <p className="App-intro">
          <h2>Choose a realm</h2>
          {Object.keys(rituals).map(realm => (
            <button onClick={this.changeRealm} name={realm}>
              {realm.charAt(0).toUpperCase() + realm.slice(1)}
            </button>
          ))}
        </p>
        {this.state.realm !== null ? (
          <div>
            <h2>
              Choose a {this.state.realm.charAt(0).toUpperCase() + this.state.realm.slice(1)} ritual
            </h2>
            <select>
              {rituals[this.state.realm].map(ritual => <option>{ritual.Name}</option>)}
            </select>
          </div>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default App;
