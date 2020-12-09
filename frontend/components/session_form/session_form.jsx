import React from 'react';

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
                    <h1>{`${this.props.formType === "login"
                        ? "Registered Customers"
                        : "Create New Customer Account"}`}
                    </h1>
                {this.renderErrors()}
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
                    <input type="submit" value={`${this.props.formType === "login" ? "Sign In" : "Create An Account"}`} />
                </form>
                {this.props.formType === 'login' 
                    ? <button type='submit' onClick={this.handleDemo}>Demo User</button> 
                    : null 
                }
            </div>
        )
    }
}

export default SessionForm;