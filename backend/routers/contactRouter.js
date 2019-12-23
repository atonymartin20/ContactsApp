const express = require('express');

const contactsModel = require('../data/models/contactsModel.js');

const router = express.Router();

router.get

router.post

router.put

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
