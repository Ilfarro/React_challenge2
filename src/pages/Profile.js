import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Profile extends Component {
    render () {

    const is_login = JSON.parse(localStorage.getItem('is_login'));
    const email = localStorage.getItem('email');
    const full_name = localStorage.getItem('full_name');

    if (is_login === null) {
        return <Redirect to = {{ pathname: '/signin' }} />;
    } else {
        return (
            <section>
                <h1 style={{ textalign: 'center' }}>Profile</h1>
                <h1><label>Email:</label> {email} </h1>
                <h1><label>Full Name:</label> {full_name} </h1>
            </section>
        );
    }
};
}

export default Profile;