import React from 'react';
import {Container, Header, Grid} from 'semantic-ui-react';

class Announcement extends React.Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Container>
                            <div dangerouslySetInnerHTML={{__html: this.props.title}}/>
                            <div dangerouslySetInnerHTML={{__html: this.props.body}}/>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        );
    }
};

export default Announcement;