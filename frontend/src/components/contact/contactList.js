import React from 'react';
import Grid from '@material-ui/core/Grid';
import ContactCard from './contactCard.js';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';

const styles = theme => ({
    content: {
        height: 50,
        padding: 0,
        width: '100%',
    },
    item: {
        width: '100%',
        padding: 0,
        margin: 0,
    }
})

class ContactList extends React.Component {
    state = {
        test: [
            { id: 1, firstName: 'Mark', lastName: 'yMark', phoneNumber: '6362477740', email: 'test@blah.com', notes: 'test' },
            { id: 2, firstName: 'Mark', lastName: 'yMark', phoneNumber: '6362477740', email: 'longpersonname@longcompanyname.com', notes: 'Lets test this as well' },
            { id: 3, firstName: 'Mark', lastName: 'yMark', phoneNumber: '6362477740', email: 'test@blah.com', notes: 'I wonder what happens when I write a really long note.  Already 2 lines ... lets see what happens oh I broke.' }
        ]
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.content}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Grid container justify='center' spacing={0}>
                            {/*{this.context.state.contacts.map(contact => ( */}
                            {this.state.test.map(contact => (
                                <Grid key={contact.id} item classes={{
                                    item: classes.item,
                                }}>
                                    <ContactCard
                                        id={contact.id}
                                        firstName={contact.firstName}
                                        lastName={contact.lastName}
                                        phoneNumber={contact.phoneNumber}
                                        email={contact.email}
                                        notes={contact.notes}
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

ContactList.contextType = AppContext;

export default withStyles(styles)(ContactList);