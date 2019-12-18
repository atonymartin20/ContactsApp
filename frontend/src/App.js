import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage';
import AddContact from './components/contact/addContact.js';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <Homepage />
                </Route>
                <Route exact path='/addContact'>
                    <AddContact />
                </Route>

                <Route>
                    <Homepage />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
