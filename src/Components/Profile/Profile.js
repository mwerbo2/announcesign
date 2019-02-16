import React from 'react';
import {Grid, Header, Search, Table} from 'semantic-ui-react';

class Profile extends React.Component {
    render(){
        return(
            <div>
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

            </div>
        )
    }
    
}

export default Profile;