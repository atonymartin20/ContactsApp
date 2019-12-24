import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Navbar from '../navbar';
import { AppContext } from '../context/appContext.js';
import { Link } from 'react-router-dom';
import DeleteModal from './deleteContact.js';

const styles = theme => ({
    button: {
        width: '20%',
        color: 'black',
        fontSize: '1.25rem',
        textTransform: "none",
        "&:hover,&:focus": {
            backgroundColor: "#AA1649",
            color: "white"
        },
    },
    buttonWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        marginBottom: 15,
    },
    card: {
        width: '100%',
        maxWidth: '600px',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: '#daeaf4',
    },
    cardContent: {
        display: 'flex',
        flexDirection: 'column',
    },
    emailStyling: {
        textDecoration: 'none',
        color: 'black',
    },
    linkStyling: {
        width: '100%',
        textDecoration: 'none',
        color: 'black',
        display: 'inline-block',
    },
    message: {
        width: '100%',
        fontSize: '1.5rem',
        marginBottom: 15,
        textAlign: 'center',
    },
    name: {
        fontSize: '2.5rem',
        width: '100%',
        textAlign: 'center',
        marginBottom: 20,
    },
    notesContainer: {
        width: '100%',
        backgroundColor: '#d1dce3',
        alignSelf: 'center',
        minHeight: '15vh',
        height: 'auto',
        fontSize: '1.5rem',
        marginTop: 10,
        padding: '10px 5%',
    },
    notesMessage: {
        width: '100%',
        fontSize: '1.5rem',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: '20',
        textAlign: 'left',
    },
    paddingLeft: {
        paddingLeft: '5%',
    },
    viewContactDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    viewContactSpacingDiv: {
        margin: '90px 3% 20px 3%',
        width: '100%',
        border: '2px solid #9cc7e3',
        borderRadius: '2%',
        backgroundColor: '#f8fbfd',
        height: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
});

class ViewContact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.location.state.firstName || '',
            lastName: this.props.location.state.lastName || '',
            phoneNumber: this.props.location.state.phoneNumber || '',
            email: this.props.location.state.email || '',
            notes: this.props.location.state.notes || '',
            index: this.props.location.state.index,
            id: this.props.location.state.id,
            delete: false,
        }
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
            <div className={classes.viewContactDiv}>
                <Navbar />
                <div className={classes.viewContactSpacingDiv}>
                    <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                            <div className={classes.buttonWrapper}>
                                <Button className={classes.button}><Link to={{ pathname: `/editContact/${index}`, state: { firstName: firstName, lastName: lastName, phoneNumber: phoneNumber, index: index, id: id, email: email, notes: notes}}} className={classes.linkStyling}>Edit</Link></Button>
                                <Button className={classes.button} onClick={this.flipDelete}>Delete</Button>
                            </div>
                            <h2 className={classes.name}>{firstName} {lastName}</h2>
                            <p className={classes.message}>PhoneNumber: {phoneNumber}</p>
                            <p className={classes.message}>Email: <a className={classes.emailStyling} href={`mailto:${email}`}>{email}</a></p>
                            <p className={classes.notesMessage}><p className={classes.paddingLeft}>Notes:</p> <p className={classes.notesContainer}><br />{notes}</p></p>
                        </CardContent>
                    </Card>
                    {this.state.delete ? <DeleteModal name={`${firstName} ${lastName}`} delete={this.deleteNote} close={this.flipDelete} /> : null }
                </div>
            </div>
        )
    }
}

ViewContact.contextType = AppContext;

export default withStyles(styles)(ViewContact);