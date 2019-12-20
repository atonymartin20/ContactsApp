import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import axios from 'axios';
import AppProvider from './components/context/appContext.js';

axios.defaults.baseURL = process.env.NODE_ENV === 'production'
? 'https://league-management.herokuapp.com'
: 'http://localhost:4000';

ReactDOM.render(
    <AppProvider>
        <Router>
            <App />
        </Router>
    </AppProvider>,
    document.getElementById('root')
);

// TO DO LIST:
// 7. Add View one contact view
// 9. Complete in theory front end
// 10. Begin working on backend
// 11. run yarn
// 12. add cors, bcryptjs, express, helmet, knex, pg, sqlite3 as dependencies
// 13. add nodemon as dev Dependency
// 14. create knexfile.js
// 15. add index.js
// 16. Update heroku in this index.js and in README.md