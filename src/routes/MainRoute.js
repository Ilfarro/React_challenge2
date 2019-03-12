import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Profile from '../pages/Profile';
// import NotMatch from '../pages/NotMatch';

class MainRoute extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component = {Home} />
                <Route exact path='/signin' component = {SignIn} />
                <Route exact path='/profile' component = {Profile} />
                {/* <Route component = {NotMatch} /> */}
            </Switch>
        )
    }
}

export default MainRoute;