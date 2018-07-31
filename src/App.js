import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {Router, Route} from 'react-router';

import UserSignin from './components/userSignin.js';
import CreateUser from './components/createUser.js'
import TaskList from './components/projectList.js';

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={UserSignin}/>
                <Route path="createUser" component={CreateUser}/>
                <Route path="taskList" component={TaskList}>

                </Route>
            </Router>
        )
            ;
    }
}


export default App;
