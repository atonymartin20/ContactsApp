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