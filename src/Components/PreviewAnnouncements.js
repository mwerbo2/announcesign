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
                            <h1>oh fart</h1>
                            <div>
                            {/* {this.props.title} */}
                            {this.props.body.toString()}
                            </div>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        );
    }
};

export default Announcement;