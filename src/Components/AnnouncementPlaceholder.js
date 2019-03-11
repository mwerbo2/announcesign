import React from 'react';
import {Card} from 'semantic-ui-react';

class AnnouncementPlaceholder extends React.Component {
    state = {
        titleSelected: false,
        bodySelected: false,
        titleContent: "",
        bodyContent: ""
    }

    handleClick = (e) => {
        console.log(e.target.innerHTML);
        if (!e.target.innerHTML){
            console.log('still waiting')
        } else if (e.target.innerHTML === "title"){
            this.setState({titleSelected: true})
        } else if (e.target.innerHTML === "body") {
            this.setState({bodySelected: true})
        } else {
            console.log('waiting')
        }
    }
    
    render(){
        return (
            <Card>
                 <Card.Content>
                    <Card.Header>Update Title</Card.Header>
                    <Card.Description>Update the content</Card.Description>
                </Card.Content>
            </Card>
        //     <div onClick={this.handleClick} style={{border: 'black solid 1px', height: '50px', width:'600px', borderRadius: '5px'}}>
        //         <div style={{border: 'black dotted 1px', height:'30px', width:"40px", borderRadius: '5px'}}>Title</div>
        //         <div style={{border: 'black dotted 1px'}}>Body</div>
        //     </div>
        )
    }
}

    
export default AnnouncementPlaceholder;