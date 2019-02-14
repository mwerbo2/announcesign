import React, { Component }  from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Button, Form, Grid } from 'semantic-ui-react';


const WysiwygStyle = {
    height: '500px'
}

class Wysiwyg extends Component {
    constructor(props){
        super(props);

        // this.state = { 'content': ''};
        // this.handleEditorChange = this.handleEditorChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    // handleEditorChange(content) {
    //     this.setState({ content });
    //     console.log(this.state.content);
    //   }

    handleSubmit(e){ 
        console.log(this.state.content);
        e.preventDefault();
    }

    render() {
        return (
            <Form className='WysiwygStyle'  onSubmit={this.handleSubmit}>
                <Editor
                    apiKey='2v70mtgk4kz045dkbblsshf5xoky86546vqb4bvj4h3oaqds' 
                    cloudChannel='stable'
                    value={this.props.content} 
                    // onEditorChange={this.props.handleEditorChange} 
                    initialValue="<p>Testing editor, initial value</p>"
                    init={{
                        height: '500',
                        plugins: 'link image code',
                        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                    }}
                    onChange={this.props.handleEditorChange}
                /> 
                <Form.Button content='submit'/>
            </Form>
        );
    }
}



export default Wysiwyg;