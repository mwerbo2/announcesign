import React, { Component } from 'react';
import SplitEditor from './Components/SplitEditor';
import { BrowserRouter as Router, Route, withRouter, Link } from 'react-router-dom';
import {Header, Button, Grid, Segment} from 'semantic-ui-react';
// import {Link, Router, withRouter} from 'react-router-dom'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Display from './Components/Display';
import DisplayEditor from './Components/DisplayEditor';
import Profile from './Components/Profile/Profile'
import WelcomeMain from './Components/Welcome/WelcomeMain'
import Callback from './Callback';
import auth0Client from './Auth/Auth';


class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logOut();
  }
  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  // async componentDidMount(){
  //   if (this.props.location.pathname === '/callback') return;
  //   try {
  //     await auth0Client.silentAuth();
  //     this.forceUpdate();
  //   } catch (err) {
  //     if (err.error !== 'login_required') console.log(err.error);
  //   }
  // }
  render() {
    return (
      <div className="App">
                 {/* <Segment className="MainStyle" style={{marginTop: '3em'}}>
                <Navbar />
                <Grid textAlign='center' style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
                    <Grid.Row verticalAlign='middle' textAlign='center'>
                        <Grid.Column width={16}>
                        <Header style={{ fontSize:'3rem', padding: '0em 0em 1em' }}>Make announcements faster.</Header>
                            <Header as="h1">Get started here</Header>
                            <Button size='massive'><Link to={'/displayeditor'}>Add Announcement</Link></Button>
                            <Header as="h1">Already have a post?</Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column width='4' textAlign='center'>
                            <Button size='massive'><Link to={`/display`}  target="_blank">View Live Post</Link></Button>
                        </Grid.Column>
                        <Grid.Column width='4' textAlign='center'> 
                            <Button size='massive'><Link to={'/profile'}>Edit Post</Link></Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Footer />
            </Segment> */}
      </div>
    );
  }
}

export default App;
