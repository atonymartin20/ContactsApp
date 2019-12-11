import React from 'react';
import Navbar from '../navbar';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    homepageDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    homepageSpacingDiv: {
        margin: '90px 3% 20px 3%',
        width: '100%',
        border: '2px solid #9cc7e3',
        borderRadius: '2%',
        backgroundColor: '#f8fbfd',
        height: 500,
    },
});

class Homepage extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.homepageDiv}>
                <Navbar />
                <div className={classes.homepageSpacingDiv}>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Homepage);