import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    render() {
        return (
        
            <div>
                <div className="login-header">
                    <div className="header-logo-center">
                        <h1 className="login-logo">
                            <Link to={'/'}>Whelp</Link>
                        </h1>
                    </div>
                </div>

            <div className="login-top">
                    <div className="login-main">
                        <form onSubmit={this.handleSubmit} className="login-form-box">
                            <div className="login-form-content">

                                <input type="email" required
                                    value={this.state.email}
                                    placeholder="Email"
                                    onChange={this.update('email')}
                                    className="login-input" />

                                <input type="password" required
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={this.update('password')}
                                    className="login-input" />
                                <input className="session-submit" type="submit" value={this.props.formType} />
                            </div>
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