import React from 'react';
import { Link } from 'react-router-dom';
import ProfileContainer from './profile_container';

const Greeting = ({currentUser, demo}) => {
    
    const noUser = () => (
        <div className="right-nav">
            <div className="log"><Link to='/login'>Log In </Link></div>
            <div className="sign"><Link to='/signup'>Sign Up </Link></div>
            <button className="demo-login" onClick={demo}>Demo Log In</button>
        </div>
    );

    const loggedUser = () => (
        <ProfileContainer />
    );

    if (currentUser) {
        return loggedUser();
    } else {
        return noUser();
    }
}

export default Greeting;