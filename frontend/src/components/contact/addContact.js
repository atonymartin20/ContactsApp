import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Navbar from '../navbar';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { AppContext } from '../context/appContext.js';

const styles = theme => ({
    addContactDiv: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
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
    card: {
        width: '100%',
        maxWidth: '600px',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        backgroundColor: '#ffd8b1',
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    inputHalfWidth: {
        width: '45%',
        [theme.breakpoints.down(900)]: {
            width: '100%'
        },
        [theme.breakpoints.down(710)]: {
            width: '45%'
        },
        [theme.breakpoints.down(500)]: {
            width: '100%',
        },
    },
    inputFullWidth: {
        width: '100%',
    },
    inputLabelStyling: {
        fontSize: '1.5rem'
    },
    inputStyling: {
        fontSize: '1.5rem'
    },
    message: {
        color: 'red',
        fontSize: '1.5rem',
    },
    submitButton: {
        width: '50%',
        margin: '0 auto',
        color: 'white',
        backgroundColor: '#1565C0',
        fontSize: '1.8rem',
        textTransform: "none",
        marginTop: 20,
        "&:hover,&:focus": {
            backgroundColor: "#AA1649",
            color: "white"
        },
    },
});

class AddContact extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        notes: '',
        message: '',
        error: 0,
        focus: 1,
    }

    SubmitHandler = event => {
        event.preventDefault();
        const { firstName, lastName, phoneNumber, email, notes } = this.state;

        if ((!firstName && !lastName && !phoneNumber && !email && !notes) || (firstName === '' && lastName === '' && phoneNumber === '' && email === '' && notes === '')) {
            this.setState({
                message: 'All fields cannot be empty',
                focus: 1,
                error: 1,
            })
        }

        else if ((firstName === null && lastName === null) || (firstName === '' && lastName === '') || (!firstName && !lastName)) {
            this.setState({
                firstName: 'Unknown',
                lastName: 'Contact'
            })
            this.context.addContact('Unknown', 'Contact', phoneNumber, email, notes, () => {
                window.location.href='/'
                return null;
            });
        }
        else {
            this.context.addContact(firstName, lastName, phoneNumber, email, notes, () => {
                window.location.href='/'
                return null;
            });
        }
    }

    InputHandler = event => {
        event.preventDefault();
        const target = event.target;
        this.setState({
            [target.name]: target.value,
            error: 0,
            message: ''
        })
    }

    render() {
        const { classes } = this.props;

        const labelStyle = {
            fontSize: '1.5rem'
        }
        const textFieldStyle = {
            fontSize: '1.5rem',
        }

        return (
            <div className={classes.addContactDiv}>
                <Navbar />
                <div className={classes.addContactSpacingDiv}>
                    <Card className={classes.card}>
                        <CardContent>
                            <p className={classes.message}>{this.state.message}</p>
                            <form className={classes.form} onSubmit={this.SubmitHandler}>
                                <FormControl className={classes.inputHalfWidth} error={this.state.error === 1 ? true : false}>
                                    <InputLabel htmlFor='firstName' className={classes.inputLabelStyling}>First Name</InputLabel>
                                    <Input autoFocus id="firstName" name="firstName" onChange={this.InputHandler} className={classes.inputStyling} />
                                </FormControl>
                                <FormControl className={classes.inputHalfWidth} error={this.state.error === 2 ? true : false}>
                                    <InputLabel htmlFor='lastName' className={classes.inputLabelStyling}>Last Name</InputLabel>
                                    <Input id="lastName" name="lastName" onChange={this.InputHandler} className={classes.inputStyling} />
                                </FormControl>
                                <FormControl className={classes.inputFullWidth} error={this.state.error === 3 ? true : false}>
                                    <InputLabel htmlFor='phoneNumber' className={classes.inputLabelStyling}>Phone Number</InputLabel>
                                    <Input id="phoneNumber" name="phoneNumber" onChange={this.InputHandler} className={classes.inputStyling} type="number" />
                                </FormControl>
                                <FormControl className={classes.inputFullWidth} error={this.state.error === 4 ? true : false}>
                                    <InputLabel htmlFor='email' className={classes.inputLabelStyling}>Email</InputLabel>
                                    <Input id="email" name="email" onChange={this.InputHandler} className={classes.inputStyling} />
                                </FormControl>
                                <FormControl className={classes.inputFullWidth} error={this.state.error === 5 ? true : false}>
                                    <TextField multiline id="notes" name="notes" label="Notes" onChange={this.InputHandler} className={classes.inputStyling} InputLabelProps={{ style: labelStyle }} InputProps={{ style: textFieldStyle }} />
                                </FormControl>
                                <Button type='submit' variant='contained' className={classes.submitButton}>Submit</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

AddContact.contextType = AppContext;

export default withStyles(styles)(AddContact);