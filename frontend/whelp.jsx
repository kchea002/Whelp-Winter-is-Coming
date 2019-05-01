import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup } from './util/session_api_util';
import configureStore from './store/store.js';
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {

    const store = configureStore();
    
    window.login = login;
    window.signup = signup;
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});