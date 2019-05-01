import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Sign Up'
});

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(SessionForm);