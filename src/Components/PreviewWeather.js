import React from 'react';
import {Container, Header} from 'semantic-ui-react';
import axios from 'axios';

class Weather extends React.Component {
    state = {currentWeather: ""};
    
    componentDidMount(){
      axios.get('/weather')
      .then(res => {
        this.setState({ currentWeather: res.data})
        console.log(this.state.currentWeather);
    })
        .catch(err => {console.log(err)})  
    }
    
    render(){
        return(
            <Container>
                {/* <Header as="h1">{this.state.currentWeather.weather.main}</Header> */}
                {/* <Header as="h1">{this.state.currentWeather.conditions}</Header> */}
            </Container>
        )
    }
}

export default Weather;
 