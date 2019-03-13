import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoAlterraAcademy from '../images/logo/logo-alterra-academy.png'
import './Navigation.css'

class Navigation extends Component {
    render() {
        return (
            <div className="container">
                <header>
                    <div className="row">
                        <div className="col-sm-3 col-md-2">
                            <img id="logo" src={logoAlterraAcademy} width="100px" />
                        </div>
                        <div className="col-sm-9 col-md-10">
                            <ul className="nav justify-content-end">
                                <li className="nav-item">
                                    <a className='nav-link'><Link to='/'>HOME</Link></a>
                                </li>
                                <li className="nav-item">
                                <a className='nav-link'><Link to='/profile'>PROFILE</Link></a>
                                </li>
                                <li className="nav-item">
                                    <a className='nav-link'><Link to='/signin'>SIGN IN</Link></a>
                                </li>
                                <li className="nav-item">
                                    <p className='nav-link'><Link to='/' onClick={() => this.props.postSignOut()}>
                                        SIGN OUT
                                    </Link></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Navigation;