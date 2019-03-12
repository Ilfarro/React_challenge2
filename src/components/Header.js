import React, { Component } from 'react';
import './Header.css'
import logoAlterraAcademy from '../images/logo/logo-alterra-academy.png'

class Header extends Component {
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
                                    <a className="nav-link active" href="about.html" style={{color:'#F47522'}}>ABOUT</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="gallery.html">GALLERY</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;