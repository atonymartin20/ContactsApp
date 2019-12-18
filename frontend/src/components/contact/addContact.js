import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Navbar from '../navbar';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

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
    },
    addContactSpacingDiv: {
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
    addContactDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
});

class AddContact extends React.Component {
    state = {
        id: this.props.id,
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        phoneNumber: this.props.phoneNumber,
        email: this.props.email,
        notes: this.props.notes,
    }

    render() {
        const { classes } = this.props;
        const { firstName, lastName, phoneNumber, email, notes } = this.state;
        return (
            <div className={classes.addContactDiv}>
                <Navbar />
                <div className={classes.addContactSpacingDiv}>
                    <form className={classes.form} onSubmit={this.SubmitHandler}>
                        <FormControl>

                        </FormControl>
                    </form>
                    <Card className={classes.container}>
                        <p className={classes.name}>firstName {this.props.lastName}</p>
                        <p className={classes.phoneNumber}>1{phoneNumber}</p>
                        <p className={classes.email}>2{email}</p>
                        <p className={classes.notes}>3{notes}</p>
                    </Card>
                </div>
            </div>
        )

    }
}

export default withStyles(styles)(AddContact);