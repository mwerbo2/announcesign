import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';

class Weather extends React.Component {
    state = {currentWeather: "Windy and a chance of Ronaks"};
    
    render(){
        return(
            <Container>
                <p>{this.state.currentWeather}</p>
            </Container>
        )
    }
}

export default Weather;
