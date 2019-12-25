import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/homepage';
import AddContact from './components/contact/addContact.js';
import EditContact from './components/contact/editContact.js';
import ViewContact from './components/contact/viewContact.js';
import { AppContext } from './components/context/appContext.js';

class App extends React.Component {
    componentDidMount() {
        this.context.getContacts();
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/'>
                        <Homepage />
                    </Route>
                    <Route path='/add'>
                        <AddContact />
                        <Homepage />
                    </Route>
                    <Route path='/editContact/:index' render={props => 
                        <EditContact {...props} />
                    } />
                    <Route path='/viewContact/:index' render={props => 
                        <ViewContact {...props} />
                    } />
                    <Route>
                        <Homepage />
                    </Route>
                </Switch>
            </div>
        );
    }
}

App.contextType = AppContext;
export default App;
