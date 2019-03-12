import React, { Component } from 'react';

class IsiTopArticle extends Component {
    render() {
        return (
            <div>
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">{ this.props.title }</a>
                </div>
            </div>
        )
    }
}

export default IsiTopArticle;