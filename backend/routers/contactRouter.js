const express = require('express');

const contactsModel = require('../data/models/contactsModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    contactsModel
        .getContacts()
        .then(contacts => {
            res.json(contacts);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not grab contacts', err });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    contactsModel
        .findByID(id)
        .then(contact => {
            res.json(contact);
        })
        .catch(err => {
            res.status(500).json({ error: 'Could not find contact', err });
        });
});

router.post('/', (req, res) => {
    const contact = req.body;
    contactsModel
        .insert(contact)
        .then(contact => {
            res.status(201).json(contact);
        })
        .catch(err => {
            res.status(404).json({
                error: 'Trouble creating contact', err
            });
        });
})

router.put('/:id', (req, res) => {
    const { id } = req.params;

});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    contactsModel
        .remove(id)
        .then(removed => {
            if (removed) {
                res.json({ message: 'Contact has been deleted.' });
            }
            else {
                res.status(500).json({ message: 'Id does not exist. '});
            }
        })
        .catch(err => {
            res.status(500).json({ error: 'The contact was not removed.', err });
        });
});

module.exports = router;
