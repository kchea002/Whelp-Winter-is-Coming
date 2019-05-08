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
                            <div>
                                <img className="profile-picture" src={this.props.currentUser.photo}></img>
                            </div>
                            <div className="downarrow-container">
                                <img className="downarrow" src="https://static.thenounproject.com/png/492324-200.png" />
                            </div>
                        </button>

                
                       {    this.state.profile ? (
                                 <div className="profile-container" >
                                    <div className="profile-pic">
                                        <img className="profile-picture-two" src={this.props.currentUser.photo}></img>                                       
                                        <div>
                
                                            <img className="profile-house" src="https://dtkp6g0samjql.cloudfront.net/uploads/photo/file/12583482/gallery_hero_il_fullxfull.1189448237_bytp.jpg" />

                                        </div>
                            
                                    </div>
                                    
                                    <div className="profile-info">
                                        <div className="profile-name-container">
                                            <img className="profile-person" src="https://www.fkbga.com/wp-content/uploads/2018/07/person-icon-6.png" />
                                            <h3 className="profile-name">{this.props.currentUser.first_name} {this.props.currentUser.last_name}</h3>
                                        </div>
                                        <div id="p2" className="profile-name-container">
                                            <img className="profile-person" src="https://png.pngtree.com/svg/20170116/5f59553e9e.png" />
                                             <h3 className="profile-name-two">{this.props.currentUser.house}</h3>
                                        </div>
                                
                                        <h3 id="p3">{this.props.currentUser.email}</h3>
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