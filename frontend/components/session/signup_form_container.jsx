import React from 'react';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Sign Up'
});

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user)),
    processDemo: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);