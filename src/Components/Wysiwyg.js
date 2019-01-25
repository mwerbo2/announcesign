import React, { Component }  from 'react';
import { Editor } from '@tinymce/tinymce-react';


class Wysiwyg extends Component {
    handleEditChange = (e) => {
        console.log(`Content changed: ${e.target.getContent()}`);
    }

    render() {
       return (
            <Editor apiKey='2v70mtgk4kz045dkbblsshf5xoky86546vqb4bvj4h3oaqds' cloudChannel='stable'
                initialValue="<p>Testing editor, initial value</p>"
                init={{
                    plugins: 'link image code',
                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
                }}
                onChange={this.handleEditChange}
            />
        );
    }
}



export default Wysiwyg;