import React from 'react';
import ReactDOM from 'react-dom';
import {login, signup } from './util/session_api_util';
import configureStore from './store/store.js';
import Root from './components/root'
import { fetchBusinesses } from './actions/business_actions';

document.addEventListener('DOMContentLoaded', () => {

    // window.login = login;
    // window.signup = signup;
    let preloadedState = {};
    if (window.currentUser) {
         preloadedState = { entities: { users: { [window.currentUser.id]: window.currentUser}}, session: { id: window.currentUser.id }};
    }
    let store = configureStore(preloadedState);

    window.dispatch = store.dispatch;

    window.getState = store.getState;
    window.fetchBusinesses = fetchBusinesses


    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});