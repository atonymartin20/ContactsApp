import React from 'react';
import Navbar from '../navbar';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    homepageDiv: {
        width: '100%'
    },
    homepageSpacingDiv: {
        marginTop: 65,
        padding: '25px 4%',
        [theme.breakpoints.up(710)]: {
            marginLeft: 240
        }
    },

});

class Homepage extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.homepageDiv}>
                <Navbar />
                <div className={classes.homepageSpacingDiv}>
                    <h1>test</h1>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Homepage);