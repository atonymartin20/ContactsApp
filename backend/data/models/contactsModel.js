const db = require('../dbConfig.js');

module.exports = {
    insert: contact => {
        return db('contacts').insert(contact, 'id');
    },
    findByID: id => {
        return db('contacts').where({ id }).first();
    },
    getContacts() {
        return db('contacts');
    },
    update: (id, contact) => {
        return db('contacts').where({ id }).update(contact);
    },
    remove: id => {
        return db('contacts').where({ id }).del();
    }
}