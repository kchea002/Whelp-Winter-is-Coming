import React from 'react';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Log In'
});

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    processDemo: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(SessionForm);