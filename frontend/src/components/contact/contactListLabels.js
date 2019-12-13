import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    container: {
        width: '100%',
        margin: '3px 0px',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: '2.0rem',
        borderBottom: '2px dashed black',
        paddingBottom: 5,
    },
    name: {
        width: '25%',
        textAlign: 'center',
        [theme.breakpoints.down(1400)]: {
            width: '32.5%'
        },
        [theme.breakpoints.down(1052)]: {
            width: '40%',
        },
        [theme.breakpoints.down(950)]: {
            width: '60%',
        },
        [theme.breakpoints.down(500)]: {
            width: '100%',
        },
    },
    phoneNumber: {
        width: '20%',
        textAlign: 'center',
        [theme.breakpoints.down(1400)]: {
            width: '22.5%'
        },
        [theme.breakpoints.down(1052)]: {
            width: '40%',
        },
        [theme.breakpoints.down(500)]: {
            display: 'none',
        },
    },
    email: {
        width: '22.5%',
        textAlign: 'center',
        [theme.breakpoints.down(1400)]: {
            width: '30%'
        },
        [theme.breakpoints.down(1052)]: {
            display: 'none',
        },
    },
    notes: {
        width: '22.5%',
        textAlign: 'center',
        [theme.breakpoints.down(1400)]: {
            display: 'none'
        },
    },
});

class ContactListLabels extends React.Component {
    state = {
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <p className={classes.name}>Name</p>
                <p className={classes.phoneNumber}>Phone Number</p>
                <p className={classes.email}>Email</p>
                <p className={classes.notes}>Notes</p>
            </div>
        )
    }
}

export default withStyles(styles)(ContactListLabels);