import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => {
        return (
            <nav>
                <Link to='/login'>Sign In</Link>
                <br/>
                <Link to='/signup'>Create an account</Link>
            </nav>
        )
    };

    const personalGreeting = () => {
        return (
            <div>
                <h2>Welcome back!</h2>
                <button type='submit' onClick={logout}>Log Out</button>
            </div>
        )
    };

    return !!currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;

