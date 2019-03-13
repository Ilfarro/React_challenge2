import createStore from 'unistore';
import axios from 'axios';

const initialState = {
    api_key: "",
    username: "",
    password: "",
    full_name: "",
    email: "",
    is_login: false,
    listNews: [],
    listTopNews: [],
    search: ""
};

const urlHeadline = 'https://newsapi.org/v2/top-headlines?' + 'country=id&' + 'apiKey=66cd3036f20e42b199d9335f9283b88e';
const urlEverything = 'https://newsapi.org/v2/everything?' + 'q=manchester united&' + 'apiKey=66cd3036f20e42b199d9335f9283b88e';

export const store = createStore(initialState);

export const actions = store => ({
    setField: (state, event) => {
        return { [event.target.name]: event.target.value };
    },

    postLogout: state => {
        return { is_login: false };
    },

    postLogin: async state => {
        const data = { username: state.username, password: state.password };
        await axios
            .post("https://ilfarro1.free.beeceptor.com/signin", data)
            .then(response => {
                console.log('post loginnnnnn!!!!', response.data)
                if (response.data.hasOwnProperty('api_key')) {
                    store.setState({
                        'api_key': response.data.api_key,
                        'is_login': true,
                        full_name: state.username,
                        'email': response.data.email
                        // self.props.history.push('/profile')
                    })
                }
            })
            .catch(function(error) {
                console.log(error);
            })
    },

    getNews: state => {
        axios
            .get(urlEverything)
            .then(function(response) {
                store.setState({ listNews: response.data.articles });
                console.log(response.data);
            })
            .catch(function(error) {
               console.log(error); 
            });

        axios
            .get(urlHeadline)
            .then(function(response) {
                store.setState({ listTopNews: response.data.articles });
                console.log(response.data);
            })
            .catch(function(error) {
                console.log(error);
            })
    },

    doSearch(state, keyword) {
        const urlSearch = 'https://newsapi.org/v2/everything?' + 'q=' + keyword + '&apiKey=66cd3036f20e42b199d9335f9283b88e';
        axios
            .get(urlSearch)
            .then(function(response) {
                store.setState({ listNews: response.data.articles });
            })
            .catch(function(error) {
                console.log(error);
            })
    }
})