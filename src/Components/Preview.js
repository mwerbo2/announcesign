import React, {Component} from 'react';
import {Container, Header, Segment, Rail, Grid} from 'semantic-ui-react';
import Announcement from './PreviewAnnouncements';

import DateTime from './PreviewDateTime';
import Weather from './PreviewWeather';
import { grey } from 'ansi-colors';

const PreviewStyle = {
    backgroundColor: grey
};

class Preview extends React.Component {
    state = { 
        title: "Plumbers",
        body: "This is sample text. Ronak is a weirdo"
    }
    
    render(){
        return (
            <Segment className="PreviewStyle">
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <DateTime />
                        </Grid.Column>
                        <Grid.Column width={4}></Grid.Column>
                        <Grid.Column width={6}>
                            <Weather /> 
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Announcement title={this.state.title} body={this.state.body}/>
                <Announcement title="Cleaning of hallway" body="Cleaning will begin this tuesday"/>
            </Segment>
        )
    }
};

export default Preview;