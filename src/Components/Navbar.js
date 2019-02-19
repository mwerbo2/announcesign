import React from 'react';
import {Container, Menu, Image, Dropdown} from 'semantic-ui-react';


const Navbar = () => {
    return (
    <Menu fixed='top' inverted>
        <Container>
          <Menu.Item position="right" as='a' header>
            <Image size='mini' src='/vector-megaphone-man-shouting-8.png' style={{ marginRight: '1.5em' }} />
            Announce
          </Menu.Item>
          <Menu.Item as='a'>Home</Menu.Item>
  
          <Dropdown item simple text='Dropdown'>
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Header Item</Dropdown.Header>
              <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>Submenu</span>
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
    )
}

export default Navbar;