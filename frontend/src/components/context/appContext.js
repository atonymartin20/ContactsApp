import React, { Component } from 'react';
import axios from 'axios';

export const AppContext = React.createContext();

export default class AppProvider extends Component {
    state = {
        contacts: JSON.parse(localStorage.getItem('contacts')) || [],
    };

    render() {

        return (
            <AppContext.Provider
                value={{
                    state: this.state,
                    getContacts: () => {
                        const endpoint = '/contacts';
                        axios
                            .get(endpoint)
                            .then(res => {
                                const contacts = res.data;
                                localStorage.setItem('contacts', JSON.stringify(contacts));
                                this.setState({
                                    contacts
                                });
                            })
                            .catch(err => {
                                console.log('error getting contacts', err)
                            });
                    },
                    addContact: (firstName, lastName, phoneNumber, email, notes, cb) => {
                        const endpoint = '/contacts';
                        let contact = {
                            firstName: firstName || null,
                            lastName: lastName || null,
                            phoneNumber: phoneNumber || null,
                            email: email || null,
                            notes: notes || null,
                        };
                        axios
                            .post(endpoint, contact)
                            .then(res => {
                                contact = res.data;
                                const joined = this.state.contacts.concat(contact);
                                const index = joined.length - 1;
                                localStorage.setItem('contacts', JSON.stringify(joined));
                                this.setState({
                                    contacts: joined
                                });
                                cb(index);
                            })
                            .catch(err => {
                                console.log('error adding contact', err)
                            })
                    },
                    editContact: (contactInfo, index, cb) => {
                        const contactID = this.state.contacts[index].id;
                        const endpoint = `/contacts/${contactID}`;
                        axios
                            .put(endpoint, contactInfo)
                            .then(res => {
                                const contact = res.data;
                                const contacts = this.state.contacts;
                                contacts[index] = contact;
                                localStorage.setItem('leagues', JSON.stringify(contacts));
                                this.setState({ contacts });
                                cb();
                            })
                            .catch(err => {
                                console.log('error editing contact', err);
                            })
                    },
                    deleteContact: (index, cb) => {
                        const contactID = this.state.contacts[index].id;
                        const endpoint = `/contacts/${contactID}`;
                        axios
                            .delete(endpoint)
                            .then(res => {
                                console.log(res.data);
                                this.setState({ contacts: res.data})
                            })
                            .catch(err => {
                                console.log('error deleting contact', err)
                            })
                    },
                }}
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}
