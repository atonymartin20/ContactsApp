import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/appContext.js';
import DeleteModal from './deleteContact.js';

// Icons
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
    container: {
        width: '100%',
        padding: 0,
        margin: 0,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: '1.75rem',
        marginBottom: 3,
        minHeight: 35,
    },
    name: {
        width: '25%',
        textAlign: 'center',
        padding: '5px 10px',
        [theme.breakpoints.down(1400)]: {
            width: '32.5%'
        },
        [theme.breakpoints.down(1050)]: {
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
        padding: '5px 10px',
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
        fontSize: '1.5rem',
        overflowWrap: 'break-word',
        padding: '5px 10px',
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
        fontSize: '1.5rem',
        padding: '5px 10px',
        [theme.breakpoints.down(1400)]: {
            display: 'none'
        }
    },
    linkStyling: {
        width: '100%',
        textDecoration: 'none',
        color: 'black',
        display: 'inline-block',
    },
    icons: {
        width: '5%',
        textAlign: 'center',
        padding: '5px 10px',
        [theme.breakpoints.down(1400)]: {
            width: '7.5%'
        },
        [theme.breakpoints.down(1052)]: {
            width: '10%',
        },
        [theme.breakpoints.down(950)]: {
            display: 'none',
        },
    },
    iconStyling: {
        width: 25,
        height: 25,
    }
});

class ContactCard extends React.Component {
    state = {
        id: this.props.id,
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        phoneNumber: this.props.phoneNumber,
        email: this.props.email,
        notes: this.props.notes,
        delete: false,
        index: this.props.index,
    }

    flipDelete = event => {
        event.preventDefault();
        this.setState({
            delete: !this.state.delete
        })
    }

    deleteNote = event => {
        event.preventDefault();
        const { index } = this.state;
        this.context.deleteContact(index);
        window.location.href='/';
    }
    
    render() {
        const { classes } = this.props;
        const { firstName, lastName, phoneNumber, email, notes, id, index } = this.state;
        
        return (
            <>
                <Card className={classes.container}>
                    <p className={classes.name}><Link to={{ pathname: `/viewContact/${index}`, state: { firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, index: index, id: id, email: email, notes: notes}}} className={classes.linkStyling}>{firstName} {lastName}</Link></p>
                    <p className={classes.phoneNumber}><Link to={{ pathname: `/viewContact/${index}`, state: { firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, index: index, id: id, email: email, notes: notes}}} className={classes.linkStyling}>{phoneNumber}</Link></p>
                    <p className={classes.email}><Link to={{ pathname: `/viewContact/${index}`, state: { firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, index: index, id: id, email: email, notes: notes}}} className={classes.linkStyling}>{email}</Link></p>
                    <p className={classes.notes}><Link to={{ pathname: `/viewContact/${index}`, state: { firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, index: index, id: id, email: email, notes: notes}}} className={classes.linkStyling}>{notes}</Link></p>
                    <p className={classes.icons}><Button><Link to={{ pathname: `/editContact/${index}`, state: { firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, index: index, id: id, email: email, notes: notes}}} className={classes.linkStyling}><MoreVertIcon className={classes.iconStyling} /></Link></Button></p>
                    <p className={classes.icons}><Button onClick={this.flipDelete}><DeleteIcon className={classes.iconStyling} /></Button></p>
                </Card>
                {this.state.delete ? <DeleteModal name={`${firstName} ${lastName}`} delete={this.deleteNote} close={this.flipDelete} /> : null }
            </>
        )
    }
}

ContactCard.contextType = AppContext;

export default withStyles(styles)(ContactCard);