import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import '../styles/App.css';
import Search from '../components/Search';
import OneRow from '../components/OneRow';
import Kategori from '../components/Kategori';

const urlHeadline = 'https://newsapi.org/v2/top-headlines?' + 'country=id&' + 'apiKey=66cd3036f20e42b199d9335f9283b88e';
const urlEverything = 'https://newsapi.org/v2/everything?' + 'q=manchester united&' + 'apiKey=66cd3036f20e42b199d9335f9283b88e';


class Home extends Component {
    constructor (props){
        super(props);
        this.state = {
            listNews : [],
            listTopNews: []
        };
        this.handleChange = this.handleChange.bind(this)
        this.kategori = this.kategori.bind(this)
    }

    componentDidMount() {
        const self = this;
        axios
            .get(urlEverything)
            .then(function(response) {
                self.setState({ listNews: response.data.articles });
                // console.log(response.data);
            })
            .catch(function(error) {
               console.log(error); 
            });

        axios
            .get(urlHeadline)
            .then(function(response) {
                self.setState({ listTopNews: response.data.articles });
            })
            .catch(function(error) {
                console.log(error);
            })
    }

    handleChange(e) {
        this.doSearch(e.target.value);
    }

    kategori(e) {
        this.doSearch(e.target.textContent);
    }


    doSearch(keyword) {
        const self = this;
        const urlSearch = 'https://newsapi.org/v2/everything?' + 'q=' + keyword + '&apiKey=66cd3036f20e42b199d9335f9283b88e';
        axios
            .get(urlSearch)
            .then(function(response) {
                self.setState({ listNews: response.data.articles });
            })
            .catch(function(error) {
                console.log(error);
            })
    }

    render() {
        const { listNews, listTopNews } = this.state;
        const is_login = JSON.parse(localStorage.getItem('is_login'));
        const email = localStorage.getItem('email');
        const full_name = localStorage.getItem('full_name');
        if (is_login === null) {
            return <Redirect to = {{ pathname: '/signin' }} />;
        } else {
            return (
                <div>
                    <Search handleChange = { this.handleChange }/>
                    <Kategori kategori = {this.kategori} />
                    <OneRow listNews = {listNews} listTopNews = {listTopNews} />
                </div>
            );
    }
}
}

export default Home;