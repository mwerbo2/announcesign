import React from "react";
import { Grid, Button, Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import Announcements from "../Announcement/Announcements";
import DisplayHeader from "./DisplayHeader";

const boardStyle = {
  height: "960px",
  width: "1024px",
  margin: "0 auto",
  padding: "5em",
  backgroundColor: "#748CAB"
};

class AnnouncementBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  editBackground = () => {
      console.log("editing background")
  };

  render() {
    return (
      <div style={boardStyle} onClick={this.editBackground}>
        <Grid>
          <DisplayHeader />
          <Grid.Row>
            <Announcements />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default withRouter(AnnouncementBoard);
