import React from 'react';
import {Container, Menu, Image} from 'semantic-ui-react';


const Navbar = () => {
    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item position="left" as='a' header>
            <Image size='mini' src='/vector-megaphone-man-shouting-8.png' style={{ marginRight: '1.5em' }} />
            Announce
          </Menu.Item>
          <Menu.Item as='a' href='/display'>Live Posting</Menu.Item>
          <Menu.Item as='a' href='/profile'>Profile</Menu.Item>
          <Menu.Item as='a'>Logout</Menu.Item>
        </Container>
      </Menu>
    )
}

export default Navbar;