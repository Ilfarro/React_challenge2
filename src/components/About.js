import React, { Component } from 'react';
import './About.css';
import fotoProfil from '../images/img/fotoprofil.jpg';
import iconLocation from '../images/ico/ico-location.png';

class About extends Component {
    render() {
        return (
            <div>
                <section>
                    <img id="photo" src={fotoProfil} width="174px" height="174px" /><br/>
                        <span id="nama">Imorr</span><br/>
                    <img id="icon" src={iconLocation} width="14px" />
                    <span id="kota">Malang, East Java, Indonesia</span><br/>
                    <span id="work">Frontend Dev, UI/UX and Design</span><br/>
                    <a href="#" id="button_CV" className="btn btn-primary btn-lg active" role="button" aria-pressed="true">Download CV</a>
                </section>
                <article>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <div className="aboutme">
                                <h3>About Me</h3>
                                <p>Hi! I am <strong>Imorr</strong>, I work as a <em>Front-end Developer</em> at <span style={{color:'#F47522'}}>Alterra Group</span>.</p>
                                <p>Front-end Developer are contructive work websites use HTML, CSS, and JavaScript.</p>
                                <p>Front-end Developer are the people who make it design and develop the design untul become a website that can run.</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="information">
                                    <h3>Information</h3>
                                    <table>
                                    <tr>
                                        <td><strong>Age</strong></td>
                                        <td>: 50th</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Email</strong></td>
                                        <td>: imorr@alphatech.id</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Address</strong></td>
                                        <td>: Airy Sukun Bandahara 21</td>
                                    </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )
    }
}

export default About;