import React from 'react';
import {Container, Header, Grid} from 'semantic-ui-react';

class Announcement extends React.Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Container>
                            {/* <Header as="h1" textAlign="center"></Header> */}
                            {/* <h1>oh fart</h1> */}
                            <div dangerouslySetInnerHTML={{__html: this.props.title}}/>
                            <div dangerouslySetInnerHTML={{__html: this.props.body}}/>
                            {/* {this.props.title}
                            {this.props.body} */}
                            {/* </div> */} 
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        );
    }
};

export default Announcement;