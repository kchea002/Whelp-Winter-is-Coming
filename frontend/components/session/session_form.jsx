import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state)
    }

    handleDemoUser(e) {
        e.preventDefault();
        this.props.processDemo({ email: 'jonsnow@westeros.com', password: 'password' });
    }



    renderErrors(){
        if (this.props.errors.length > 0) {
            return (

                <div className="login-errors">

                    <ul>
                        {this.props.errors.map((error, i) => (
                            <h3 className="login-error-message" key={`error-${i}`}>{error}</h3>
                        ))}
                    </ul>
                </div>
            )
        }
        return "";
    }

    componentWillUnmount(){

    }

    title() {
        if (this.props.formType === 'Sign Up') {
            return (
                <div>
                    <h2 className="login-title"> Sign Up for Whelp</h2>
                    <h3 className="login-subtitle"> Already belong to a house? </h3>
                    <h3 className="login-subtitle"><Link to={'/login'} >Log In</Link> </h3>
                </div>
               
            ) 
        } else {
            return (

                <div>
                    <h2 className="login-title"> Log In to Whelp</h2>
                    <h3 className="login-subtitle"> Which house do you represent? </h3>
                    <h3 className="login-subtitle"><Link to={'/signup'} >Sign Up </Link> </h3>
                </div>
            )
        }
    }



    render() {
        return (
        
            <div>
                <div className="login-header"> 
            
                        <Link to={'/'}>
                        <img className="login-logo" src="https://i.imgur.com/O22tB8P.png" />
                        </Link>
        
                </div>

            <div className="login-top">
                    {this.renderErrors()}
                    <div className="login-main">
                       
                        {this.title()}
                        
                        <form onSubmit={this.handleSubmit} className="login-form-box">
                            
                            <div className="login-form">
                        
                                <input type="email"
                                    value={this.state.email}
                                    placeholder="Email"
                                    onChange={this.update('email')}
                                    className="login-input" />

                                <input type="password"
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={this.update('password')}
                                    className="login-input" />
                                <input className="session-submit" type="submit" value={this.props.formType} />
                            </div>
                        </form>

                        <form onSubmit={this.handleDemoUser} className="login-form-box">
                            <input className="demo-log" type="submit" value="Demo User" />
                        </form>
                    </div>

                    <div className="login-picture">
                        <img src="https://www.pngkey.com/png/full/118-1180266_house-targaryen-png-image-house-targaryen-logo-png.png"></img>
                    </div>
            
            
            </div>
                
                
            </div>
        )
    }

    
}


export default SessionForm;