import React from 'react';
import {Container, Menu, Image} from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';
import auth0Client from '../Auth';
import { checkPropTypes } from 'prop-types';

const Navbar = props => {

  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
    };

    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item position="left" as='a' header>
            <Image size='mini' src='/vector-megaphone-man-shouting-8.png' style={{ marginRight: '1.5em' }} />
            Announce
          </Menu.Item>
          <Menu.Item as='a' href='/display' target='_blank'>Live Posting</Menu.Item>
          <Menu.Item as='a' href='/profile'>Profile</Menu.Item>
          {
            !auth0Client.isAuthenticated() &&
            <Menu.Item onClick={auth0Client.signIn}>Log in</Menu.Item>
          }
          {
            auth0Client.isAuthenticated() &&
            <Menu.Item as="a" onClick={signOut}>Log out</Menu.Item>
          }
        </Container>
      </Menu>
    )
  }

export default withRouter(Navbar);