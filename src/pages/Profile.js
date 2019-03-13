import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';

class Profile extends Component {
    render () {
    if (!this.props.is_login) {
        return <Redirect to = {{ pathname: '/signin' }} />;
    } else {
        return (
            <section>
                <h1 style={{ textalign: 'center' }}>Profile</h1>
                <h1><label>Email:</label> {this.props.email} </h1>
                <h1><label>Full Name:</label> {this.props.full_name} </h1>
            </section>
        );
    }
};
}

export default connect(
    'is_login,email,full_name',
    actions
)(withRouter(Profile));