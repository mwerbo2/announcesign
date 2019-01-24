import React, { Component } from 'react';
import './Components/Wysiwyg';
import logo from './logo.svg';
import './App.css';
import Wysiwyg from './Components/Wysiwyg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Wysiwyg />
      </div>
    );
  }
}

export default App;
