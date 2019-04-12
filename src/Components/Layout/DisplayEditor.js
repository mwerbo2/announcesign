import React from "react";
import { Grid, Container, Header } from "semantic-ui-react";
import { withRouter} from 'react-router-dom';
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
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

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

    // this.handleEditorChange = this.handleEditorChange.bind(this);
    // this.deleteAnnouncement = this.deleteAnnouncement.bind(this);
    // this.clickAdd = this.clickAdd.bind(this);
    // this.handleEditChange = this.handleEditChange.bind(this);
  }
  //RAISED TO PARENTS
  // handleEditorChange(content) {
  //     this.props.onEditorChange(content)
  // }

  // handleSubmit = (e) => {

  // }

  // clickAdd = () => {
  //     this.setState({
  //         add: true,
  //         selected: true
  //     });
  // }

  // handleEditorChange(content) {
  //     this.setState({ content });
  //     console.log(this.state.content)
  //   }

  // deleteAnnouncement = (e) => {
  //     console.log("line 54 de.js ", this)
  //     console.log("Ref: ", this.refs)
  //     console.log("Target: ", e.target.parentNode.parentNode)
  //     console.log("Target: ", e.target.parentNode.parentNode.value)
  //     // this.setState({ live: false });
  //     console.log(this.state.live)
  //     // axios.post({

  //     // })
  // }

  // showLiveAnnouncements = () => {
  //     this.state.fullAnnouncement.map(announce => {
  //         return <Announcement ref={announce.id} onDelete={this.deleteAnnouncement} onEditorChange={this.handleEditorChange}  key={announce.id} title={announce.announcement_title} body={announce.announcement_body} />
  //         })
  // }

  componentDidMount() {
    // axios
    //   .get("/announcements/live")
    //   .then(announcement => {
    //     this.setState({
    //       fullAnnouncement: announcement.data,
    //       title: announcement.title,
    //       body: announcement.body
    //     });
    //   })
    //   .catch(error => console.log(error));
  }

  render() {
    return (
      <Container key={this.props.key} style={{ padding: "3em 0em 0em" }}>
        <Navbar />
        <Grid>
          <DisplayHeader />
          <Grid.Row>
            <Announcements />
          </Grid.Row>
        </Grid>
        <Footer />
      </Container>
    );
  }
}

export default withRouter(Display);
