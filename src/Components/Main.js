import  React, { Component } from 'react';
import {Segment, Grid} from 'semantic-ui-react';
import  Wysiwyg  from './Wysiwyg';
import Preview from './Preview';
import { blue } from 'ansi-colors';

const MainStyle = {
    height: '1000px',
    backgroundColor: blue
}


class Main extends React.Component {
    render() {
        return (
            <Segment className="MainStyle">
                <Grid>
                    <Grid.Row className="MainStyle">
                        <Grid.Column width={8}>
                            <Wysiwyg />
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Preview />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}
export default Main;