import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
function App() {
    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <Navbar />
                </Route>
                <Route>

                </Route>
            </Switch>
        </div>
    );
}

export default App;
