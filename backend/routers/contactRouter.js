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

router.post

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
