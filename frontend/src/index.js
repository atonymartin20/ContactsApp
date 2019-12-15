import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';


ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById('root')
);

// TO DO LIST:
// 1. Add a add contact route
// 2. Build add contact page
// 3. Create on click for redirect on Edit button
// 4. Create on Click for redirect on delete button
// 5. Create on Click for redirect on clicking contact card not in icons