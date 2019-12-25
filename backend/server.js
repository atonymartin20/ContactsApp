const app = require('./app');

const PORT = process.env.PORT || '6999';

app.listen(PORT, () => {
  console.log(`\nListening on port ${PORT}\n`);
});