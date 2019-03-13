import React, { Component } from 'react';
import axios from 'axios';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import { actions } from '../store';
import '../styles/App.css';
import Search from '../components/Search';
import OneRow from '../components/OneRow';
import Kategori from '../components/Kategori';

const urlHeadline = 'https://newsapi.org/v2/top-headlines?' + 'country=id&' + 'apiKey=66cd3036f20e42b199d9335f9283b88e';
const urlEverything = 'https://newsapi.org/v2/everything?' + 'q=manchester united&' + 'apiKey=66cd3036f20e42b199d9335f9283b88e';


class Home extends Component {

    // componentDidMount() {
    //     const self = this;
    //     axios
    //         .get(urlEverything)
    //         .then(function(response) {
    //             self.setState({ listNews: response.data.articles });
    //             // console.log(response.data);
    //         })
    //         .catch(function(error) {
    //            console.log(error); 
    //         });

    //     axios
    //         .get(urlHeadline)
    //         .then(function(response) {
    //             self.setState({ listTopNews: response.data.articles });
    //         })
    //         .catch(function(error) {
    //             console.log(error);
    //         })
    // }

    componentDidMount() {
        this.props.getNews();
    }

    handleChange = (e) => {
        this.props.setField(e)
        this.props.doSearch(e.target.value);
    }

    kategori = (e) => {
        this.props.doSearch(e.target.textContent);
    }


    render() {
        if (this.props.is_login === false) {
            return <Redirect to = {{ pathname: '/signin' }} />;
        } else {
            return (
                <div>
                    <Search handleChange = { this.handleChange }/>
                    <Kategori kategori = {this.kategori} />
                    <OneRow listNews = {this.props.listNews} listTopNews = {this.props.listTopNews} />
                </div>
            );
        }
    }
}

export default connect(
    'is_login,listNews,listTopNews',
    actions
)(withRouter(Home));