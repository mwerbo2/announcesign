import  React, { Component } from 'react';
import {Segment, Grid, Header} from 'semantic-ui-react';
import  Wysiwyg  from './Wysiwyg';
import Preview from './Preview';
import Navbar from './Navbar';
import Footer from './Footer';
import { blue } from 'ansi-colors';

const MainStyle = {
    height: '1000px',
    backgroundColor: blue
}


class Main extends React.Component {
    constructor(props){
        super(props);
     
        this.state = { 'content': ''};
        this.handleEditorChange = this.handleEditorChange.bind(this);
        
    }

    handleEditorChange(content) {
        console.log(content)
        this.setState({ content });
        console.log(this.state.content);
      }

      //Testing onSubmit
      handleSubmit(e){ 
        console.log(this.state.content);
        e.preventDefault();
    }



    render() {
        return (
            <Segment className="MainStyle" style={{marginTop: '5em'}}>
            <Navbar />
                <Grid>
                    <Grid.Row className="MainStyle">
                        <Grid.Column width={8}>
                            <Header as='h2' textAlign='center'>Editor</Header>
                            <Wysiwyg onEditorChange={this.handleEditorChange} content={this.state.content} onSubmit={this.onSubmit}/>
                        </Grid.Column>
                        <Grid.Column width={8}>
                        <Header as='h2' textAlign='center'>Preview</Header>
                            <Preview />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Footer />
            </Segment>
        )
    }
}
export default Main;