import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from './api/firebase'

import Home from './pages/Home'
import Login from './pages/Login'

import './App.css'

function App() {

    const [user] = useAuthState(auth)

    return (
        <Router >
            <Switch>
                <Route path="/" exact={true} component={Login} />  
                { !user ? <Redirect to="/" /> : <Route path="/home" exact={true} component={Home}/>}
            </Switch>
        </Router>
    )
}

export default App;
