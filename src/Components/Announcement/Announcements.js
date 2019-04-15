import React from "react";
import { Grid, Container, Header } from "semantic-ui-react";
import axios from "axios";
// import { Editor } from '@tinymce/tinymce-react';
// import Weather from './Announcement/PreviewWeather';
// import DateTime from './Announcement/PreviewDateTime';
import Announcement from "./Announcement";
import AddButton from "./AddButton";
import AnnouncementPlaceholder from "./AnnouncementPlaceholder";
import auth0Client from "../../Auth/Auth";

class Announcements extends React.Component {
  constructor(props) {
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
    this.getActivePosts = this.getActivePosts.bind(this);
  }

  handleSubmit = e => {};

  clickAdd = () => {
    this.setState({
      add: true,
      selected: true
    });
  };

  handleEditorChange(content) {
    this.setState({ content });
    console.log(this.state.content);
  }

  renderAnnouncement = () => {
    console.log(this.state.fullAnnouncement)
    return this.state.fullAnnouncement.map(announce => {
      return (
        <Announcement
          key={announce.id}
          isLive={this.state.live}
          onDelete={this.deleteAnnouncement}
          onEditorChange={this.handleEditorChange}
          post_id={announce.id}
          title={announce.announcement_title}
          body={announce.announcement_body}
        />
      );
    });
  };

  getActivePosts = () => {
    axios
      .get("/announcements/liveStatus")
      .then(announcement => {
        this.setState({
          fullAnnouncement: announcement.data,
          title: announcement.title,
          body: announcement.body
        });
      })
      .catch(error => console.log(error));
  };

  deleteAnnouncement() {
    console.log("deleting ", this)
    axios
      .post("/announcements/status", {
        user_id: 999992,
        id: this.post_id,
        status: "archive"
      })
      .then(post => console.log(post))
      .catch(err => console.log(err));
      
  }

  componentDidMount() {
    this.getActivePosts();
  }

  render() {
    if (!auth0Client.isAuthenticated())
      return (
        <Container key={this.props.key} style={{ padding: "3em 0em 0em" }}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={16}>{this.renderAnnouncement()}</Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      );
    return (
      <Container key={this.props.key} style={{ padding: "3em 0em 0em" }}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={16}>
              {this.renderAnnouncement()}
              <AddButton buttonClick={this.clickAdd} />
              {this.state.add && <AnnouncementPlaceholder onDelete={this.deleteAnnouncement} />}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Announcements;
