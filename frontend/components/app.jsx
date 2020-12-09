import React from "react";
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute } from '../util/route_util';


const App = () => (
    <div>
        <div className='info'>
            <div className='github'>
                <span><a href="https://www.linkedin.com/in/william-leung-60589a73/"><img src={window.linkedinURL} /></a> </span>
                <span><a href="#"><img src={window.emailURL} /></a> </span>
                <span><a href="https://github.com/1071919wl"><img src={window.githubURL} /></a> </span>
                <span><a href="https://github.com/1071919wl/heighten_fullstack"><img src={window.forkURL} /></a> </span>     
            </div>
            <div className='info_spacing'></div>
            <div className='cart'>
                <GreetingContainer className='test'/>
                <span><button type='submit'><img src={window.cartURL} /></button></span>
            </div>
        </div>

        <header>
            <Link to="/" className="header-link">
                <span>heighten</span>
            </Link>
        </header>
        <div className='login_signup'>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
        </div>
        <Route exact path="/" />


    </div>
);

export default App;

