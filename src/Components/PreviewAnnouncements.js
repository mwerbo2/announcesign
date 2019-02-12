import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';

class Announcement extends React.Component {
    render() {
        return (
            <Container>
                <Header as="h2">{this.props.title}</Header>
            </Container>
        );
    }
};

export default Announcement;