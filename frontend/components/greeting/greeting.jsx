import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, demo}) => {
    return (
        <div>
            <div className="log"><Link to='/login'>Log In </Link></div>
            <div className="sign"><Link to='/signup'>Sign Up </Link></div>
        
        </div>
    )
}

export default Greeting;