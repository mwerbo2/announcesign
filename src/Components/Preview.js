import React, {Component} from 'react';
import {Container, Header, Segment, Rail, Grid} from 'semantic-ui-react';
import Announcement from './PreviewAnnouncements';
import DateTime from './PreviewDateTime';
import Weather from './PreviewWeather';


class Preview extends React.Component {
    state = { title: "" };
    
    render(){
        return (
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={5}>
                            {new Date().toDateString()}
                            <DateTime />
                            </Grid.Column>
                            <Grid.Column width={5}>
                            <Header as="h1">Preview</Header>
                            </Grid.Column>
                            <Grid.Column width={5}>
                            {this.state.title}
                            <Weather /> 
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
            
        )
    }
};

export default Preview;