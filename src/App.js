import React, { Component } from 'react';
// import './App.css';
import Main from './Components/Main';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Preview from './Components/Preview';
import Display from './Components/Display';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Main} />
            <Route path="/editor" component={Preview} />
            <Route path="/display" component={Display} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
