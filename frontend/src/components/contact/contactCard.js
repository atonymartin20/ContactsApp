import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

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
    }

    render() {
        const { classes } = this.props;
        const { firstName, lastName, phoneNumber, email, notes, id } = this.state;

        return (
            <Card className={classes.container}>
                <p className={classes.name}>{firstName} {lastName}</p>
                <p className={classes.phoneNumber}>{phoneNumber}</p>
                <p className={classes.email}>{email}</p>
                <p className={classes.notes}>{notes}</p>
                <p className={classes.icons}><Link to={{ pathname: '/editContact', state: {editFirstName: firstName, editLastName: lastName, editId: id, editPhoneNumber: phoneNumber, editEmail: email, editNotes: notes}}}><Button><MoreVertIcon className={classes.iconStyling}/></Button></Link></p>
                <p className={classes.icons}><Button href='/deleteContact' data={this.state}><DeleteIcon className={classes.iconStyling}/></Button></p>
            </Card>
        )
    }
}

export default withStyles(styles)(ContactCard);