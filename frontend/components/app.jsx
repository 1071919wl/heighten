import React from "react";
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import Home from './home/home';
import ProductContainer from './product/product_container';
import CategoryContainer from './category/category_container';
import CartCheckoutContainer from './cart/cart_checkout_container';
import Error404 from './error_404';
import { AuthRoute } from '../util/route_util';


import SearchContainer from './search/search_container';
// import Search from './search/search';


//! const App = () => (


class App extends React.Component {
    constructor(props){
        super(props);

    }


//     changeFlag(){
//         this.setState({
//             searchFlag: !this.state.searchFlag
//         })
//     }

    // componentDidMount() {
    //     this.props.fetchProducts()
    // }


    render(){

    //     let status = null;
    //     if(!this.state.searchFlag){
    //         status = <div className='search_bar'>
    //                     <input type="text" input='value' />
    //                     <div onClick={() => this.changeFlag()}>
    //                         X
    //                     </div>
    //                 </div>
    //     }else{
    //         status = <div className='search'>
    //                     <span><button type='submit' onClick={() => this.changeFlag()} className='search_icon'><img src={window.searchURL} /></button></span>
    //                 </div>
    //     }
        return (

        
    <div>
        <div className='info'>
            <div className='github'>
                <span><a href="https://www.linkedin.com/in/william-leung-60589a73/"><img id='linkedin_info' src={window.linkedinURL} /></a> </span>
                <span><a href="mailto:w.leung.93@gmail.com"><img src={window.email2URL} /></a> </span>
                <span><a href="https://github.com/1071919wl"><img src={window.githubURL} /></a> </span>
                <span><a href="https://github.com/1071919wl/heighten_fullstack"><img src={window.fork2URL} /></a> </span>     
            </div>
            <div className='info_spacing'></div>
            <div className='cart'>
                <GreetingContainer className='test'/>
                <Link to='/cart'>
                    <span>
                        <img src={window.cartURL} className='actualCartImg' id='test'/>
                        </span>
                </Link>
            </div>
        </div>

        <header>

            <div className="header">
                <Link to="/" className="header-link">
                    <span>heighten</span>
                </Link>

                <div className='header_center'>
                    <ul className='desk_btn'> <Link to={`/categories/8`} className='dropdownHeader'>Standing Desks</Link>
                        <div className="desk_content">
                            <div className='forFlex'>
                                <img src={window.deskURL} className='menuImg'/>
                                <div className='randomSpacing'></div>
                                <div className='menuContent'>
                                        <div className='dropLink1'>
                                            <div className='text_align_img top'>
                                                <Link to='/categories/8' className='img_align'>
                                                    <img src={window.remiURL} className='littleImg' />
                                                    <div>All Desks</div>
                                                </Link>
                                            </div>
                                            <div className='text_align_img'>
                                                <Link to='/categories/8' className='img_align'>
                                                    <img src={window.jarvisURL} className='littleImg'/>
                                                    <div>Jarvis Standing Desks</div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className='dropLink2'>
                                            <div className='text_align_img top'>
                                                <Link to='/categories/8' className='img_align'>
                                                    <img src={window.convertersURL} className='littleImg' />
                                                    <div>Desk Converters</div>
                                                </Link>    
                                            </div>
                                            <div className='text_align_img'>
                                                <Link to='/categories/8' className='img_align'>
                                                    <img src={window.SmallSpacesURL} className='littleImg' />
                                                    <div>Desks for Small Spaces</div>
                                                </Link>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </ul>

                    <ul className='chair_btn'><Link to='/categories/9' className='dropdownHeader'>Chairs</Link>
                        <div className="chair_content">
                            <div className='forFlex'>
                                <img src={window.chairsMenuURL} className='menuImg' />
                                <div className='randomSpacing'></div>
                                <div className='menuContent'>
                                    <div className='dropLink1'>
                                        <div className='text_align_img top'>
                                            <Link to='/categories/9' className='img_align'>
                                                <img src={window.littleChairURL} className='littleImg' />
                                                <div>All Chairs</div>
                                            </Link>
                                        </div>
                                        <div className='text_align_img'>
                                            <Link to='/categories/9' className='img_align'>
                                                <img src={window.chair2URL} className='littleImg' />
                                                <div>For Traditional Desks</div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='dropLink2'>
                                        <div className='text_align_img top'>
                                            <Link to='/categories/9' className='img_align'>
                                                <img src={window.kneelingURL} className='littleImg' />
                                                <div>Kneeling Chairs</div>
                                            </Link>
                                        </div>
                                        <div className='text_align_img'>
                                            <Link to='/categories/9' className='img_align'>
                                                <img src={window.standingChairURL} className='littleImg' />
                                                <div>For Standing Desks</div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>

                    <ul className='workplace_btn'><Link to='/categories/8' className='dropdownHeader'>Workplace</Link>
                        <div className="workplace_content">
                            <div className='forFlex'>
                                <img src={window.menu3URL} className='menuImg' />
                                <div className='randomSpacing'></div>
                                <div className='menuContent'>
                                    <div className='dropLink1'>
                                        <div className='text_align_img top'>
                                            <Link to='/categories/9' className='img_align'>
                                                <img src={window.wpseatingURL} className='littleImg' />
                                                <div>Seating</div>
                                            </Link>
                                        </div>
                                        <div className='text_align_img'>
                                            <Link to='/categories/8' className='img_align'>
                                                <img src={window.wptablesURL} className='littleImg' />
                                                <div>Office Tables</div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='dropLink2'>
                                        <div className='text_align_img top'>
                                            <Link to='/categories/10' className='img_align'>
                                                <img src={window.workplaceAllURL} className='littleImg' />
                                                <div>Other Neccesities</div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>

                    <ul className='accessories_btn'><Link to='/categories/10' className='dropdownHeader'>Accessories</Link>
                        <div className="accessories_content">
                            <div className='forFlex'>
                                <img src={window.menu4URL} className='menuImg' />
                                <div className='randomSpacing'></div>
                                <div className='menuContent'>
                                    <div className='dropLink1'>
                                        <div className='text_align_img top'>
                                            <Link to='/categories/10' className='img_align'>
                                                <img src={window.accessoriesAllURL} className='littleImg' />
                                                <div>All Accessories</div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>


                <div className='hoverPadding'>
                    <div className='darn_search_btn'><img src={window.searchURL} className='actualSearchImg'/>
                        <div className="darn_search_content">
                            <div className='forFlex_search'>
                                <div>
                                    <SearchContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
        <div className='login_signup'>
            <Switch>
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <Route path="/products/:id" component={ProductContainer} /> //!need to call the container table first or youre skipping a step
                <Route path="/categories/:id" component={CategoryContainer}/>
                <Route path="/cart" component={CartCheckoutContainer} />
                {/* <Route exact path="/search" component={SearchContainer} /> */}
                <Route exact path="/" component={Home}/>
                <Route path='*' component={Error404} />
            </Switch>
        </div>
        
    </div>
        
        
        )
    }
}    

//! );

export default App;

