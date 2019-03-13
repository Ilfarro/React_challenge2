import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Loadable from 'react-loadable';

import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Profile from '../pages/Profile';
// import NotMatch from '../pages/NotMatch';

// const Profile = Loadable({
//     loader: () => import('../pages/Profile'),
//     loading: () => <div>LOAAADDINGG BOSSS</div>
// })

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