import React from 'react';
import {Container, Header, Grid} from 'semantic-ui-react';

class Announcement extends React.Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Container>
                            <Header as="h1" textAlign="center">{this.props.title}</Header>
                            <p>{this.props.body}</p>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        );
    }
};

export default Announcement;