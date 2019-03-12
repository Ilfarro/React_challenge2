import React, { Component } from 'react';
import './Gallery.css';
import iconGallery from '../images/ico/ico-gallery.png';
import gambar1 from '../images/img/exp-gallery/jake-allison-1322894-unsplash.jpg';
import gambar2 from '../images/img/exp-gallery/jay-lee-1323073-unsplash.jpg';
import gambar3 from '../images/img/exp-gallery/nordwood-themes-1319985-unsplash.jpg';
import gambar4 from '../images/img/exp-gallery/ryan-1321510-unsplash.jpg';
import gambar5 from '../images/img/exp-gallery/nic-yee-1321843-unsplash.jpg';
import gambar6 from '../images/img/exp-gallery/phil-desforges-1322844-unsplash.jpg';

class Gallery extends Component {
    render() {
        return (
            <div>
            <hr className="gallery-hr-shadow"/>
            <div className="contianer">
                <div className="row justify-content-around">
                    <div className="gallery-icon col-lg-10 col-md-10 cold-sm-10 col-xs-10">
                        <img src={iconGallery} alt="gallery-icon"/>><span className="gallery-text">GALLERY</span>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="gallery-ruler col-lg-10 col-md-10 col-sm-10 col-xs-10">
                        <hr className="gallery-horizontal-line"/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="gallery-image col-md-3 col-sm-12 col-xs-12">
                        <img src={gambar1} className="image-responsive"/>
                    </div>
                    <div className="gallery-image col-md-3 col-sm-12 col-xs-12">
                        <img src={gambar2} className="image-responsive"/>
                    </div>
                    <div className="gallery-image col-md-3 col-sm-12 col-xs-12">
                        <img src={gambar3} className="image-responsive"/>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="gallery-image col-md-3 col-sm-12 col-xs-12">
                        <img src={gambar4} className="image-responsive"/>
                    </div>
                    <div className="gallery-image col-md-3 col-sm-12 col-xs-12">
                        <img src={gambar5} className="image-responsive"/>
                    </div>
                    <div className="gallery-image col-md-3 col-sm-12 col-xs-12">
                        <img src={gambar6} className="image-responsive"/>
                    </div>
                </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
            </div>
        )
    }
}

export default Gallery;