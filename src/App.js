import React, { Component } from 'react';
import SplitEditor from './Components/SplitEditor';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Display from './Components/Display';
import DisplayEditor from './Components/DisplayEditor';
import Profile from './Components/Profile/Profile'
import WelcomeMain from './Components/Welcome/WelcomeMain'
import Callback from './Callback';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={WelcomeMain} />
            <Route exact path='/callback' component={Callback}/>
            {/* <Route exact path="/edit" component={SplitEditor} /> */}
            <Route path="/display" component={Display} />
            <Route path="/displayeditor" component={DisplayEditor} />
            <Route path="/profile" component={Profile} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
