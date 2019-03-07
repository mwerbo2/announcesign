import React from 'react';
import {Header, Button, Grid} from 'semantic-ui-react';
import {Link} from 'react-router-dom'

class WelcomeMain extends React.Component {
    render(){
        return(
            <Grid textAlign='center' style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
                <Grid.Row verticalAlign='middle' textAlign='center'>
                    <Grid.Column width={16}>
                        <Header as="h1">Create your Announcement!</Header>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                    <Grid.Column width='4' textAlign='center'>
                        <Header as="h1">Add Announcement</Header>
                        <Button size='massive'><Link to={'/edit'}>Add Announcement</Link></Button>
                    </Grid.Column>
                    <Grid.Column width='4' textAlign='center'>
                        <Header as="h1">View Live Post</Header>
                        <Button size='massive'><Link to={`/display`} activeClassName="" target="_blank">View Live Post</Link></Button>
                    </Grid.Column>
                    <Grid.Column width='4' textAlign='center'> 
                        <Header as="h1">Edit Post</Header>
                        <Button size='massive'><Link to={'/profile'}>Edit Post</Link></Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

export default WelcomeMain;