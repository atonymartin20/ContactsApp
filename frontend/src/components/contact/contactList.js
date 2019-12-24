import React from 'react';
import Grid from '@material-ui/core/Grid';
import ContactCard from './contactCard.js';
import withStyles from '@material-ui/core/styles/withStyles';
import { AppContext } from '../context/appContext.js';

const styles = theme => ({
    content: {
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
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.content}>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <Grid container justify='center' spacing={0}>
                            {this.context.state.contacts.map((contact, index) => (
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
                                        index={index}
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