import React from 'react';
import { Link } from 'react-router-dom';

import SignUpForm from './signup_form';


class SessionForm extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleInput(field){
        return e => 
            this.setState({
                [field]: e.target.value
            });
    };

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors(){
        return(
            <ul>
                {this.props.errors.map((error, i) =>(
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    handleDemo(e) {
        const demoUser = {email: 'Demo@user.com', password: 123456}
        const user = Object.assign({}, demoUser);
        this.props.processForm(user);
    }


    render(){
        return (
            <div>
                <span className='login_title'>Customer Login</span>
                
                <div className='login_form_container'>
                    {this.renderErrors()}

                    <div className='left_login'>
                        <h2 className='sub_title'>Registered Customers</h2>
                        <hr/>
                        <form onSubmit={this.handleSubmit} className='login_form_box'>
                            <p>If you have an account, sign in with your email address.</p>

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

                            <button type="submit" value="Sign In" className='signinButton'>Sign In</button>
                            <span className='requried_field'>*Required Field</span>
                        </form>
                    </div>

                    <div className='spacer_login'></div>
                    
                    <div className='right_login'>
                        <h1 className='sub_title'>New Customers</h1>
                        <hr />
                        <div className='userOption'>
                            <p>Creating an account has many benefits: check out faster, keep more than one address, track orders and more.</p> 
                            {this.props.formType === "login"
                                ? <Link to='/signup' className='createButton'>Create an account</Link>
                                : <Link to='/login' >Sign In</Link> 
                            }
                        
                            <button type='submit' onClick={this.handleDemo} className='demoButton'>Demo User</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SessionForm;