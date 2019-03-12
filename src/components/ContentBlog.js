import React, { Component } from 'react';
import IsiContentBlog from './IsiContentBlog';


class ContentBlog extends Component {
    render() {
        return (
            <div className="col-md-9">
                {this.props.listNews.map((item, key) => {
                    return <IsiContentBlog key={key} title={item.title} img={item.urlToImage} content={item.content}/>
                })}
            </div>
        )
    }
}

export default ContentBlog;