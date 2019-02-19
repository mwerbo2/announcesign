import React from 'react';
import {Grid, Header, Search, Table, Container} from 'semantic-ui-react';
import Navbar from '../Navbar';
import Footer from '../Footer';

class Profile extends React.Component {
    render(){
        return(
            <div>
            <Container style={{marginTop: '7em'}}>
                <Navbar />
                <Header>Welcome {this.props.name}</Header>
                <Search />
                <Table celled selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell>Date</Table.HeaderCell>
                            <Table.HeaderCell>Options</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                </Table>
                </Container>
                <Footer />
                </div>
        );
    };  
}

export default Profile; 