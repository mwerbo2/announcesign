import  React, { Component } from 'react';
import  Wysiwyg  from './Wysiwyg';


class Main extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Wysiwyg />
            </div>

        )
    }

}
export default Main;