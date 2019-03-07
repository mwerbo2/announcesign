import React, { Component } from 'react';
// import './App.css';
import Main from './Components/Main';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Preview from './Components/Preview';
import Display from './Components/Display';
import Profile from './Components/Profile/Profile'
import WelcomeMain from './Components/Welcome/WelcomeMain'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Main} />
            <Route exact path="/welcome" component={WelcomeMain} />
            {/* <Route path="/preview" component={Preview} /> */}
            <Route path="/display" component={Display} />
            <Route path="/profile" component={Profile} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
