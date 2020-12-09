import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return e =>
            this.setState({
                [field]: e.target.value
            });
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signupForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className='login_form_container'>
                {this.renderErrors()}
                <h1>Create New Customer Account</h1>
                
                <form onSubmit={this.handleSubmit} className='login_form_box'>
                    <label>Email:
                        <input type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>

                    <label>Password:
                        <input type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <input type="submit" value="Create An Account" />
                </form>
                {this.props.formType === "login"
                    ? <Link to='/signup'>Create an account</Link>
                    : <Link to='/login' >Sign In</Link>
                }`
            </div>
        )
    }
}

export default SignUpForm;