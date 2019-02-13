import  React, { Component } from 'react';
import {Segment, Grid} from 'semantic-ui-react';
import  Wysiwyg  from './Wysiwyg';
import Preview from './Preview';



class Main extends React.Component {

    render() {
        return (
            <Segment>
                <Grid>
                    <Grid.Row>
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