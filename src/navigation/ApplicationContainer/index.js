import React from 'react';
import {
    BrowserRouter as Router, Route
} from "react-router-dom";
import {
    Portfolio,
    Project
} from '../../containers';
//
const ApplicationContainer = () => (
    <Router>
        <Route exact path='/' component={Portfolio} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route path="/Project" component={Project} />
        <Route path="/Portfolio/:id" component={Portfolio} />
    </Router>
)

export default ApplicationContainer