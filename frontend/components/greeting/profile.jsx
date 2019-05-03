import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Profile extends Component {
    constructor(){
        super()
        // this.state = {showprofile: false};
    }

    render() {
        return (
            <div>
                <h1>{this.props.currentUser.email}</h1>
                <div>
                    <img src={this.props.currentUser.photo}></img>
                </div>
                <button onClick={this.props.logout}>Log Out</button>
            </div>
        )

    }
}

export default Profile;