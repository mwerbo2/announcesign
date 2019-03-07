import React from 'react';
import {Grid, Container} from 'semantic-ui-react'
import Weather from './PreviewWeather';
import DateTime from './PreviewDateTime';
import Announcement from './PreviewAnnouncements';

class Display extends React.Component {

    render(){
        return (
            <Container key={this.props.key}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Weather />
                        </Grid.Column>
                        <Grid.Column width={8}></Grid.Column>
                        <Grid.Column width={4}>
                            <DateTime />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            <Announcement title={this.props.title} body={this.props.body} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }

}

export default Display;