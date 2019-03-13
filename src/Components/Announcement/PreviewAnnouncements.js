import React from 'react';
import {Container, Header, Grid} from 'semantic-ui-react';
import { Editor } from '@tinymce/tinymce-react';

class Announcement extends React.Component {
    constructor(props){
        super(props);
        this.handleEditorChange = this.handleEditorChange.bind(this);
    }


    handleEditorChange(content) {
        this.props.onEditorChange(content)
      }
    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <Container>
                        
                        {/* <Editor
                                apiKey='2v70mtgk4kz045dkbblsshf5xoky86546vqb4bvj4h3oaqds' 
                                cloudChannel='stable'
                                
                                // selector='.title'
                                // value={this.props.content} 
                                // onEditorChange={this.handleEditorChange} 
                                // initialValue="<p>Testing editor, initial value</p>"
                                tagName='div'
                                init={{
                                    inline: true,
                                    // tagname:'.title',
                                    // selector: '.title',
                                    // height: '500',
                                    plugins: 'link image code',
                                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                                }}
                            //    onChange={this.handleEditChange}
                            />  */}
                            <Editor inline apiKey='2v70mtgk4kz045dkbblsshf5xoky86546vqb4bvj4h3oaqds' initialValue={this.props.title} plugins="link table wordcount" toolbar="bold link table" onEditorChange={this.handleEditorChange} >
                                <div className="title" dangerouslySetInnerHTML={{__html: this.props.title}}/>     
                            </Editor>
                            <Editor inline apiKey='2v70mtgk4kz045dkbblsshf5xoky86546vqb4bvj4h3oaqds' initialValue={this.props.body} plugins="link table wordcount" toolbar="bold link table" onEditorChange={this.handleEditorChange} >
                                <div className="body" dangerouslySetInnerHTML={{__html: this.props.body}}/>
                            </Editor>
                        </Container>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        );
    }
};

export default Announcement;