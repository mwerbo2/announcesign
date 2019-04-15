import React from "react";
import { Grid, Container, Icon, Modal } from "semantic-ui-react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import MaterialUIPickers from "../Announcement/DateTimePicker";
import auth0Client from "../../Auth/Auth";

const styles = {
  containerStyle: {
    height: "150px",
    border: "1px black solid"
  }
};

class AnnouncementPlaceholder extends React.Component {
  constructor(props) {
    super(props);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.saveAnnouncement = this.saveAnnouncement.bind(this);
    // this.scheduleAnnouncement = this.scheduleAnnouncement.bind(this);

    this.state = {
      title: "",
      body: "",
      live: true,
      post_id: "",
      new_post_id: ""
    };
  }

  saveAnnouncement = e => {
    const postId = this.props.post_id;
    axios.post("/announcements",
        {
          user_id: 999999993,
          announcement_title: this.state.title,
          announcement_body: this.state.body,
          status: "active",
          announcementId: postId
        },
        {
          headers: { Authorization: `Bearer ${auth0Client.getIdToken()}` }
        }
      )
      .then(response => {
        console.log("saved ann: ", response.data[0].id);

        this.setState({post_id: response.data[0].id})
        console.log("state", this.state.post_id)
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  // deleteAnnouncement = (e) => {
  // this.props.deleteAnnouncement
  // }

  handleTitleChange(event) {
    this.setState({ title: event });
    console.log("Updating title to: ", this.state.title);
  }
  handleBodyChange(event) {
    this.setState({ body: event });
    console.log("Updating body to: ", this.state.body);
  }
  componentDidMount(){
    console.log('placeholder')
  }

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={14}>
            <Container style={styles.containerStyle}>
              <Editor
                ref="body"
                inline
                apiKey="2v70mtgk4kz045dkbblsshf5xoky86546vqb4bvj4h3oaqds"
                initialValue=" Title"
                plugins="link table wordcount"
                toolbar="bold link table"
                onEditorChange={this.handleTitleChange}
              />
              <Editor
                ref="body"
                inline
                apiKey="2v70mtgk4kz045dkbblsshf5xoky86546vqb4bvj4h3oaqds"
                initialValue="Body"
                plugins="link table wordcount"
                toolbar="bold link table"
                onEditorChange={this.handleBodyChange}
              />
            </Container>
          </Grid.Column>
          <Grid.Column floated="right" verticalAlign="middle" width={2}>
            <Icon
              name="trash alternate"
              size="large"
              onClick={this.props.onDelete}
            />
            <Icon
              type="Submit"
              name="save"
              size="large"
              onClick={this.saveAnnouncement}
            />
            <Modal
              trigger={<Icon name="calendar times outline" size="large" />}
            >
              <Modal.Header>Schedule your announcement</Modal.Header>
              <Modal.Content>
                <MaterialUIPickers post_id={this.state.post_id} />
              </Modal.Content>
            </Modal>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default AnnouncementPlaceholder;
