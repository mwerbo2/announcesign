import React from 'react';
import {Grid, Container, Header} from 'semantic-ui-react'
// import { Editor } from '@tinymce/tinymce-react';
import Weather from './Announcement/PreviewWeather';
import DateTime from './Announcement/PreviewDateTime';
import Announcement from './Announcement/PreviewAnnouncements';
import axios from 'axios';

class Display extends React.Component {
    constructor(props){
        super(props);

        this.state = { 
            fullAnnouncement: [],
            title: "true",
            body: "true",
            content: ""
        };
        
        this.handleEditorChange = this.handleEditorChange.bind(this);
        // this.handleEditChange = this.handleEditChange.bind(this);
    }
    //RAISED TO PARENTS
    // handleEditorChange(content) {
    //     this.props.onEditorChange(content)
    // }

    handleSubmit = (e) => {
       
    }

    handleEditorChange(content) {
        this.setState({ content });
        console.log(this.state.content)
      }

    componentDidMount(){
        axios.get('/announcements')
        .then(announcement =>{
            this.setState({
                fullAnnouncement: announcement.data,
                title: announcement.title,
                body: announcement.body
            })
            // console.log(this.state.fullAnnouncement);
        })
        .catch(error => console.log(error))
    }



    render(){
        return (
            <Container key={this.props.key} style={{padding: '3em 0em 0em' }}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Weather />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header textAlign='center' as="h1">Announcements</Header>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <DateTime />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={16}>
                                {this.state.fullAnnouncement.map(announce => {
                                return <Announcement onEditorChange={this.handleEditorChange}  key={announce.id} title={announce.announcement_title} body={announce.announcement_body} />
                                })}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }

}

export default Display;