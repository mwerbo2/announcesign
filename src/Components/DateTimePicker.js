import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

function DateAndTimePickers(props) {
  const { classes } = props;

  return (
    <div className={classes.flexcontainer}>
        <form className={classes.container} noValidate>
        <TextField
            id="datetime-local"
            label="Day / time to start"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
        />
        </form>
        <form className={classes.container} noValidate>
        <TextField
            id="datetime-local" 
            label="Day / time to end"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
            shrink: true,
            }}
        />
        </form>
    </div>
  );
}

DateAndTimePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateAndTimePickers);