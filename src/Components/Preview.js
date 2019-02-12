import React, {Component} from 'react';
import {Container, Header} from 'semantic-ui-react';
import Announcement from './PreviewAnnouncements';
import DateTime from './PreviewDateTime';
import Weather from './PreviewWeather';


class Preview extends React.Component {
    state = { title: "" };
    
    render(){
        return (
            <Container>
                <Container>
                    <Header as="h1">Announcements</Header>
                    <Weather />
                    <DateTime />
                </Container>
            </Container>

        )
    }
};

export default Preview;