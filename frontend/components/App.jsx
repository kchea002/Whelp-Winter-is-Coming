import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './greeting/homepage';
import { AuthRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';



const App = () => (
    <div>
        <Route exact path="/" component={Homepage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;