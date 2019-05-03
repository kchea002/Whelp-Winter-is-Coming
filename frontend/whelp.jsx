import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup } from './util/session_api_util';
import configureStore from './store/store.js';
import Root from './components/root'

document.addEventListener('DOMContentLoaded', () => {

    // window.login = login;
    // window.signup = signup;
    // window.dispatch = store.dispatch;
    let preloadedState = {};
    if (window.currentUser) {
         preloadedState = { entities: { users: { [window.currentUser.id]: window.currentUser}}, session: { id: window.currentUser.id }};
    }
    let store = configureStore(preloadedState);

    window.getState = store.getState;


    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});