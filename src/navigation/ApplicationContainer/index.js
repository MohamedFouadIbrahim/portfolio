import React from 'react';
import {
    BrowserRouter as Router, Route
} from "react-router-dom";
import {
    Portfolio,
    Project
} from '../../containers';

const ApplicationContainer = () => (
    <Router>
        <Route path={`/Portfolio`} component={Portfolio} />
        <Route path="/Portfolio/:id" component={Portfolio} />
        <Route path="/Project" component={Project} />
    </Router>
)

export default ApplicationContainer