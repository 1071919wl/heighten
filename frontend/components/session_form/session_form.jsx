import React from 'react';
import { Link } from 'react-router-dom';

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
            <div className='login_form_container'>
                {this.renderErrors()}
                <form onSubmit={this.handleSubmit} className='login_form_box'>
                    <h1>{`${this.props.formType === "login"
                        ? "Registered Customers"
                        : "Create New Customer Account"}`}
                    </h1>
                    <p>{`${this.props.formType === "login"
                        ? "If you have an account, sign in with your email address."
                        : '' }`}
                    </p>
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
                    <input type="submit" value={`${this.props.formType === "login" ? "Sign In" : "Create An Account"}`} />
                </form>
                <div>
                    {this.props.formType === 'login' 
                        ? <button type='submit' onClick={this.handleDemo}>Demo User</button> 
                        : null 
                    }
                </div>
            </div>
        )
    }
}

export default SessionForm;