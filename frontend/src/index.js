import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import axios from 'axios';
import AppProvider from './components/context/appContext.js';

axios.defaults.baseURL = process.env.NODE_ENV === 'production'
? 'https://contacts-app-adm.herokuapp.com' 
: 'http://localhost:6999';

ReactDOM.render(
    <AppProvider>
        <Router>
            <App />
        </Router>
    </AppProvider>,
    document.getElementById('root')
);