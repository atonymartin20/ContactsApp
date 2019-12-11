import React from 'react';
import Grid from '@material-ui/core/Grid';
import ContactCard from './contactCard.js';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    content: {
        height: 50,
        padding: '0px 20px',
        width: '100%'
    }
})

class ContactList extends React.Component {
    state = {
        test: [
            { id: 1, firstName: 'Mark', lastName: 'yMark', phoneNumber: '6362477740', email: 'test@blah.com' }
        ]
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.content}>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <Grid container justify='center' spacing={5}>
                            {this.state.test.map(contact => (
                                <Grid key={contact.id} item>
                                    <ContactCard
                                        id={contact.id}
                                        firstName={contact.firstName}
                                        lastName={contact.lastName}
                                        phoneNumber={contact.phoneNumber}
                                        email={contact.email}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(ContactList);