import React from "react";
import {Grid} from 'semantic-ui-react';
import DateTime from "./Components/Announcement/PreviewDateTime";
import Weather from "./Components/Announcement/PreviewWeather";

const Header = () => (
    <Grid.Row>
        <Grid.Column width={4}>
            <Weather />
        </Grid.Column>
        <Grid.Column width={8}>
            <Header textAlign='center' as="h1">Announcements</Header>
        </Grid.Column>
        <Grid.Column width={4}>
            <DateTime />
        </Grid.Column>
    </Grid.Row>
);

export default Header;