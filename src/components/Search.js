import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import './Search.css'

class Search extends Component {
    render() {
        return (
            <div className="container">
                <br/>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <form className="card card-sm">
                            <div className="card-body row no-gutters align-items-center">
                                <div className="col-auto">
                                    <i className="fas fa-search h4 text-body"></i>
                                </div>
                                <div className="col">
                                    <input value = {this.props.search} onChange = {this.props.handleChange} name='search' className="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords"/>
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-lg btn-success" type="submit">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            <hr/><br/>
            </div>
        )
    }
}

export default connect(
    'search',
    actions
)(withRouter(Search));