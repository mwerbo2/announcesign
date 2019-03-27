import React from 'react';
import {Grid, Container, Header} from 'semantic-ui-react'
import axios from 'axios';
// import { Editor } from '@tinymce/tinymce-react';
// import Weather from './Announcement/PreviewWeather';
// import DateTime from './Announcement/PreviewDateTime';
import Announcement from './Announcement';
import AddButton from '../AddButton';
import AnnouncementPlaceholder from './AnnouncementPlaceholder';
import auth0Client from '../../Auth';



class Announcements extends React.Component {
    constructor(props){
        super(props);

        this.state = { 
            fullAnnouncement: [],
            title: "true",
            body: "true",
            content: "",
            live: true,
            add: false, 
            deleted: false
        };
        
        this.handleEditorChange = this.handleEditorChange.bind(this);
        // this.deleteAnnouncement = this.deleteAnnouncement.bind(this);
        this.clickAdd = this.clickAdd.bind(this);
        // this.handleEditChange = this.handleEditChange.bind(this);
        this.getActivePosts = this.getActivePosts.bind(this)
        this.getCurrentPosts = this.getCurrentPosts.bind(this);
    }

    handleSubmit = (e) => {
       
    }
    
    clickAdd = () => {
        this.setState({ 
            add: true,
            selected: true
        });
    }

    handleEditorChange(content) {
        this.setState({ content });
        console.log(this.state.content)
      }


    getCurrentPosts = () => {
        axios.get('/announcements/current')
        .then(announcement => {
            this.setState({
                fullAnnouncement: announcement.data,
                title: announcement.title,
                body: announcement.body
            })
        })
        .catch(error => console.log(error))
    }

    getActivePosts = () => {
        console.log('Line 66 A.js getting current post')
        axios.get('/announcements/status/active')
        .then(announcement => {
            this.setState({
                fullAnnouncement: announcement.data,
                title: announcement.title,
                body: announcement.body
            })
        })
        .catch(error => console.log(error))
    }
    
    deleteAnnouncement() {
        console.log(this.state)
        axios.post('/announcements/status', {
            user_id: 999992,
            id: this.post_id,
            status: 'archive'
        })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }


    componentDidMount(){
        this.getActivePosts();
    }

    render(){
        if (!auth0Client.isAuthenticated()) return (
            <Container key={this.props.key} style={{padding: '3em 0em 0em' }}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>
                            {this.state.fullAnnouncement.map(announce => {
                                return <Announcement key={announce.id} isLive={this.state.live} onDelete={this.deleteAnnouncement} onEditorChange={this.handleEditorChange} post_id={announce.id} title={announce.announcement_title} body={announce.announcement_body} />    
                            })}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
        return (
            <Container key={this.props.key} style={{padding: '3em 0em 0em' }}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={16}>
                                {this.state.fullAnnouncement.map(announce => {
                                    return <Announcement key={announce.id} isLive={this.state.live} onDelete={this.deleteAnnouncement} onEditorChange={this.handleEditorChange} post_id={announce.id} title={announce.announcement_title} body={announce.announcement_body} /> 
                                })}
                                <AddButton buttonClick={this.clickAdd} />
                                {
                                    this.state.add &&
                                    <AnnouncementPlaceholder /> 
                                }
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
}

export default Announcements;