import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Profile extends Component {
    constructor(){
        super()
        this.state = {profile: false};
        this.showProfile = this.showProfile.bind(this);
        this.hideProfile = this.hideProfile.bind(this);
    }

    showProfile(){
        // e.preventDefault()
        this.setState({profile: true}, () => {
            document.addEventListener('click', this.hideProfile); 
        })
    }
  
    


    hideProfile() {
        // e.preventDefault()
        this.setState({ profile: false }, () => {
            document.removeEventListener('click', this.hideProfile);
        })
    }
    

    render() {
        return (
                    <div className="profile-width">
                        <button className="profile-button" onClick={this.showProfile}>
                            <img className="profile-picture" src={this.props.currentUser.photo}></img>
                            <div className="downarrow-container">
                                <img className="downarrow" src="https://static.thenounproject.com/png/492324-200.png" />
                            </div>
                        </button>

                
                       {    this.state.profile ? (
                                 <div className="profile-container" >
                                    <img className="profile-picture-two" src={this.props.currentUser.photo}></img>
                                    <div className="profile-info">
                                        <h3>{this.props.currentUser.email}</h3>
                                    </div>
                                    <div >
                                         <button className="logout-button" onClick={this.props.logout}>Log Out</button>
                                    </div>
                                </div>
                            
                            ) : (
                                null
                            )

                       } 
                               
                            
                    
                          
    
                            
                    </div>  
                )
            }
}

export default Profile;