const app = require('./app');

const PORT = process.env.PORT || '6999';

app.listen(PORT, () => {
  console.log(`\nListening on port ${PORT}\n`);
});

// TO DO LIST:
// 15. add index.js
// 16. Update heroku in this index.js and in README.md
// 17. Need at add Routers
