import React from 'react';
import {Container, Grid, Icon} from 'semantic-ui-react';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';

class Announcement extends React.Component {
    constructor(props){
        super(props);
        this.handleTitleChange = this.handleTitleChange.bind(this); 
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.saveAnnouncement = this.saveAnnouncement.bind(this);

        this.state = {
            title: "",
            body: ""
        }
    }

    saveAnnouncement = (e) => {
        axios.post('/announcements', {
            user_id: 999999993,
            announcement_title: this.state.title,
            announcement_body: this.state.body
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        

    }

    // deleteAnnouncement = (e) => {
    //     console.log(e);
    // }

    // scheduleAnnouncement = () => {
    //     console.log('schedule announcement');
    // }

    handleTitleChange(event) {
        this.setState({title: event})
        console.log("Updating title to: ", this.state.title);
      }
      handleBodyChange(event) {
        this.setState({body: event})
        console.log("Updating body to: ", this.state.body);
      }
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={14}>
                        <Container >
                        <Editor ref="body" inline apiKey='2v70mtgk4kz045dkbblsshf5xoky86546vqb4bvj4h3oaqds' initialValue={this.props.title} plugins="link table wordcount" toolbar="bold link table" onEditorChange={this.handleTitleChange}>
                                <div ref="title" name="title" className="title" dangerouslySetInnerHTML={{__html: this.props.title}}/>     
                            </Editor>
                            <Editor ref="body" inline apiKey='2v70mtgk4kz045dkbblsshf5xoky86546vqb4bvj4h3oaqds' initialValue={this.props.body} plugins="link table wordcount" toolbar="bold link table" onEditorChange={this.handleBodyChange}>
                                <div name="body" className="body" dangerouslySetInnerHTML={{__html: this.props.body}}/>
                            </Editor>
                        </Container>
                    </Grid.Column>
                    <Grid.Column floated="right" verticalAlign='middle'  width={2}>
                        <Icon name='trash alternate' size='large' onClick={this.deleteAnnouncement}/>    
                        <Icon type="Submit" name='save' size='large'onClick={this.saveAnnouncement}/>
                        <Icon name='calendar times outline' size='large' onClick={this.scheduleAnnouncement}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        );
    }
};

export default Announcement;