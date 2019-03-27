import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import auth0Client from '../Auth';

const styles = theme => ({
    flexcontainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
});

class DateAndTimePickers extends React.Component {
    constructor(props) {
        super(props)
        const { classes } = props;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStartTime = this.handleStartTime.bind(this);
        this.handleEndTime = this.handleEndTime.bind(this);

        this.state = {
            startTime: "date",
            endTime: "date"
        }
    }

    componentDidMount() {
        console.log("Line 41 dtp.js ", this.props.post_id.props.post_id)
        // axios.post({
        //     annoucement_star: this.state.startTime,
        //     annoucement_end: this.state.endTime
        // })
    }

    handleSubmit = (e) => {
        console.log("line 49", this.props.post_id.props.post_id)
        e.preventDefault();
        // console.log(e.target)
        // console.log('save', this.state.endTime)
        // console.log('save', this.state.startTime)
        const p_id = this.props.post_id.props.post_id;
        const start = new Date(this.state.startTime);
        const end = new Date(this.state.endTime);

        axios.post('/announcements/schedule', {
            announcement_id: p_id,
            date_time_start: start,
            date_time_end: end
        },
        {
            headers: { 'Authorization': `Bearer ${auth0Client.getIdToken()}` }
        }
        )
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    
    handleStartTime = (e) => {
        this.setState({startTime: e.target.value});
    }

    handleEndTime = (e) => {
        this.setState({endTime: e.target.value});
    }

    render(){
        return (
            <div className={this.props.classes.flexcontainer}>
                <form className={this.props.container} noValidate onSubmit={this.handleSubmit}>
                    <TextField
                        id="datetime-local"
                        label="Day / time to start"
                        type="datetime-local"
                        defaultValue="2019-03-27T10:30"
                        className={this.props.classes.textField}
                        onChange={this.handleStartTime}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    <TextField
                        id="datetime-local" 
                        label="Day / time to end"
                        type="datetime-local"
                        defaultValue="2019-03-27T10:30"
                        className={this.props.classes.textField}
                        onChange={this.handleEndTime}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

DateAndTimePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateAndTimePickers);