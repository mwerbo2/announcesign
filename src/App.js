import React, { Component } from 'react';
// import './App.css';
import Main from './Components/Main';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Preview from './Components/Preview';
import Display from './Components/Display';
import Profile from './Components/Profile/Profile'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Main} />
            <Route path="/editor" component={Preview} />
            <Route path="/display" component={Display} />
            <Route path="/profile" component={Profile} />           
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
