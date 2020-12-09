import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {

    const sessionLinks = () => {
        return (
            <div>
                <Link to='/login' className='infoSignin'>Sign In</Link>
                <br/>
                {/* <Link to='/signup'>Create an account</Link> */}
            </div>
        )
    };

    const personalGreeting = () => {
        return (
            <div className="header-group">
                <button type='submit' onClick={logout}>Log Out</button>
            </div>
        )
    };

    return !!currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;

