import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import {actions} from '../store'


class SignIn extends Component {

    doLogin = () => {
        this.props.postLogin().then(() => {
            this.props.history.replace('/profile');
        });
    };

    render() {
        console.log('Propsss', this.props);
        return (
            <section className='content signin'>
                <form onSubmit = {e => e.preventDefault()}>
                    <h4>Sign In</h4>
                    <div>
                        <input type='text' name='username' placeholder='Username' onChange = {e => this.props.setField(e)} />
                    </div>
                    <div>
                        <input type='password' name='password' placeholder='Password' onChange = {e => this.props.setField(e)} />
                    </div>
                    <button onClick={() => this.doLogin()}>Sign In</button>
                    <button type='reset'>Reset</button>
                </form>
            </section>
        );
    }
}

export default connect(
    'username, password',
    actions
)(withRouter(SignIn));