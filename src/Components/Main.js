import  React, { Component } from 'react';
import  Wysiwyg  from './Wysiwyg';
import Preview from './Preview';


class Main extends React.Component {

    render() {
        return (
            <div>
                <Wysiwyg />
                <Preview />
            </div>
        )
    }

}
export default Main;