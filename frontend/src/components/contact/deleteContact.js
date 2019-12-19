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
        zIndex: 1,
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        overflow: 'auto',
        backgroundColor: 'rgba(43, 43, 43, 0.3)'
    },
    deleteButton: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        width: '40%',
        height: 45,
        border: '1px solid darkgrey',
        borderRadius: '5px',
        backgroundColor: '#000080',
        color: 'white',
    },
    message: {
        fontSize: '1.5rem',
        marginBottom: 15,
    },
    modalContainer: {
        width: '40%',
        border: '1px solid #888888',
        backgroundColor: '#FEFEFE',
        margin: '20vh auto',
        padding: 20,
        zIndex: 20000,
        [theme.breakpoints.down(1000)]: {
            width: '65%',
            marginLeft: 250,
            maxWidth: 600,
        },
        [theme.breakpoints.down(710)]: {
            margin: '20vh auto',
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
                    <p className={classes.message}>Are you sure you want to delete {this.props.name}?</p>
                    <div className={classes.buttonWrapper}>
                        <Button variant='contained' onClick={this.props.delete} className={classes.deleteButton}>Delete</Button>
                        <Button variant='contained' onClick={this.props.close} className={classes.cancelButton}>Cancel</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(DeleteModal);