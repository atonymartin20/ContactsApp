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
// 2. Build add contact page
// 3. Create on click for redirect on Edit button
// 4. Create on Click for redirect on delete button
// 5. Create on Click for redirect on clicking contact card not in icons
// 6. Add View one contact view
// 7. Add edit contact view
// 8. Add delete modal
// 9. Complete in theory front end
// 10. Begin working on backend
// 11. run yarn
// 12. add cors, bcryptjs, express, helmet, knex, pg, sqlite3 as dependencies
// 13. add nodemon as dev Dependency
// 14. create knexfile.js
// 15. add index.js
// 16. Update heroku in this index.js and in README.md