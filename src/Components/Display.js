import React from 'react';
import {Grid} from 'semantic-ui-react'
import Weather from './PreviewWeather';
import DateTime from './PreviewDateTime';
import Announcement from './PreviewAnnouncements';

class Display extends React.Component {

    render(){
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={5}>
                         <Weather />
                    </Grid.Column>
                    <Grid.Column width={5}></Grid.Column>
                    <Grid.Column width={5}>
                        <DateTime />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={15}>
                        <Announcement title="Fixing Garage" body="Broken door, will be repaired by next month" />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }

}

export default Display;