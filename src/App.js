import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

import './App.css'

function App() {
    return (
        <Router >
            <Switch>
                <Route path="/" exact={true} component={Home}/> 
                <Route path="/settings" component={Dashboard} /> 
                <Redirect from='*' to='/' />    
            </Switch>
        </Router>
    )
}

export default App;
