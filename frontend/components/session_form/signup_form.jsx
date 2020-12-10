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
            <div>
                <span className='signup_title'>Create New Customer Account</span>

                <div className='signup_form_container'>
                    {this.renderErrors()}

                    <div className='left_signin'>
                        <h2 className='sub_title'>Personal Information</h2>
                        
                        <form onSubmit={this.handleSubmit} className='signup_form_box'>
                            <div className='personal_login'>
                                <label className='name_signup'>First Name:
                                    <input type="text"/>
                                </label>

                                <label className='lname_signup'>Last Name:
                                    <input type="text"/>
                                </label>

                                <div className='check_div'>
                                    <input type="checkbox" checked='checked' className='check'/>                   
                                    <label className='newsletter'>Subscribe to our newsletter:</label>
                                </div>
                                
                            </div>

                        <h2 className='sub_title'>Sign-in information</h2>

                            <div className='sign_info'>
                                <label className='email_signup'>Email:
                                    <input type="text"
                                        value={this.state.email}
                                        onChange={this.handleInput('email')}
                                    />
                                </label>

                                <label className='password_signup'>Password:
                                    <input type="password"
                                        value={this.state.password}
                                        onChange={this.handleInput('password')}
                                    />
                                </label>
                            </div>   

                            <div className='enter_back'>

                                <button type="submit" value="Create An Account" className='signupButton'>Create An Account</button>
                                {this.props.formType === "login"
                                    ? <Link to='/signup'>Create an account</Link>
                                    : <Link to='/login' className='backLogin'>Back</Link>
                                }

                            </div>
                        </form>
                    </div>



                </div>
            </div>
        )
    }
}

export default SignUpForm;