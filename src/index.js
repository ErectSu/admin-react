import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from 'react-router-dom';
import './index.css';
import history from './utils/history';
import * as serviceWorker from './serviceWorker';
import RouterIndex from "./router";

ReactDOM.render(
    <HashRouter history={history}>
        <RouterIndex/>
    </HashRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
