import React from "react";
import { Grid, Button, Icon } from "semantic-ui-react";
import ReactDOM from 'react-dom'
import { withRouter } from "react-router-dom";
import Announcements from "../Announcement/Announcements";
import DisplayHeader from "./DisplayHeader";
import SidebarEditor from './SidebarEditor'

const boardStyle = {
  height: "768px",
  width: "1024px",
  margin: "0 auto",
  padding: "5em",
  backgroundColor: "#748CAB"
};

class AnnouncementBoard extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    // ReactDOM.findDOMNode().getBoundingClientRect()
  }

  editBackground = () => {
      console.log("editing background")
  };
  componentDidMount() {

    //Get height of announcements component
    //Check if announcements exceeds the height
    const node = this.myRef.current;
    console.log(node.getBoundingClientRect());
    //
  }

  componentDidUpdate(){
    console.log("*******UPDATED****************")
    const node = this.myRef.current;
    console.log(node.getBoundingClientRect());
  }

  render() {
    return (
      <div ref={this.myRef} style={boardStyle} onClick={this.editBackground}>
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
