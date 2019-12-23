const express = require('express');
const app = express();

const contactRouter = require('./routers/contactRouter');

const cors = require('cors');

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || '4000';

app.use('/contacts', contactRouter);


app.get('/', (req, res) => {
  res.status(200).send(`API active on port: ${PORT}`);
});

module.exports = app;
