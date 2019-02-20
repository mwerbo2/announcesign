import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';

class Weather extends React.Component {
    state = {currentWeather: "Sunny and warm, 65˚"};
    
    render(){
        return(
            <Container>
                <Header as="h1">{this.state.currentWeather}</Header>
            </Container>
        )
    }
}

export default Weather;
 