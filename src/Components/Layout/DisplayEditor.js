import React from "react";
import { Grid, Container, Header } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import axios from "axios";
// import { Editor } from '@tinymce/tinymce-react';
import Weather from "./PreviewWeather";
import DateTime from "./PreviewDateTime";
import Announcement from "../Announcement/Announcement";
import AddButton from "../Announcement/AddButton";
import AnnouncementPlaceholder from "../Announcement/AnnouncementPlaceholder";
import Announcements from "../Announcement/Announcements";
import DisplayHeader from "./DisplayHeader";
import auth0Client from "../../Auth/Auth";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import AnnouncementBoard from "./AnnouncementBoard";

const boardStyle = {
  height: "100%",
  width: "960px",
  margin: '40px 10px',
  backgroundColor: "#FF0000"
};
class Display extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullAnnouncement: [],
      title: "true",
      body: "true",
      content: "",
      live: true,
      add: false
    };
  }
  componentDidMount() {}

  render() {
    return (
      <div>
        <Container key={this.props.key} style={{ padding: "3em 0em 0em" }}>
          <Navbar />
          <AnnouncementBoard />
        </Container>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Display);
