import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    buttonWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cancelButton: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        width: '40%',
        height: 45,
        border: '1px solid darkgrey',
        borderRadius: '5px',
        
    },
    container: {
        position: 'fixed',
        zIndex: 99,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        backgroundColor: 'rgba(43, 43, 43, 0.3)'
    },
    deleteButton: {

    },
    message: {
        fontSize: '1.5rem',
    },
    modalContainer: {
        width: '40%',
        border: '1px solid #888888',
        backgroundColor: '#FEFEFE',
        margin: '20vh auto',
        padding: 20,
        [theme.breakpoints.down(1000)]: {
            width: '85%',
            maxWidth: 600,
        },
        [theme.breakpoints.down(500)]: {
            width: '100%'
        },
    },
});

class DeleteModal extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.container}>
                <div className={classes.modalContainer}>
                    <p className={classes.message}>Are you sure you want to delete this?</p>
                    <div className={classes.buttonWrapper}>
                        <Button onClick={props.delete} className={classes.deleteButton}>Delete</Button>
                        <Button primary onClick={props.close} className={classes.cancelButton}>Cancel</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(DeleteModal);