import React from 'react';
import {Container, Header} from 'semantic-ui-react';
import axios from 'axios';

class Weather extends React.Component {
    state = {currentWeather: "Sunny and warm, 65˚"};
    
    componentDidMount(){
      axios.get('/weather')
      .then(res => {
        this.setState({ currentWeather: res.weather})})
        .catch(err => {console.log(err);)  
    }
    
    render(){
        return(
            <Container>
                <Header as="h1">{this.state.currentWeather.temp}</Header>
                <Header as="h1">{this.state.currentWeather.conditions}</Header>
            </Container>
        )
    }
}

export default Weather;
 