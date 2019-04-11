import React from "react";
import {
  Container,
  Grid,
  Icon,
  Modal,
  Button,
  Image,
  Header
} from "semantic-ui-react";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import MaterialUIPickers from "../Announcement/DateTimePicker";

class Announcement extends React.Component {
  constructor(props) {
    super(props);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.saveAnnouncement = this.saveAnnouncement.bind(this);
    this.deleteAnnouncement = this.deleteAnnouncement.bind(this);
    // this.scheduleAnnouncement = this.scheduleAnnouncement.bind(this);

    this.state = {
      title: "",
      body: "",
      live: true,
      target_post_id: "",
      deleted: false
    };
  }

  saveAnnouncement = () => {
    console.log(this.props.post_id)
    const postId = this.props.post_id;
    axios
      .post("/announcements", {
        user_id: 999999993,
        announcement_title: this.state.title,
        announcement_body: this.state.body,
        status: "active",
        announcementId: postId
      })
      .then(function(response) {})
      .catch(function(error) {
        console.log(error);
      });
  };

  deleteAnnouncement = () => {
    console.log("a.js", this)
    this.props.onDelete();
  };

  handleTitleChange(event) {
    this.setState({ title: event });
    console.log("Updating title to: ", this.state.title);
  }
  handleBodyChange(event) {
    this.setState({ body: event });
    console.log("Updating body to: ", this.state.body);
  }

  render() {
    return (
      <Grid>
        <Grid.Row key={this.props.post_id}>
          <Grid.Column width={14}>
            <Container>
              <Editor
                ref="body"
                inline
                apiKey="2v70mtgk4kz045dkbblsshf5xoky86546vqb4bvj4h3oaqds"
                initialValue={this.props.title}
                plugins="link table wordcount"
                toolbar="bold link table"
                onEditorChange={this.handleTitleChange}
              >
                <div
                  ref="title"
                  name="title"
                  className="title"
                  dangerouslySetInnerHTML={{ __html: this.props.title }}
                />
              </Editor>
              <Editor
                ref="body"
                inline
                apiKey="2v70mtgk4kz045dkbblsshf5xoky86546vqb4bvj4h3oaqds"
                initialValue={this.props.body}
                plugins="link table wordcount"
                toolbar="bold link table"
                onEditorChange={this.handleBodyChange}
              >
                <div
                  name="body"
                  className="body"
                  dangerouslySetInnerHTML={{ __html: this.props.body }}
                />
              </Editor>
            </Container>
          </Grid.Column>
          <Grid.Column floated="right" verticalAlign="middle" width={2}>
            <Icon
              name="trash alternate"
              size="large"
              onClick={this.deleteAnnouncement}
            />
            <Icon
              data-post_id={this.props.post_id}
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
                <MaterialUIPickers post_id={this} />
              </Modal.Content>
            </Modal>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Announcement;
