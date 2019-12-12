import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

// Icons
import RefreshIcon from '@material-ui/icons/Refresh';

const styles = theme => ({

});

class ContactCard extends React.Component {
    state = {
        id: this.props.id,
        firstName: this.props.firstName,
        lastName: this.props.lastName,
        phoneNumber: this.props.phoneNumber,
        email: this.props.email
    }

    render() {
        const { classes } = this.props;
        const { firstName, lastName, phoneNumber, email } = this.state;

        return (
            <Card>
                {firstName} {lastName} {phoneNumber} {email}
            </Card>
        )
    }
}

export default withStyles(styles)(ContactCard);