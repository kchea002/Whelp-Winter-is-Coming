import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './greeting/homepage';
import { AuthRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import Footer from './greeting/footer';
import BusinessContainer from './business/business_index_container';



const App = () => (
    <div>
        <Route exact path="/" component={Homepage} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <Route exact path="/businesses" component={BusinessContainer} />
        {/* <Route exact path="/biz/businessId" component={BusinessShowContainer} /> */}
        <Route path="/" component={Footer} />
    </div>
);

export default App;