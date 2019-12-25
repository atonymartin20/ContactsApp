const express = require('express');
require("dotenv").config();
const app = express();

const contactRouter = require('./routers/contactRouter');

const cors = require('cors');

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || '6999';

app.use('/api/contacts', contactRouter);


app.get('/', (req, res) => {
  res.status(200).send(`API active on port: ${PORT}`);
});

module.exports = app;
