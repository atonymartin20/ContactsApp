const app = require('./app');

const PORT = process.env.PORT || '6999';

app.listen(PORT, () => {
  console.log(`\nListening on port ${PORT}\n`);
});


// TO DO LIST:
// 10. Begin working on backend
// 11. run yarn
// 12. add cors, bcryptjs, express, helmet, knex, pg, sqlite3 as dependencies
// 13. add nodemon as dev Dependency
// 14. create knexfile.js
// 15. add index.js
// 16. Update heroku in this index.js and in README.md