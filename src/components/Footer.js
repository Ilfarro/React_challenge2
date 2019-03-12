import React, { Component } from 'react';
import './Footer.css'
import logoAlterraAcademyPlain from '../images/logo/logo-alterra-academy-plain.png';
import iconFacebook from '../images/ico/ico-facebook.png';
import iconTwitter from '../images/ico/ico-twitter.png';
import iconInstagram from '../images/ico/ico-instagram.png';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="footer_logo">
                                <img src={logoAlterraAcademyPlain}/><br/>
                                <span>&copy;Copyright Alterra Group 2019</span>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="footer_sosmed">
                            </div>
                                <h3>Follow Us On</h3>                
                                <ul className="list-style">
                                    <li>
                                        <span><img src={iconFacebook}/>>Facebook</span>
                                    </li>
                                    <li>
                                        <span><img src={iconTwitter}/>>Twitter</span>
                                    </li>
                                    <li>
                                        <span><img src={iconInstagram}/>>Instagram</span>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;