import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Kategori extends Component {
    render() {
        return (
            <div className="container mb-5 mr-5">
                <div className="row">
                    <div className="col-md-3">
                        <button onClick={(e) => this.props.kategori(e)} type="button" class="btn btn-outline-info">Olahraga</button>
                    </div>
                    <div className="col-md-3">
                        <button onClick={(e) => this.props.kategori(e)} type="button" class="btn btn-outline-info">Kesehatan</button>
                    </div>
                    <div className="col-md-3">
                        <button onClick={(e) => this.props.kategori(e)} type="button" class="btn btn-outline-info">Fashion</button>
                    </div>
                    <div className="col-md-3">
                        <button onClick={(e) => this.props.kategori(e)} type="button" class="btn btn-outline-info">Teknologi</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Kategori;