import React from "react";
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Home from './home/home';
import ProductContainer from './product/product_container';
import Error404 from './error_404';
import { AuthRoute } from '../util/route_util';


const App = () => (
    <div>
        <div className='info'>
            <div className='github'>
                <span><a href="https://www.linkedin.com/in/william-leung-60589a73/"><img id='linkedin_info' src={window.linkedinURL} /></a> </span>
                <span><a href="#"><img src={window.email2URL} /></a> </span>
                <span><a href="https://github.com/1071919wl"><img src={window.githubURL} /></a> </span>
                <span><a href="https://github.com/1071919wl/heighten_fullstack"><img src={window.fork2URL} /></a> </span>     
            </div>
            <div className='info_spacing'></div>
            <div className='cart'>
                <GreetingContainer className='test'/>
                <span><button type='submit'><img src={window.cartURL} /></button></span>
            </div>
        </div>

        <header>

            <div className="header">
                <Link to="/" className="header-link">
                    <span>heighten</span>
                </Link>

                <div className='header_center'>
                    <ul className='desk_btn'> <a href="#">Standing Desks</a>
                        {/* <div className="desk_content">
                            <a href="#company">All Desks</a>
                            <a href="#desk_converters">Desk Converters</a>
                            <a href="#standing_desk">Jarvis Standing Desks</a>
                            <a href="#small_spaces">Desks for Small Spaces</a>
                        </div> */}
                    </ul>

                    <ul className='chair_btn'><a href="#">Chairs</a>
                        {/* <div className="chair_content">
                            <a href="#company">All Chairs</a>
                            <a href="#desk_converters">For Traditional Desks</a>
                            <a href="#desk_converters">Kneeling Chairs</a>
                            <a href="#standing_desk">For Standing Desks</a>
                            <a href="#small_spaces">For Small Spaces</a>
                        </div> */}
                    </ul>

                    <ul className='workplace_btn'><a href="#">Workplace</a>
                        {/* <div className="workplace_content">
                            <a href="#company">All Workplace</a>
                            <a href="#desk_converters">Storage and Space Dividers</a>
                            <a href="#standing_desk">Lounge Seating</a>
                            <a href="#small_spaces">Office Tables</a>
                            <a href="#small_spaces">Desk Systems</a>
                        </div> */}
                    </ul>

                    <ul className='accessories_btn'><a href="#">Accessories</a>
                        {/* <div className="accessories_content">
                            <a href="#company">All Accessories</a>
                            <a href="#desk_converters">Standing Mats and Balance Boards</a>
                            <a href="#standing_desk">Wire and Cable Management</a>
                            <a href="#small_spaces">Jarvis Accessories</a>
                            <a href="#small_spaces">Monitor Arms</a>
                            <a href="#small_spaces">Storage</a>
                        </div> */}
                    </ul>
                </div>
                <div className='search'>
                    <span><button type='submit' className='search_icon'><img src={window.searchURL} /></button></span>
                </div>
            </div>

        </header>
        <div className='login_signup'>
            <Switch>
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <Route path="/products/:id" component={ProductContainer} /> //!need to call the container table first or youre skipping a step
                <Route exact path="/" component={Home}/>
                <Route path='*' component={Error404} />
            </Switch>
        </div>
        


    </div>
);

export default App;

// store.dispatch(receiveProduct(fetchProduct(1)))
