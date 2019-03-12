import React, { Component } from 'react';
import IsiTopArticle from './IsiTopArticle';

class TopArticle extends Component {
    render() {
        return (
            <div className="col-md-3">
                {this.props.listTopNews.map((item, key) => {
                    return <IsiTopArticle key={key} title={item.title} img={item.urlToImage} content={item.content}/>
                })}
            </div>
        )
    }
}

export default TopArticle;