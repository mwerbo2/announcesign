import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

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
        console.log(classes);
        console.log("props: ", props.classes)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStartTime = this.handleStartTime.bind(this);
        this.handleEndTime = this.handleEndTime.bind(this);

        this.state = {
            startTime: "date",
            endTime: "date"
        }
    }

    componentDidMount() {
        // axios.post({
        //     annoucement_star: this.state.startTime,
        //     annoucement_end: this.state.endTime
        // })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
        console.log('save', this.state.endTime)
        console.log('save', this.state.startTime)

        // axios.post('/')
    }
    
    handleStartTime = (e) => {
        this.setState({startTime: e.target.value});
        console.log(this.state.startTime);
    }

    handleEndTime = (e) => {
        this.setState({endTime: e.target.value});
        console.log(this.state.endTime);
    }

    render(){
        return (
            <div className={this.props.classes.flexcontainer}>
                <form className={this.props.container} noValidate onSubmit={this.handleSubmit}>
                    <TextField
                        id="datetime-local"
                        label="Day / time to start"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
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
                        defaultValue="2017-05-24T10:30"
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