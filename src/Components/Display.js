import React from 'react';
import {Grid, Container} from 'semantic-ui-react'
import Weather from './PreviewWeather';
import DateTime from './PreviewDateTime';
import Announcement from './PreviewAnnouncements';
import axios from 'axios';

class Display extends React.Component {
state = { 
    fullAnnouncement: [],
    title: "",
    body: ""
};

componentDidMount(){
    axios.get('/announcements')
    .then(announcement =>{
        this.setState({
            fullAnnouncement: announcement.data,
            title: announcement.title,
            body: announcement.body
        })
        console.log(this.state.fullAnnouncement);
    })
    .catch(error => console.log(error))
}



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
                        {this.state.fullAnnouncement.map(announce => {
                            console.log(announce);
                            return <Announcement key={announce.id} title={announce.announcement_title} body={announce.announcement_body} />
                        })}
                            {/* <Announcement title={this.props.title} body={this.props.body} /> */}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }

}

export default Display;