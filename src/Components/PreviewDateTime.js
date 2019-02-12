import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';

class DateTime extends React.Component {

    render(){
        return(
            <Container>
                <Header as="h2">{new Date()}</Header>
            </Container>
        )
    }
};

export default DateTime;