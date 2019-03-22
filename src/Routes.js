import React, { Component } from 'react';
import SplitEditor from './Components/SplitEditor';
import {Router, Route } from 'react-router-dom';
import Display from './Components/Display';
import DisplayEditor from './Components/DisplayEditor';
import Profile from './Components/Profile/Profile'
import WelcomeMain from './Components/Welcome/WelcomeMain'
import Callback from './Callback';
import auth0Client from './Auth';


class Routes extends React.Component {
    render(){
        return (
            <div>
                {/* <Route exact path="/" component={WelcomeMain} />
                <Route exact path='/callback' component={Callback}/>
                <Route path="/display" component={Display} />
                <Route path="/displayeditor" component={DisplayEditor} />
                <Route path="/profile" component={Profile} /> */}
            </div>
        )
    }
}

export default Routes;