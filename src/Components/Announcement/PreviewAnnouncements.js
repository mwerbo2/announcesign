import React from 'react';
import {Container, Header, Grid} from 'semantic-ui-react';
import { Editor } from '@tinymce/tinymce-react';

class Announcement extends React.Component {
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Container>
                        <Editor inline apiKey='2v70mtgk4kz045dkbblsshf5xoky86546vqb4bvj4h3oaqds' tagName="div" plugins="link table wordcount" toolbar="bold link table" />
                        <Editor
                                apiKey='2v70mtgk4kz045dkbblsshf5xoky86546vqb4bvj4h3oaqds' 
                                cloudChannel='stable'
                                
                                // selector='.title'
                                // value={this.props.content} 
                                // onEditorChange={this.handleEditorChange} 
                                // initialValue="<p>Testing editor, initial value</p>"
                                //tagName
                                init={{
                                    inline: true,
                                    // tagname:'.title',
                                    // selector: '.title',
                                    // height: '500',
                                    plugins: 'link image code',
                                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                                }}
                            //    onChange={this.handleEditChange}
                            /> 
                            <div className="title" dangerouslySetInnerHTML={{__html: this.props.title}}/>
                            <div className="body" dangerouslySetInnerHTML={{__html: this.props.body}}/>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        );
    }
};

export default Announcement;