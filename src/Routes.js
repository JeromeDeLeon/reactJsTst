import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import ProfileForm from './component/ProfileForm/ProfileForm'
import ViewProfiles from './component/ViewProfiles/ViewProfiles'
import Home from './component/Home/Home';
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/CreateProfile/:title" exact component={ProfileForm} />
                    <Route path="/ViewProfile" exact component={ViewProfiles} />
                    <Route path="/EditProfile" exact component={ProfileForm} />
                </Switch>
            </Router>
        )
    }
}
