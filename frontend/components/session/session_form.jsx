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

            
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="login-form-content">
                        {/* {newUserForm} */}
                        <input type="email" required
                            value={this.state.email}
                            placeholder="Email"
                            onChange={this.update('email')}
                            className="login-form" />

                        <input type="password" required
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.update('password')}
                            className="login-input" />

                    

                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                </form>


            </div>
        )
    }

    
}


export default SessionForm;