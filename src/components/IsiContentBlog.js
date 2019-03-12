import React, { Component } from 'react';

class IsiContentBlog extends Component {
    render() {
        return (
            <div>
                <a className="text-center" href="#">
                    <img className="img-fluid rounded mb-3 mb-md-0 mx-auto d-block" src={this.props.img} alt=""/>
                </a>
                <h3>{ this.props.title }</h3>
                <p>{ this.props.content }</p>
                <div className="text-right">
                    <a href="#">Baca selengkapnya...</a>
                </div>
                <hr/>
            </div>
        )
    }
}

export default IsiContentBlog;