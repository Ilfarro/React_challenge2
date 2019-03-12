import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

// import App from './App';
import AppRouter from './AppRouter';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

const rootEl = document.getElementById('root');
const render = Component =>
    ReactDOM.render(
        <BrowserRouter>
            <Component />
        </BrowserRouter>,
        rootEl
    );

// ReactDOM.render(<App />, document.getElementById('root'));

render(AppRouter);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();